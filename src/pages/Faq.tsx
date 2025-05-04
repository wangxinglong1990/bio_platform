import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Faq: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">{t('faq.title')}</h2>
          <p className="lead">
            {t('faq.lead')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{t('faq.questions.usage.title')}</Accordion.Header>
              <Accordion.Body>
                {t('faq.questions.usage.content')}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>{t('faq.questions.accuracy.title')}</Accordion.Header>
              <Accordion.Body>
                {t('faq.questions.accuracy.content')}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>{t('faq.questions.supportedTypes.title')}</Accordion.Header>
              <Accordion.Body>
                {t('faq.questions.supportedTypes.content')}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
              <Accordion.Header>{t('faq.questions.citation.title')}</Accordion.Header>
              <Accordion.Body>
                {t('faq.questions.citation.content')}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="4">
              <Accordion.Header>{t('faq.questions.dataSecurity.title')}</Accordion.Header>
              <Accordion.Body>
                {t('faq.questions.dataSecurity.content')}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq; 