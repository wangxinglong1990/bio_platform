import React, { useState, useRef } from 'react';
import { Row, Col, Card, Form, Button, Alert, Overlay, Popover } from 'react-bootstrap';
// @ts-ignore
import { InfoCircle } from 'react-bootstrap-icons';
import SequenceInput from '../components/SequenceInput';
import ResultDisplay from '../components/ResultDisplay';
import { predictKcat, predictKcatWithFile, PredictionResponse } from '../services/api';
import PredictorLayout from '../components/PredictorLayout';
import { useTranslation } from 'react-i18next';

const KcatPredictor: React.FC = () => {
  const { t } = useTranslation();
  // 定义样例数据
  const sampleProtein = "MENFKHLPEPWRLWDQRHVEPIDPVTLRAVVGASSQKTHLFLKGPTGEVPGDGCRLVSDSGVVELAKRAGVNCSVVRHEDIPAVSVLRSVDSGLRRLTAGGSPVFDSKAYTLLLGSLGVHPLVLGRIEDRRQLLKELGVPISVPVDCHFASIDPVMLQERLKSKDPIVERILFPGISFDLAKKVAAKMGTQHEVVIRGAAGAMCHAMVRGDAEAPGMLDEAIRETGYTVVSNPAFLHCAGIGARVALEEAKSRGIRVLHIKRSTGGGEVDLVNLDIKDIIETLKAGKADLLVNACETEYGITGDHLGLPATMSAILDAGDATTVEHFAAMLASRQPGAKVVTLGDGAVGSSVAFALLTRGERCAAALTMEVAGCDRIVEIAHGSGNVVTLEGTRGASVDAVRAGVRVQGHRVAAVGLAQPGAIEKFRVGDEADSVDALIDAGADTISVPLDIRNVFLGSSSLVAAGVACALGLPAYVFTATATMPVIAEHHAELVSSYLRQASAI";
  const sampleSmiles = "CC(=O)Nc1ccc(O)cc1";
  
  // 状态变量
  const [sequence, setSequence] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [substrate, setSubstrate] = useState<string>('');
  const [substrateFile, setSubstrateFile] = useState<File | null>(null);
  const [inputMode, setInputMode] = useState<'text' | 'file'>('text');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // 定义颜色和面包屑项
  const mainColor = '#5B86E5';
  const breadcrumbItems = [
    {
      name: t('common.breadcrumb.home'),
      path: '/',
    },
    {
      name: t('features.kcat.title') + ' ' + t('features.kcat.titleSuffix'),
      path: '/features/kcat',
      color: mainColor,
    },
    {
      name: t('features.kcat.title'),
      path: '/predict/kcat',
      color: mainColor,
    }
  ];
  
  // 弹出框控制状态
  const [showProteinPopover, setShowProteinPopover] = useState(false);
  const [showSmilesPopover, setShowSmilesPopover] = useState(false);
  const proteinInfoRef = useRef(null);
  const smilesInfoRef = useRef(null);

  // 将样例数据填入输入框
  const applySampleProtein = () => {
    setSequence(sampleProtein);
    setFile(null);
    setShowProteinPopover(false);
  };

  const applySampleSmiles = () => {
    setSubstrate(sampleSmiles);
    setSubstrateFile(null);
    setInputMode('text');
    setShowSmilesPopover(false);
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

  const handleSubstrateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubstrate(e.target.value);
    // 清除底物文件
    setSubstrateFile(null);
  };

  const handleSubstrateFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSubstrateFile(e.target.files[0]);
      // 切换到文件模式
      setInputMode('file');
      // 清除底物SMILES
      setSubstrate('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // 验证输入
      const hasProtein = sequence || file;
      const hasSubstrate = inputMode === 'text' ? substrate : substrateFile;
      
      if (!hasProtein || !hasSubstrate) {
        setError(t('predict.kcat.error.missingInput'));
        setLoading(false);
        return;
      }

      console.log('发送请求到后端...');
      if (sequence) {
        console.log('序列:', sequence);
        console.log('底物:', substrate);
      } else {
        console.log('使用文件上传');
      }

      let response;
      if (file) {
        // 使用文件预测
        console.log('调用API: predictKcatWithFile');
        response = await predictKcatWithFile(file, substrateFile);
      } else {
        // 使用序列预测
        console.log('调用API: predictKcat');
        response = await predictKcat(sequence, substrate);
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
      title={t('features.kcat.titleEn')}
      breadcrumbItems={breadcrumbItems}
      color={mainColor}
    >
      <Alert variant="info" className="mb-3">
        <strong>{t('predict.common.platformInfo')}</strong>
      </Alert>
      <p className="lead mb-4">
        {t('predict.kcat.description')}
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
                      <Popover.Header as="h6">{t('predict.kcat.sampleProtein')}</Popover.Header>
                      <Popover.Body>
                        <div style={{ fontSize: '0.8rem', wordBreak: 'break-all' }}>
                          {sampleProtein.substring(0, 50)}...
                        </div>
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="mt-2" 
                          onClick={applySampleProtein}
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
                  placeholder={t('predict.kcat.proteinPlaceholder')}
                  sequenceType="protein"
                />

                <div className="mt-4 mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0 me-2">{t('predict.kcat.inputSubstrate')}</h5>
                    <span 
                      ref={smilesInfoRef} 
                      onClick={() => setShowSmilesPopover(!showSmilesPopover)}
                      style={{ cursor: 'pointer' }}
                    >
                      <InfoCircle className="text-primary ms-1" />
                    </span>
                    
                    <Overlay
                      show={showSmilesPopover}
                      target={smilesInfoRef.current}
                      placement="right"
                      container={smilesInfoRef.current}
                      containerPadding={20}
                      rootClose
                      onHide={() => setShowSmilesPopover(false)}
                    >
                      <Popover id="popover-smiles-sample">
                        <Popover.Header as="h6">{t('predict.kcat.sampleSmiles')}</Popover.Header>
                        <Popover.Body>
                          <div style={{ fontSize: '0.9rem' }}>
                            {sampleSmiles}
                          </div>
                          <div style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>
                            ({t('predict.kcat.sampleSmilesName')})
                          </div>
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="mt-2" 
                            onClick={applySampleSmiles}
                          >
                            {t('predict.common.useSample')}
                          </Button>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <Form.Check
                      type="radio"
                      id="substrate-text"
                      label={t('predict.kcat.inputSmilesDirectly')}
                      checked={inputMode === 'text'}
                      onChange={() => setInputMode('text')}
                    />
                    <Form.Check
                      type="radio"
                      id="substrate-file"
                      label={t('predict.kcat.uploadSmilesFile')}
                      checked={inputMode === 'file'}
                      onChange={() => setInputMode('file')}
                    />
                  </div>
                  
                  {inputMode === 'text' ? (
                    <Form.Control
                      type="text"
                      placeholder={t('predict.kcat.smilesPlaceholder')}
                      value={substrate}
                      onChange={handleSubstrateChange}
                    />
                  ) : (
                    <Form.Control
                      type="file"
                      accept=".smi,.txt"
                      onChange={handleSubstrateFileChange}
                    />
                  )}
                  <Form.Text className="text-muted">
                    {t('predict.kcat.smilesFormatHelp')}
                  </Form.Text>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg" 
                    disabled={loading || !(
                      // 有效的蛋白质输入
                      (sequence || file) && 
                      // 有效的底物输入
                      (
                        (inputMode === 'text' && substrate) || 
                        (inputMode === 'file' && substrateFile)
                      )
                    )}
                    style={{ 
                      backgroundColor: mainColor, 
                      borderColor: mainColor 
                    }}
                  >
                    {loading ? t('predict.common.submit') : t('predict.kcat.predictButton')}
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
                  resultType="kcat"
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
                {t('predict.kcat.toolDescription')}
              </p>
              <hr />
              <h6>{t('predict.kcat.inputParams')}</h6>
              <ul>
                <li>{t('predict.kcat.inputParam.protein')}</li>
                <li>{t('predict.kcat.inputParam.substrate')}</li>
              </ul>
              <hr />
              <h6>{t('predict.common.resultInterp')}</h6>
              <p dangerouslySetInnerHTML={{ __html: t('predict.kcat.resultInterpretation') }}>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PredictorLayout>
  );
};

export default KcatPredictor; 