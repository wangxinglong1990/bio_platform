import React from 'react';
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  route: string;
  buttonText: string;
}

interface FeatureTemplateProps {
  title: string;
  titleSuffix?: string;
  description: string;
  formula?: {
    title: string;
    equation: string;
    explanation: string;
  };
  keyPoints: string[];
  mainColor: string;
  scienceApplication: {
    title: string;
    points: string[];
  };
  molecularInfo: {
    title: string;
    content: React.ReactNode;
  };
  modelPerformance: {
    accuracy: string;
    trainingData: string;
    output: string;
  };
  serviceOptions: ServiceOption[];
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = ({
  title,
  titleSuffix,
  description,
  formula,
  keyPoints,
  mainColor,
  scienceApplication,
  molecularInfo,
  modelPerformance,
  serviceOptions
}) => {
  const { t } = useTranslation();
  
  return (
    <Container className="py-5">
      {/* 面包屑导航 */}
      <div className="d-flex align-items-center mb-4 pt-2">
        <Link 
          to="/" 
          className="text-decoration-none d-flex align-items-center"
          style={{ transition: 'transform 0.2s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div 
            className="d-flex align-items-center justify-content-center me-2"
            style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '8px',
              background: `linear-gradient(135deg, ${mainColor}22, ${mainColor}44)`,
              color: mainColor,
              transition: 'all 0.2s ease',
              boxShadow: `0 2px 8px ${mainColor}22`
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>{t('common.breadcrumb.home')}</span>
        </Link>
        <span className="mx-2" style={{ color: '#ccc' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
        <span 
          style={{ 
            fontSize: '14px', 
            fontWeight: '600',
            color: mainColor,
            padding: '4px 12px',
            borderRadius: '16px',
            background: `${mainColor}11`
          }}
        >
          {title}
        </span>
      </div>
      
      {/* 顶部科学信息区 */}
      <div 
        className="bg-white rounded-lg shadow-sm p-4 p-md-5 mb-5 position-relative overflow-hidden" 
        style={{ 
          borderTop: `5px solid ${mainColor}`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
        }}
      >
        <div 
          className="position-absolute" 
          style={{ 
            top: '0', 
            right: '0', 
            width: '200px', 
            height: '200px', 
            background: `radial-gradient(circle, ${mainColor}10 0%, transparent 70%)`,
            zIndex: '0'
          }}
        ></div>
        <Row className="align-items-center position-relative" style={{ zIndex: '1' }}>
          <Col lg={7}>
            <div className="position-relative">
              <h1 className="fw-bold mb-4 d-inline-block position-relative">
                {title} 
                {titleSuffix && (
                  <span className="text-muted fw-normal fs-5 ms-2" style={{ opacity: 0.75 }}>
                    ({titleSuffix})
                  </span>
                )}
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
            
            <div className="mb-4">
              <p className="lead mb-3">
                {description}
              </p>
              
              {formula && (
                <div className="bg-light p-3 rounded mb-3 border-start border-primary border-3">
                  <p className="mb-1 fw-bold">{formula.title}:</p>
                  <p className="mb-2" style={{ fontFamily: 'Arial', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: formula.equation }} />
                  <p className="small text-secondary mb-0" dangerouslySetInnerHTML={{ __html: formula.explanation }} />
                </div>
              )}
              
              {keyPoints.map((point, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <div style={{ width: '8px', height: '8px', backgroundColor: mainColor, borderRadius: '50%', marginRight: '10px' }}></div>
                  <div className="text-secondary" dangerouslySetInnerHTML={{ __html: point }} />
                </div>
              ))}
            </div>
            
            <div className="d-flex gap-3 mt-4">
              <Link to={serviceOptions[0].route}>
                <Button
                  variant="primary"
                  className="d-flex align-items-center px-4"
                  style={{ backgroundColor: mainColor, borderColor: mainColor }}
                >
                  {serviceOptions[0].buttonText}
                  <ArrowRight className="ms-2" style={{ width: '18px', height: '18px' }} />
                </Button>
              </Link>
              <Link to={serviceOptions[1].route}>
                <Button
                  variant="outline-primary"
                  className="d-flex align-items-center px-4"
                  style={{ borderColor: mainColor, color: mainColor }}
                >
                  {serviceOptions[1].buttonText}
                  <ArrowRight className="ms-2" style={{ width: '18px', height: '18px' }} />
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={5} className="mt-4 mt-lg-0">
            <div className="bg-light rounded-3 p-4 h-100">
              <div className="d-flex align-items-center mb-3">
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    background: `rgba(${parseInt(mainColor.slice(1, 3), 16)}, ${parseInt(mainColor.slice(3, 5), 16)}, ${parseInt(mainColor.slice(5, 7), 16)}, 0.1)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginRight: '16px'
                  }}
                >
                  🧬
                </div>
                <div>
                  <h5 className="mb-1">{t('common.featureTemplate.scientificApplications')}</h5>
                  <p className="text-muted mb-0 small">{scienceApplication.title}</p>
                </div>
              </div>
              
              <div className="mt-3 ps-2 border-start border-3" style={{ borderColor: `rgba(${parseInt(mainColor.slice(1, 3), 16)}, ${parseInt(mainColor.slice(3, 5), 16)}, ${parseInt(mainColor.slice(5, 7), 16)}, 0.3)` }}>
                {scienceApplication.points.map((point, index) => (
                  <p key={index} className={`small text-secondary ${index === scienceApplication.points.length - 1 ? 'mb-0' : 'mb-2'}`}>• {point}</p>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        
        {/* 额外的专业信息区 */}
        <Row className="mt-4">
          <Col>
            <div className="bg-light p-3 rounded border border-muted">
              <h5 className="fw-bold mb-3">{molecularInfo.title}</h5>
              {molecularInfo.content}
            </div>
          </Col>
        </Row>
      </div>
      
      {/* 模型信息 */}
      <div className="bg-light rounded-3 p-4 mb-5" style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
        <div className="d-flex align-items-center mb-3 pb-2" style={{ borderBottom: `1px solid ${mainColor}22` }}>
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: `linear-gradient(135deg, ${mainColor}22, ${mainColor}44)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              marginRight: '16px',
              boxShadow: `0 4px 10px ${mainColor}22`
            }}
          >
            📊
          </div>
          <h4 className="mb-0 fw-bold" style={{ color: '#333' }}>{t('common.featureTemplate.modelPerformance')}</h4>
        </div>
        
        <Row className="mt-3 g-4">
          <Col md={4}>
            <div className="bg-white rounded p-3 h-100" style={{ 
              borderLeft: '3px solid #4A90E2', 
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
            }}>
              <h6 className="fw-bold mb-2" style={{ color: '#4A90E2' }}>{t('common.featureTemplate.predictionAccuracy')}</h6>
              <p className="text-secondary small mb-0" dangerouslySetInnerHTML={{ __html: modelPerformance.accuracy }} />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white rounded p-3 h-100" style={{ 
              borderLeft: '3px solid #50C878', 
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
            }}>
              <h6 className="fw-bold mb-2" style={{ color: '#50C878' }}>{t('common.featureTemplate.trainingDataReq')}</h6>
              <p className="text-secondary small mb-0" dangerouslySetInnerHTML={{ __html: modelPerformance.trainingData }} />
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-white rounded p-3 h-100" style={{ 
              borderLeft: '3px solid #9370DB', 
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
            }}>
              <h6 className="fw-bold mb-2" style={{ color: '#9370DB' }}>{t('common.featureTemplate.outputResults')}</h6>
              <p className="text-secondary small mb-0" dangerouslySetInnerHTML={{ __html: modelPerformance.output }} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FeatureTemplate; 