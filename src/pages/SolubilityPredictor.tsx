import React, { useState, useRef } from 'react';
import { Row, Col, Card, Form, Button, Alert, Overlay, Popover } from 'react-bootstrap';
// @ts-ignore
import { InfoCircle } from 'react-bootstrap-icons';
import SequenceInput from '../components/SequenceInput';
import ResultDisplay from '../components/ResultDisplay';
import { predictSolubility, predictSolubilityWithFile, PredictionResponse } from '../services/api';
import PredictorLayout from '../components/PredictorLayout';
import { useTranslation } from 'react-i18next';

const SolubilityPredictor: React.FC = () => {
  const { t } = useTranslation();
  
  // 定义样例数据
  const sampleProtein = "MENFKHLPEPWRLWDQRHVEPIDPVTLRAVVGASSQKTHLFLKGPTGEVPGDGCRLVSDSGVVELAKRAGVNCSVVRHEDIPAVSVLRSVDSGLRRLTAGGSPVFDSKAYTLLLGSLGVHPLVLGRIEDRRQLLKELGVPISVPVDCHFASIDPVMLQERLKSKDPIVERILFPGISFDLAKKVAAKMGTQHEVVIRGAAGAMCHAMVRGDAEAPGMLDEAIRETGYTVVSNPAFLHCAGIGARVALEEAKSRGIRVLHIKRSTGGGEVDLVNLDIKDIIETLKAGKADLLVNACETEYGITGDHLGLPATMSAILDAGDATTVEHFAAMLASRQPGAKVVTLGDGAVGSSVAFALLTRGERCAAALTMEVAGCDRIVEIAHGSGNVVTLEGTRGASVDAVRAGVRVQGHRVAAVGLAQPGAIEKFRVGDEADSVDALIDAGADTISVPLDIRNVFLGSSSLVAAGVACALGLPAYVFTATATMPVIAEHHAELVSSYLRQASAI";
  
  // 状态变量
  const [sequence, setSequence] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // 定义颜色和面包屑项
  const mainColor = '#4E65FF';
  const breadcrumbItems = [
    {
      name: t('common.breadcrumb.home'),
      path: '/',
    },
    {
      name: t('home.protein.solubility.title'),
      path: '/features/solubility',
      color: mainColor,
    },
    {
      name: t('home.protein.solubility.title'),
      path: '/predict/solubility',
      color: mainColor,
    }
  ];
  
  // 弹出框控制状态
  const [showProteinPopover, setShowProteinPopover] = useState(false);
  const proteinInfoRef = useRef(null);

  // 将样例数据填入输入框
  const applySampleProtein = () => {
    setSequence(sampleProtein);
    setFile(null);
    setShowProteinPopover(false);
  };

  const handleSequenceChange = (value: string) => {
    setSequence(value);
    // 清除文件
    setFile(null);
  };

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    // 清除序列
    setSequence('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // 验证输入
      const hasProtein = sequence || file;
      
      if (!hasProtein) {
        setError(t('predict.solubility.error.missingInput'));
        setLoading(false);
        return;
      }

      console.log('发送请求到后端...');
      if (sequence) {
        console.log('序列:', sequence);
      } else {
        console.log('使用文件上传');
      }

      let response;
      if (file) {
        // 使用文件预测
        console.log('调用API: predictSolubilityWithFile');
        response = await predictSolubilityWithFile(file);
      } else {
        // 使用序列预测
        console.log('调用API: predictSolubility');
        response = await predictSolubility(sequence);
      }

      console.log('收到后端响应:', response);
      
      if (!response.success) {
        // 处理错误响应
        if (response.error && response.error.includes('模型文件不存在')) {
          setError(t('predict.common.errorTypes.modelNotFound'));
        } else if (response.error && response.error.includes('预测脚本不存在')) {
          setError(t('predict.common.errorTypes.scriptNotFound'));
        } else {
          setError(response.error || t('predict.common.errorTypes.unknown'));
        }
      } else {
        setResult(response);
      }
    } catch (err: any) {
      const errorMessage = t('predict.common.error') + ': ' + (err.message || t('predict.common.errorTypes.unknown'));
      setError(errorMessage);
      console.error('API调用错误:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PredictorLayout
      title={t('features.solubility.titleEn')}
      breadcrumbItems={breadcrumbItems}
      color={mainColor}
    >
      <Alert variant="info" className="mb-3">
        <strong>{t('predict.common.platformInfo')}</strong>
      </Alert>
      <p className="lead mb-4">
        {t('predict.solubility.description')}
      </p>

      <Row>
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 me-2">{t('predict.common.inputProtein')}</h5>
                  <span 
                    ref={proteinInfoRef} 
                    onClick={() => setShowProteinPopover(!showProteinPopover)}
                    style={{ cursor: 'pointer' }}
                  >
                    <InfoCircle className="text-primary ms-1" />
                  </span>
                  
                  <Overlay
                    show={showProteinPopover}
                    target={proteinInfoRef.current}
                    placement="right"
                    container={proteinInfoRef.current}
                    containerPadding={20}
                    rootClose
                    onHide={() => setShowProteinPopover(false)}
                  >
                    <Popover id="popover-protein-sample" style={{ maxWidth: '350px' }}>
                      <Popover.Header as="h6">{t('predict.solubility.sampleProtein')}</Popover.Header>
                      <Popover.Body>
                        <div style={{ fontSize: '0.8rem', wordBreak: 'break-all' }}>
                          {sampleProtein.substring(0, 50)}...
                        </div>
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="mt-2" 
                          onClick={applySampleProtein}
                          style={{ backgroundColor: mainColor, borderColor: mainColor }}
                        >
                          {t('predict.common.useSample')}
                        </Button>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
                <SequenceInput 
                  sequence={sequence}
                  onSequenceChange={handleSequenceChange}
                  file={file}
                  onFileChange={handleFileChange}
                  placeholder={t('predict.solubility.proteinPlaceholder')}
                  sequenceType="protein"
                />

                <div className="d-grid gap-2 mt-4">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg" 
                    disabled={loading || !(sequence || file)}
                    style={{ 
                      backgroundColor: mainColor, 
                      borderColor: mainColor 
                    }}
                  >
                    {loading ? t('predict.common.submit') : t('predict.solubility.predictButton')}
                  </Button>
                </div>
              </Form>

              {error && (
                <Alert variant="danger" className="mt-4">
                  {error}
                </Alert>
              )}

              {result && (
                <ResultDisplay 
                  result={result} 
                  loading={loading}
                  resultType="solubility"
                />
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5 className="mb-3">{t('predict.common.instructions')}</h5>
              <p>
                {t('predict.solubility.toolDescription')}
              </p>
              <hr />
              <h6>{t('predict.solubility.inputParams')}</h6>
              <ul>
                <li>{t('predict.solubility.inputParam.protein')}</li>
              </ul>
              <hr />
              <h6>{t('predict.common.resultInterp')}</h6>
              <p dangerouslySetInnerHTML={{ __html: t('predict.solubility.resultInterpretation') }}>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PredictorLayout>
  );
};

export default SolubilityPredictor; 