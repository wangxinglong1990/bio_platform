import React from 'react';
import FeatureTemplate from '../../components/FeatureTemplate';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const SolubilityFeature: React.FC = () => {
  const { t } = useTranslation();
  
  // 服务选项
  const serviceOptions = [
    {
      id: 'predict',
      title: t('features.solubility.title'),
      description: t('features.solubility.description'),
      icon: '💧',
      color: '#4E65FF',
      route: '/predict/solubility',
      buttonText: t('features.predict')
    },
    {
      id: 'train',
      title: t('features.solubility.train.title'),
      description: t('features.solubility.train.description'),
      icon: '🧪',
      color: '#5B86E5',
      route: '/training/solubility',
      buttonText: t('features.train')
    }
  ];

  const molecularInfoContent = (
    <>
      <p className="small mb-3">
        {t('features.solubility.molecularInfo.step')}
      </p>
      <Row>
        <Col md={6}>
          <ul className="small mb-2">
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.charge')}</span> - {t('features.solubility.molecularInfo.factors.chargeDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.hydrophobic')}</span> - {t('features.solubility.molecularInfo.factors.hydrophobicDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.secondary')}</span> - {t('features.solubility.molecularInfo.factors.secondaryDesc')}</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="small mb-0">
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.disorder')}</span> - {t('features.solubility.molecularInfo.factors.disorderDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.translation')}</span> - {t('features.solubility.molecularInfo.factors.translationDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.solubility.molecularInfo.factors.chaperone')}</span> - {t('features.solubility.molecularInfo.factors.chaperoneDesc')}</li>
          </ul>
        </Col>
      </Row>
      <p className="small mt-2 mb-0">
        {t('features.solubility.molecularInfo.conclusion')}
      </p>
    </>
  );

  return (
    <FeatureTemplate
      title={t('home.protein.solubility.title')}
      description={t('features.solubility.descriptionFull')}
      formula={{
        title: t('features.solubility.formula.title'),
        equation: "ln(S) = -ΔG<sub>sol</sub>/RT = -(ΔH<sub>sol</sub> - TΔS<sub>sol</sub>)/RT",
        explanation: t('features.solubility.formula.explanation')
      }}
      keyPoints={[
        t('features.solubility.keyPoints.determinants'),
        t('features.solubility.keyPoints.impact'),
        t('features.solubility.keyPoints.conditions')
      ]}
      mainColor="#4E65FF"
      scienceApplication={{
        title: t('features.solubility.scienceApplication.title'),
        points: [
          t('features.solubility.scienceApplication.points.industrial'),
          t('features.solubility.scienceApplication.points.drug'),
          t('features.solubility.scienceApplication.points.antibody'),
          t('features.solubility.scienceApplication.points.circuit')
        ]
      }}
      molecularInfo={{
        title: t('features.solubility.molecularInfo.title'),
        content: molecularInfoContent
      }}
      modelPerformance={{
        accuracy: t('features.solubility.modelPerformance.accuracy'),
        trainingData: t('features.solubility.modelPerformance.trainingData'),
        output: t('features.solubility.modelPerformance.output')
      }}
      serviceOptions={serviceOptions}
    />
  );
};

export default SolubilityFeature; 