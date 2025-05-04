import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <header className="App-header">
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {t('app.title')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">{t('app.nav.home')}</Nav.Link>
              <NavDropdown title={t('app.nav.protein')} id="protein-nav-dropdown">
                <NavDropdown.Item as={Link} to="/features/kcat">Kcat</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/features/km">Km</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/features/tm">Tm</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/features/solubility">{t('home.protein.solubility.title')}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('app.nav.gene')} id="gene-nav-dropdown">
                <NavDropdown.Item as={Link} to="/features/promoter">{t('home.gene.promoter.title')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/features/rbs">{t('home.gene.rbs.title')}</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/training/jobs">{t('app.nav.training')}</Nav.Link>
              <Nav.Link as={Link} to="/about">{t('app.nav.about')}</Nav.Link>
              <Nav.Link as={Link} to="/faq">{t('app.nav.faq')}</Nav.Link>
              <Nav.Link as={Link} to="/api">{t('app.nav.api')}</Nav.Link>
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header; 