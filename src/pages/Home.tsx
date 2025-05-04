import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  route: string;
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // 功能列表
  const proteinFeatures: Feature[] = [
    {
      id: 'kcat',
      title: 'Kcat',
      description: t('home.protein.kcat.description'),
      icon: '🧪',
      color: 'linear-gradient(135deg, #5B86E5, #36D1DC)',
      route: '/features/kcat'
    },
    {
      id: 'km',
      title: 'Km',
      description: t('home.protein.km.description'),
      icon: '📊',
      color: 'linear-gradient(135deg, #FF5F6D, #FFC371)',
      route: '/features/km'
    },
    {
      id: 'tm',
      title: 'Tm',
      description: t('home.protein.tm.description'),
      icon: '🌡️',
      color: 'linear-gradient(135deg, #11998e, #38ef7d)',
      route: '/features/tm'
    },
    {
      id: 'solubility',
      title: t('home.protein.solubility.title'),
      description: t('home.protein.solubility.description'),
      icon: '💧',
      color: 'linear-gradient(135deg, #4E65FF, #92EFFD)',
      route: '/features/solubility'
    }
  ];

  const geneFeatures: Feature[] = [
    {
      id: 'promoter',
      title: t('home.gene.promoter.title'),
      description: t('home.gene.promoter.description'),
      icon: '🧬',
      color: 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
      route: '/features/promoter'
    },
    {
      id: 'rbs',
      title: t('home.gene.rbs.title'),
      description: t('home.gene.rbs.description'),
      icon: '🔬',
      color: 'linear-gradient(135deg, #F857A6, #FF5858)',
      route: '/features/rbs'
    }
  ];

  return (
    <div className="home-page">
      {/* 顶部横幅区域 */}
      <div 
        className="banner py-5"
        style={{
          background: 'linear-gradient(135deg, #3a6186, #89253e)',
          marginTop: '-1.5rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="banner-bg" 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cstyle%3E.st0%7Bfill:none;stroke:%23FFFFFF;stroke-width:7;stroke-miterlimit:10;%7D.st1%7Bfill:%23FFFFFF;%7D%3C/style%3E%3C!-- DNA双螺旋结构 --%3E%3Cpath class='st0' d='M130,50c0,0,90,40,110,60s-70,40-70,80s110,40,110,80s-90,40-90,80s90,40,90,80s-70,40-70,80s110,40,130,60'/%3E%3Cpath class='st0' d='M400,50c0,0-90,40-110,60s70,40,70,80s-110,40-110,80s90,40,90,80s-90,40-90,80s70,40,70,80s-110,40-130,60'/%3E%3C!-- 连接线 --%3E%3Cline class='st0' x1='130' y1='50' x2='400' y2='50'/%3E%3Cline class='st0' x1='240' y1='110' x2='290' y2='110'/%3E%3Cline class='st0' x1='170' y1='190' x2='360' y2='190'/%3E%3Cline class='st0' x1='240' y1='270' x2='290' y2='270'/%3E%3Cline class='st0' x1='170' y1='350' x2='360' y2='350'/%3E%3Cline class='st0' x1='240' y1='430' x2='290' y2='430'/%3E%3Cline class='st0' x1='170' y1='510' x2='360' y2='510'/%3E%3Cline class='st0' x1='240' y1='590' x2='290' y2='590'/%3E%3C!-- 氨基酸和蛋白质结构元素 --%3E%3Ccircle class='st1' cx='500' cy='150' r='15'/%3E%3Ccircle class='st1' cx='550' cy='120' r='10'/%3E%3Ccircle class='st1' cx='590' cy='160' r='12'/%3E%3Cpath class='st0' d='M500,150c0,0,30-20,50-30s40,40,90,40'/%3E%3C!-- 蛋白质α螺旋 --%3E%3Cpath class='st0' d='M550,350c0,0,10-30,20-40s30-10,40,0s10,30,0,40s-30,10-40,0s-10-30,0-40s30-10,40,0s10,30,0,40'/%3E%3C!-- 分子点 --%3E%3Ccircle class='st1' cx='130' cy='50' r='8'/%3E%3Ccircle class='st1' cx='400' cy='50' r='8'/%3E%3Ccircle class='st1' cx='240' cy='110' r='8'/%3E%3Ccircle class='st1' cx='290' cy='110' r='8'/%3E%3Ccircle class='st1' cx='170' cy='190' r='8'/%3E%3Ccircle class='st1' cx='360' cy='190' r='8'/%3E%3Ccircle class='st1' cx='240' cy='270' r='8'/%3E%3Ccircle class='st1' cx='290' cy='270' r='8'/%3E%3Ccircle class='st1' cx='170' cy='350' r='8'/%3E%3Ccircle class='st1' cx='360' cy='350' r='8'/%3E%3Ccircle class='st1' cx='240' cy='430' r='8'/%3E%3Ccircle class='st1' cx='290' cy='430' r='8'/%3E%3Ccircle class='st1' cx='170' cy='510' r='8'/%3E%3Ccircle class='st1' cx='360' cy='510' r='8'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: 'auto 100%',
            zIndex: 0
          }}
        ></div>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="align-items-center">
            <Col lg={7} className="text-white">
              <h1 className="display-4 fw-bold mb-4">{t('app.title')}</h1>
              <p className="lead mb-4">
                {t('home.banner.description')}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/about">
                  <Button 
                    variant="outline-light" 
                    size="lg"
                  >
                    {t('home.banner.learnMore')}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* 平台优势 */}
        <Row className="mb-5">
          <Col>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold">{t('home.advantages.title')}</h2>
              <p className="text-muted">{t('home.advantages.description')}</p>
            </div>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card className="h-100 bg-light border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div 
                      className="icon-wrapper mb-3 mx-auto"
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'rgba(13, 110, 253, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem'
                      }}
                    >
                      🔬
                    </div>
                    <h4>{t('home.advantages.accuracy.title')}</h4>
                    <p className="text-muted mb-0">
                      {t('home.advantages.accuracy.description')}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 bg-light border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div 
                      className="icon-wrapper mb-3 mx-auto"
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'rgba(13, 110, 253, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem'
                      }}
                    >
                      ⚡
                    </div>
                    <h4>{t('home.advantages.speed.title')}</h4>
                    <p className="text-muted mb-0">
                      {t('home.advantages.speed.description')}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100 bg-light border-0 shadow-sm">
                  <Card.Body className="p-4 text-center">
                    <div 
                      className="icon-wrapper mb-3 mx-auto"
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'rgba(13, 110, 253, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem'
                      }}
                    >
                      🧪
                    </div>
                    <h4>{t('home.advantages.customization.title')}</h4>
                    <p className="text-muted mb-0">
                      {t('home.advantages.customization.description')}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        
        {/* 蛋白质功能 */}
        <section className="mb-5">
          <h2 className="display-6 fw-bold mb-4 text-center">{t('home.protein.title')}</h2>
          <Row className="g-4">
            {proteinFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={3}>
                <Link to={feature.route} className="text-decoration-none">
                  <div 
                    className="feature-block"
                    style={{
                      background: feature.color,
                      borderRadius: '0.75rem',
                      minHeight: '200px',
                      height: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div 
                      className="feature-icon"
                      style={{
                        position: 'absolute',
                        top: '1.5rem',
                        left: '1.5rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        zIndex: 1
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div 
                      style={{
                        flexGrow: 1
                      }}
                    />
                    <div 
                      className="content"
                      style={{
                        width: '100%',
                        padding: '1.5rem',
                        background: 'rgba(255,255,255,0.9)',
                        textAlign: 'left',
                        marginTop: '80px'
                      }}
                    >
                      <h3 className="m-0 h4 fw-bold">{feature.title}</h3>
                      <p className="mt-2 mb-0 text-secondary small">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
        
        {/* 基因功能 */}
        <section className="mb-5">
          <h2 className="display-6 fw-bold mb-4 text-center">{t('home.gene.title')}</h2>
          <Row className="g-4">
            {geneFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={6}>
                <Link to={feature.route} className="text-decoration-none">
                  <div 
                    className="feature-block"
                    style={{
                      background: feature.color,
                      borderRadius: '0.75rem',
                      minHeight: '200px',
                      height: 'auto',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div 
                      className="feature-icon"
                      style={{
                        position: 'absolute',
                        top: '1.5rem',
                        left: '1.5rem',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        zIndex: 1
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div 
                      style={{
                        flexGrow: 1
                      }}
                    />
                    <div 
                      className="content"
                      style={{
                        width: '100%',
                        padding: '1.5rem',
                        background: 'rgba(255,255,255,0.9)',
                        textAlign: 'left',
                        marginTop: '80px'
                      }}
                    >
                      <h3 className="m-0 h4 fw-bold">{feature.title}</h3>
                      <p className="mt-2 mb-0 text-secondary small">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
        
        {/* 功能介绍 */}
        <section className="mb-5 py-4">
          <Card 
            className="border-0 shadow"
            style={{
              background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
              borderRadius: '1rem',
              overflow: 'hidden'
            }}
          >
            <Card.Body className="p-md-5 p-4">
              <Row className="align-items-center">
                <Col md={7}>
                  <h2 className="fw-bold mb-4">{t('home.combined.title')}</h2>
                  <p className="lead mb-4">
                    {t('home.combined.description')}
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✓ {t('home.combined.points.predict')}</li>
                    <li className="mb-2">✓ {t('home.combined.points.upload')}</li>
                    <li className="mb-2">✓ {t('home.combined.points.manage')}</li>
                    <li>✓ {t('home.combined.points.download')}</li>
                  </ul>
                  <Link to="/training/jobs">
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="mt-2"
                    >
                      {t('home.combined.button')}
                    </Button>
                  </Link>
                </Col>
                <Col md={5} className="mt-4 mt-md-0">
                  <div 
                    className="image-placeholder"
                    style={{
                      background: 'rgba(255, 255, 255, 0.4)',
                      borderRadius: '0.5rem',
                      height: '250px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem'
                    }}
                  >
                    🧬 + 💻
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>

      {/* 添加CSS样式 */}
      <style>{`
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .feature-block:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 767.98px) {
          .banner {
            text-align: center;
          }
          .banner .btn-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home; 