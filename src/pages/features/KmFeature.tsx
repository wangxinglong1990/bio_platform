import React from 'react';
import FeatureTemplate from '../../components/FeatureTemplate';
import { useTranslation } from 'react-i18next';

const KmFeature: React.FC = () => {
  const { t } = useTranslation();
  
  // 服务选项
  const serviceOptions = [
    {
      id: 'predict',
      title: t('features.km.title'),
      description: t('features.km.description'),
      icon: '📊',
      color: '#FF5F6D',
      route: '/predict/km',
      buttonText: t('features.predict')
    },
    {
      id: 'train',
      title: t('features.km.train.title'),
      description: t('features.km.train.description'),
      icon: '🧪',
      color: '#5B86E5',
      route: '/training/km',
      buttonText: t('features.train')
    }
  ];

  const molecularInfoContent = (
    <>
      <p className="small mb-3">
        {t('features.km.molecularInfo.step')}
      </p>
      <div className="mb-3 text-center" style={{ fontFamily: 'Arial' }}>
        <p className="mb-1">E + S ⇌<sub>k<sub>1</sub>/k<sub>-1</sub></sub> ES → <sub>k<sub>2</sub></sub> E + P</p>
        <p className="mb-2">K<sub>m</sub> = (k<sub>-1</sub> + k<sub>2</sub>) / k<sub>1</sub></p>
        <p className="small text-secondary">
          {t('features.km.molecularInfo.formula')}
        </p>
      </div>
      <p className="small mb-0">
        {t('features.km.molecularInfo.factors')}
      </p>
    </>
  );

  return (
    <FeatureTemplate
      title="Km"
      titleSuffix={t('features.km.titleSuffix')}
      description={t('features.km.descriptionFull')}
      formula={{
        title: t('features.km.formula.title'),
        equation: "v = V<sub>max</sub> × [S] / (K<sub>m</sub> + [S])",
        explanation: t('features.km.formula.explanation')
      }}
      keyPoints={[
        t('features.km.keyPoints.unit'),
        t('features.km.keyPoints.affinity'),
        t('features.km.keyPoints.specificity')
      ]}
      mainColor="#FF5F6D"
      scienceApplication={{
        title: t('features.km.scienceApplication.title'),
        points: [
          t('features.km.scienceApplication.points.modeling'),
          t('features.km.scienceApplication.points.drug'),
          t('features.km.scienceApplication.points.comparison'),
          t('features.km.scienceApplication.points.optimization')
        ]
      }}
      molecularInfo={{
        title: t('features.km.molecularInfo.title'),
        content: molecularInfoContent
      }}
      modelPerformance={{
        accuracy: t('features.km.modelPerformance.accuracy'),
        trainingData: t('features.km.modelPerformance.trainingData'),
        output: t('features.km.modelPerformance.output')
      }}
      serviceOptions={serviceOptions}
    />
  );
};

export default KmFeature; 