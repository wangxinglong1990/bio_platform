import React from 'react';
import FeatureTemplate from '../../components/FeatureTemplate';
import { useTranslation } from 'react-i18next';

const KcatFeature: React.FC = () => {
  const { t } = useTranslation();

  // 服务选项
  const serviceOptions = [
    {
      id: 'predict',
      title: t('features.kcat.title'),
      description: t('features.kcat.description'),
      icon: '🔬',
      color: '#5B86E5',
      route: '/predict/kcat',
      buttonText: t('features.predict')
    },
    {
      id: 'train',
      title: t('features.kcat.train.title'),
      description: t('features.kcat.train.description'),
      icon: '🧪',
      color: '#FF5F6D',
      route: '/training/kcat',
      buttonText: t('features.train')
    }
  ];

  const molecularInfoContent = (
    <>
      <p className="small mb-3">
        {t('features.kcat.molecularInfo.step')}
      </p>
      <div className="mb-3 text-center" style={{ fontFamily: 'Arial' }}>
        <p className="mb-1">k<sub>cat</sub> = (k<sub>B</sub>T/h) × e<sup>-ΔG<sup>‡</sup>/RT</sup></p>
        <p className="small text-secondary">
          {t('features.kcat.molecularInfo.formula')}
        </p>
      </div>
      <p className="small mb-0">
        {t('features.kcat.molecularInfo.factors')}
      </p>
    </>
  );

  return (
    <FeatureTemplate
      title="Kcat"
      titleSuffix={t('features.kcat.titleSuffix')}
      description={t('features.kcat.descriptionFull')}
      formula={{
        title: t('features.kcat.formula.title'),
        equation: "v = V<sub>max</sub> × [S] / (K<sub>m</sub> + [S]) = k<sub>cat</sub> × [E]<sub>0</sub> × [S] / (K<sub>m</sub> + [S])",
        explanation: t('features.kcat.formula.explanation')
      }}
      keyPoints={[
        t('features.kcat.keyPoints.unit'),
        t('features.kcat.keyPoints.measure'),
        t('features.kcat.keyPoints.specificity')
      ]}
      mainColor="#5B86E5"
      scienceApplication={{
        title: t('features.kcat.scienceApplication.title'),
        points: [
          t('features.kcat.scienceApplication.points.industrial'),
          t('features.kcat.scienceApplication.points.metabolic'),
          t('features.kcat.scienceApplication.points.evolution'),
          t('features.kcat.scienceApplication.points.biocatalysis')
        ]
      }}
      molecularInfo={{
        title: t('features.kcat.molecularInfo.title'),
        content: molecularInfoContent
      }}
      modelPerformance={{
        accuracy: t('features.kcat.modelPerformance.accuracy'),
        trainingData: t('features.kcat.modelPerformance.trainingData'),
        output: t('features.kcat.modelPerformance.output')
      }}
      serviceOptions={serviceOptions}
    />
  );
};

export default KcatFeature; 