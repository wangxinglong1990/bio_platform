import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import SequenceInput from '../components/SequenceInput';
import ResultDisplay from '../components/ResultDisplay';
import { predictPromoter, predictPromoterWithFile, PredictionResponse } from '../services/api';
import { useTranslation } from 'react-i18next';

const PromoterPredictor: React.FC = () => {
  const { t } = useTranslation();
  const [sequence, setSequence] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      if (sequence) {
        // 使用序列预测
        const result = await predictPromoter(sequence);
        setResult(result);
      } else if (file) {
        // 使用文件预测
        const result = await predictPromoterWithFile(file);
        setResult(result);
      } else {
        setError(t('predict.promoter.error.missingInput'));
      }
    } catch (err: any) {
      setError(t('predict.common.error') + ': ' + (err.message || t('predict.common.errorTypes.unknown')));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="mb-4">{t('predict.promoter.title')}</h1>
      <p className="lead mb-4">
        {t('predict.promoter.description')}
      </p>

      <Alert variant="info" className="mb-3">
        <strong>{t('predict.common.platformInfo')}</strong>
      </Alert>

      <Row>
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <SequenceInput 
                  sequence={sequence}
                  onSequenceChange={handleSequenceChange}
                  file={file}
                  onFileChange={handleFileChange}
                  placeholder={t('predict.promoter.sequencePlaceholder')}
                  sequenceType="DNA"
                />

                <div className="d-grid gap-2 mt-4">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg" 
                    disabled={loading || (!sequence && !file)}
                  >
                    {loading ? t('predict.common.submit') : t('predict.promoter.predictButton')}
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
                  resultTitle={t('predict.promoter.resultTitle')}
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
                {t('predict.promoter.toolDescription')}
              </p>
              <hr />
              <h6>{t('predict.promoter.applicableSequences')}</h6>
              <ul>
                <li>{t('predict.promoter.applicableSequence.ecoli')}</li>
                <li>{t('predict.promoter.applicableSequence.length')}</li>
                <li>{t('predict.promoter.applicableSequence.bases')}</li>
              </ul>
              <hr />
              <h6>{t('predict.common.resultInterp')}</h6>
              <p>
                {t('predict.promoter.resultInterpretation')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoterPredictor; 