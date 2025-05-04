import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">{t('about.title')}</h2>
          <p className="lead">
            {t('about.lead')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>{t('about.introduction.title')}</h4>
          <p>
            {t('about.introduction.content')}
          </p>
          
          <h4>{t('about.technology.title')}</h4>
          <p>
            {t('about.technology.content')}
          </p>
          
          <h4>{t('about.applications.title')}</h4>
          <p>
            {t('about.applications.content')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 