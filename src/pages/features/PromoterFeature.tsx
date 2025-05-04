import React, { useEffect } from 'react';
import { Container, Card, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PromoterFeature: React.FC = () => {
  const { t, i18n } = useTranslation();
  const mainColor = '#8E2DE2';
  
  // 添加调试信息
  useEffect(() => {
    console.log('PromoterFeature - 当前语言:', i18n.language);
    console.log('PromoterFeature - i18n初始化状态:', i18n.isInitialized);
    console.log('PromoterFeature - 翻译示例:', t('features.promoter.title'));
    console.log('PromoterFeature - 翻译资源:', i18n.options.resources);
  }, [i18n, t]);
  
  return (
    <Container className="py-4">
      <div className="position-relative mb-5">
        <h1 className="fw-bold mb-4 d-inline-block position-relative">
          {t('features.promoter.title')}
          <div 
            className="position-absolute" 
            style={{ 
              height: '4px', 
              width: '40%', 
              background: `linear-gradient(90deg, ${mainColor}, transparent)`,
              bottom: '-8px',
              left: '0',
              borderRadius: '2px'
            }}
          ></div>
        </h1>
      </div>
      
      <Alert variant="warning" className="mb-5">
        <Alert.Heading className="fs-4">{t('features.developing.title')}</Alert.Heading>
        <p className="mb-0">
          {t('features.promoter.developingDescription')}
        </p>
      </Alert>
      
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h4 className="mb-3">{t('features.promoter.introduction.title')}</h4>
              <p>
                {t('features.promoter.introduction.content')}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h4 className="mb-3">{t('features.promoter.goal.title')}</h4>
              <p>
                {t('features.promoter.goal.content')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <div className="text-center">
        <Link to="/" className="btn btn-outline-primary">
          {t('features.developing.return')}
        </Link>
      </div>
    </Container>
  );
};

export default PromoterFeature; 