import React from 'react';
import FeatureTemplate from '../../components/FeatureTemplate';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TmFeature: React.FC = () => {
  const { t } = useTranslation();
  
  // 服务选项
  const serviceOptions = [
    {
      id: 'predict',
      title: t('features.tm.title'),
      description: t('features.tm.description'),
      icon: '🌡️',
      color: '#11998e',
      route: '/predict/tm',
      buttonText: t('features.predict')
    },
    {
      id: 'train',
      title: t('features.tm.train.title'),
      description: t('features.tm.train.description'),
      icon: '🧪',
      color: '#5B86E5',
      route: '/training/tm',
      buttonText: t('features.train')
    }
  ];

  const molecularInfoContent = (
    <>
      <p className="small mb-3">
        {t('features.tm.molecularInfo.step')}
      </p>
      <Row>
        <Col md={6}>
          <ul className="small mb-2">
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.hydrophobic')}</span> - {t('features.tm.molecularInfo.factors.hydrophobicDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.hydrogen')}</span> - {t('features.tm.molecularInfo.factors.hydrogenDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.saltBridge')}</span> - {t('features.tm.molecularInfo.factors.saltBridgeDesc')}</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="small mb-0">
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.disulfide')}</span> - {t('features.tm.molecularInfo.factors.disulfideDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.surface')}</span> - {t('features.tm.molecularInfo.factors.surfaceDesc')}</li>
            <li className="mb-1"><span className="fw-bold">{t('features.tm.molecularInfo.factors.loops')}</span> - {t('features.tm.molecularInfo.factors.loopsDesc')}</li>
          </ul>
        </Col>
      </Row>
      <p className="small mt-2 mb-0">
        {t('features.tm.molecularInfo.conclusion')}
      </p>
    </>
  );

  return (
    <FeatureTemplate
      title="Tm"
      titleSuffix={t('features.tm.titleSuffix')}
      description={t('features.tm.descriptionFull')}
      formula={{
        title: t('features.tm.formula.title'),
        equation: "ΔG = ΔH - TΔS = ΔH - T<sub>m</sub>ΔS = 0 (当T = T<sub>m</sub>时)",
        explanation: t('features.tm.formula.explanation')
      }}
      keyPoints={[
        t('features.tm.keyPoints.unit'),
        t('features.tm.keyPoints.significance'),
        t('features.tm.keyPoints.factors')
      ]}
      mainColor="#11998e"
      scienceApplication={{
        title: t('features.tm.scienceApplication.title'),
        points: [
          t('features.tm.scienceApplication.points.engineering'),
          t('features.tm.scienceApplication.points.drugs'),
          t('features.tm.scienceApplication.points.catalysis'),
          t('features.tm.scienceApplication.points.structure')
        ]
      }}
      molecularInfo={{
        title: t('features.tm.molecularInfo.title'),
        content: molecularInfoContent
      }}
      modelPerformance={{
        accuracy: t('features.tm.modelPerformance.accuracy'),
        trainingData: t('features.tm.modelPerformance.trainingData'),
        output: t('features.tm.modelPerformance.output')
      }}
      serviceOptions={serviceOptions}
    />
  );
};

export default TmFeature; 