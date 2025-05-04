import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Alert, Spinner, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { submitTrainingJob, TrainingParams } from '../../services/api';
import PredictorLayout from '../../components/PredictorLayout';
import { useTranslation } from 'react-i18next';

const TmTraining: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // 状态变量
  const [datasetFile, setDatasetFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [jobId, setJobId] = useState<string | null>(null);
  
  // 训练参数
  const [epochs, setEpochs] = useState<number>(50);
  const [batchSize, setBatchSize] = useState<number>(32);
  const [learningRate, setLearningRate] = useState<number>(0.001);
  const [validationSplit, setValidationSplit] = useState<number>(0.2);
  
  // 定义颜色和面包屑项
  const mainColor = '#11998e';
  const breadcrumbItems = [
    {
      name: t('common.breadcrumb.home'),
      path: '/',
    },
    {
      name: "Tm " + t('features.tm.titleSuffix'),
      path: '/features/tm',
      color: mainColor,
    },
    {
      name: "Tm " + t('features.train'),
      path: '/training/tm',
      color: mainColor,
    }
  ];
  
  // 处理文件选择
  const handleDatasetFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDatasetFile(e.target.files[0]);
    }
  };
  
  // 表单提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!datasetFile) {
      setError(t('training.form.dataset.error'));
      return;
    }
    
    setLoading(true);
    setError(null);
    
    const trainingParams: TrainingParams = {
      modelType: 'tm',
      datasetFile,
      description,
      trainingParams: {
        epochs,
        batchSize,
        learningRate,
        validationSplit
      }
    };
    
    try {
      const response = await submitTrainingJob(trainingParams);
      
      if (response.success) {
        setSuccess(true);
        setJobId(response.data.jobId);
        // 3秒后跳转到训练任务页面
        setTimeout(() => {
          navigate('/training/jobs');
        }, 3000);
      } else {
        setError(response.error || t('training.form.submitError'));
      }
    } catch (err: any) {
      setError(t('training.form.submitErrorMsg') + ': ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // 渲染表单
  const renderForm = () => (
    <Form onSubmit={handleSubmit}>
      {/* 数据集上传 */}
      <Form.Group className="mb-4">
        <Form.Label>
          <strong>{t('training.form.uploadDataset')}</strong>
        </Form.Label>
        <Form.Control
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleDatasetFileChange}
          disabled={true}
        />
        <Form.Text className="text-muted">
          {t('training.form.tmSupportedFormats')}
          <a href="/sample/tm_training_template.csv" download>{t('training.form.downloadTemplate')}</a>
        </Form.Text>
      </Form.Group>
      
      {/* 任务描述 */}
      <Form.Group className="mb-4">
        <Form.Label>
          <strong>{t('training.form.description')}</strong>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder={t('training.form.descriptionPlaceholder')}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={true}
        />
      </Form.Group>
      
      <Card className="mb-4">
        <Card.Header>
          <strong>{t('training.form.advancedParams')}</strong>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* 训练轮次 */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>{t('training.form.epochs')}</Form.Label>
                <Form.Control
                  type="number"
                  min="10"
                  max="500"
                  value={epochs}
                  onChange={(e) => setEpochs(parseInt(e.target.value))}
                  disabled={true}
                />
                <Form.Text className="text-muted">
                  {t('training.form.epochsRecommendation')}
                </Form.Text>
              </Form.Group>
            </Col>
            
            {/* 批量大小 */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>{t('training.form.batchSize')}</Form.Label>
                <Form.Control
                  type="number"
                  min="8"
                  max="256"
                  step="8"
                  value={batchSize}
                  onChange={(e) => setBatchSize(parseInt(e.target.value))}
                  disabled={true}
                />
                <Form.Text className="text-muted">
                  {t('training.form.batchSizeRecommendation')}
                </Form.Text>
              </Form.Group>
            </Col>
            
            {/* 学习率 */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>{t('training.form.learningRate')}</Form.Label>
                <Form.Control
                  type="number"
                  min="0.0001"
                  max="0.01"
                  step="0.0001"
                  value={learningRate}
                  onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                  disabled={true}
                />
                <Form.Text className="text-muted">
                  {t('training.form.learningRateRecommendation')}
                </Form.Text>
              </Form.Group>
            </Col>
            
            {/* 验证集比例 */}
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>{t('training.form.validationSplit')}</Form.Label>
                <Form.Control
                  type="number"
                  min="0.1"
                  max="0.3"
                  step="0.05"
                  value={validationSplit}
                  onChange={(e) => setValidationSplit(parseFloat(e.target.value))}
                  disabled={true}
                />
                <Form.Text className="text-muted">
                  {t('training.form.validationSplitRecommendation')}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      {/* 提交按钮 */}
      <div className="d-grid gap-2">
        <Button 
          variant="primary" 
          type="submit" 
          size="lg" 
          disabled={true}
          style={{ 
            backgroundColor: mainColor, 
            borderColor: mainColor 
          }}
        >
          {t('training.form.submit')}
        </Button>
      </div>
    </Form>
  );
  
  // 渲染成功信息
  const renderSuccess = () => (
    <Alert variant="success">
      <Alert.Heading>{t('training.form.submitSuccess')}</Alert.Heading>
      <p>
        {t('training.form.tmSuccessMessage')} <strong>{jobId}</strong>
      </p>
      <p>
        {t('training.form.redirectMessage')}
      </p>
      <ProgressBar animated now={100} />
    </Alert>
  );
  
  return (
    <PredictorLayout
      title={t('features.tm.train.titleEn')}
      breadcrumbItems={breadcrumbItems}
      color={mainColor}
    >
      <Alert variant="warning" className="mb-4">
        <Alert.Heading className="fs-4">{t('training.developing.title')}</Alert.Heading>
        <p className="mb-0">
          {t('training.developing.description')}
        </p>
      </Alert>
      
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}
              
              {success ? renderSuccess() : renderForm()}
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-3">{t('training.form.requirements')}</h5>
              <p>
                {t('training.form.tmDatasetRequirement')}
              </p>
              <ul>
                <li><strong>protein_sequence</strong> - {t('training.form.tmRequiredColumn.protein')}</li>
                <li><strong>tm_value</strong> - {t('training.form.tmRequiredColumn.tmValue')}</li>
                <li><strong>ph</strong> - {t('training.form.tmRequiredColumn.ph')}</li>
              </ul>
              <Alert variant="info" className="mt-3">
                <strong>{t('training.form.tip')}:</strong> {t('training.form.tmDatasetSizeRecommendation')}
              </Alert>
            </Card.Body>
          </Card>
          
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-3">{t('training.form.process')}</h5>
              <p>
                {t('training.form.processDescription')}
              </p>
              <ol>
                <li>{t('training.form.processStep.validation')}</li>
                <li>{t('training.form.tmProcessStep.feature')}</li>
                <li>{t('training.form.processStep.training')}</li>
                <li>{t('training.form.processStep.evaluation')}</li>
                <li>{t('training.form.processStep.modelGeneration')}</li>
              </ol>
              <p>
                {t('training.form.trainingTimeEstimation')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PredictorLayout>
  );
};

export default TmTraining; 