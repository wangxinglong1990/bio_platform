import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import KcatPredictor from './pages/KcatPredictor';
import KmPredictor from './pages/KmPredictor';
import TmPredictor from './pages/TmPredictor';
import SolubilityPredictor from './pages/SolubilityPredictor';
import PromoterPredictor from './pages/PromoterPredictor';
import RbsPredictor from './pages/RbsPredictor';
import About from './pages/About';
import Faq from './pages/Faq';
import Api from './pages/Api';
import Training from './pages/Training';
import KcatTraining from './pages/training/KcatTraining';
import KmTraining from './pages/training/KmTraining';
import TmTraining from './pages/training/TmTraining';
import SolubilityTraining from './pages/training/SolubilityTraining';
import TrainingJobs from './pages/training/TrainingJobs';
import KcatFeature from './pages/features/KcatFeature';
import KmFeature from './pages/features/KmFeature';
import TmFeature from './pages/features/TmFeature';
import SolubilityFeature from './pages/features/SolubilityFeature';
import PromoterFeature from './pages/features/PromoterFeature';
import RbsFeature from './pages/features/RbsFeature';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  // 确保语言设置正确应用
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict/kcat" element={<KcatPredictor />} />
            <Route path="/predict/km" element={<KmPredictor />} />
            <Route path="/predict/tm" element={<TmPredictor />} />
            <Route path="/predict/solubility" element={<SolubilityPredictor />} />
            <Route path="/predict/promoter" element={<PromoterPredictor />} />
            <Route path="/predict/rbs" element={<RbsPredictor />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/api" element={<Api />} />
            <Route path="/training" element={<Training />} />
            <Route path="/training/kcat" element={<KcatTraining />} />
            <Route path="/training/km" element={<KmTraining />} />
            <Route path="/training/tm" element={<TmTraining />} />
            <Route path="/training/solubility" element={<SolubilityTraining />} />
            <Route path="/training/jobs" element={<TrainingJobs />} />
            
            {/* 功能入口页面 */}
            <Route path="/features/kcat" element={<KcatFeature />} />
            <Route path="/features/km" element={<KmFeature />} />
            <Route path="/features/tm" element={<TmFeature />} />
            <Route path="/features/solubility" element={<SolubilityFeature />} />
            <Route path="/features/promoter" element={<PromoterFeature />} />
            <Route path="/features/rbs" element={<RbsFeature />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 