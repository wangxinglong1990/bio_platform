import React from 'react';
import { Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Api: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="text-primary">{t('api.title')}</h2>
          <p className="lead">
            {t('api.lead')}
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Tab.Container id="api-tabs" defaultActiveKey="overview">
                <Row>
                  <Col md={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="overview">{t('api.tabs.overview')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="authentication">{t('api.tabs.authentication')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="endpoints">{t('api.tabs.endpoints')}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="examples">{t('api.tabs.examples')}</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="overview">
                        <h4>{t('api.overview.title')}</h4>
                        <p>
                          {t('api.overview.content')}
                        </p>
                        <p>
                          {t('api.overview.baseUrl')}: <code>https://api.protein-predictor.example.com/v1</code>
                        </p>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="authentication">
                        <h4>{t('api.authentication.title')}</h4>
                        <p>
                          {t('api.authentication.content')}
                        </p>
                        <pre>
                          {`Authorization: Bearer YOUR_API_KEY`}
                        </pre>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="endpoints">
                        <h4>{t('api.endpoints.title')}</h4>
                        <div className="mb-4">
                          <h5>{t('api.endpoints.kcat.title')}</h5>
                          <code>POST /predict/kcat</code>
                          <p>{t('api.endpoints.requestExample')}:</p>
                          <pre>{`{
  "sequence": "MVKTVVTGFGAVGGGFVMRLFEQ...",
  "substrate": "CC(=O)Nc1ccc(O)cc1"
}`}</pre>
                        </div>
                        
                        <div className="mb-4">
                          <h5>{t('api.endpoints.km.title')}</h5>
                          <code>POST /predict/km</code>
                          <p>{t('api.endpoints.sameAsKcat')}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h5>{t('api.endpoints.tm.title')}</h5>
                          <code>POST /predict/tm</code>
                          <p>{t('api.endpoints.requestExample')}:</p>
                          <pre>{`{
  "sequence": "MVKTVVTGFGAVGGGFVMRLFEQ..."
}`}</pre>
                        </div>
                        
                        <div className="mb-4">
                          <h5>{t('api.endpoints.solubility.title')}</h5>
                          <code>POST /predict/solubility</code>
                          <p>{t('api.endpoints.sameAsTm')}</p>
                        </div>
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="examples">
                        <h4>{t('api.examples.title')}</h4>
                        <p>{t('api.examples.pythonKcatExample')}:</p>
                        <pre>{`import requests

api_key = "YOUR_API_KEY"
url = "https://api.protein-predictor.example.com/v1/predict/kcat"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "sequence": "MVKTVVTGFGAVGGGFVMRLFEQ...",
    "substrate": "CC(=O)Nc1ccc(O)cc1"
}

response = requests.post(url, json=data, headers=headers)
result = response.json()

print(result)`}</pre>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Api; 