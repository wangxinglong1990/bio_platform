import React, { useEffect } from 'react';
import { Container, Card, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RbsFeature: React.FC = () => {
  const { t, i18n } = useTranslation();
  const mainColor = '#F857A6';
  
  // 添加调试信息
  useEffect(() => {
    console.log('RbsFeature - 当前语言:', i18n.language);
    console.log('RbsFeature - i18n初始化状态:', i18n.isInitialized);
    console.log('RbsFeature - 翻译示例:', t('features.rbs.title'));
    console.log('RbsFeature - 翻译资源:', i18n.options.resources);
  }, [i18n, t]);
  
  return (
    <Container className="py-4">
      <div className="position-relative mb-5">
        <h1 className="fw-bold mb-4 d-inline-block position-relative">
          {t('features.rbs.title')}
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
          {t('features.rbs.developingDescription')}
        </p>
      </Alert>
      
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h4 className="mb-3">{t('features.rbs.introduction.title')}</h4>
              <p>
                {t('features.rbs.introduction.content')}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h4 className="mb-3">{t('features.rbs.goal.title')}</h4>
              <p>
                {t('features.rbs.goal.content')}
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

export default RbsFeature; 