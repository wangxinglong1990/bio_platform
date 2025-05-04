import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Training: React.FC = () => {
  const { t } = useTranslation();
  
  // 训练服务类型
  const trainingServices = [
    {
      id: 'kcat',
      title: t('training.services.kcat.title', 'Kcat预测模型训练'),
      description: t('training.services.kcat.description', '使用您自己的酶-底物数据，训练定制化的Kcat预测模型'),
      icon: '🧪',
      route: '/training/kcat'
    },
    {
      id: 'km',
      title: t('training.services.km.title', 'Km预测模型训练'),
      description: t('training.services.km.description', '使用您自己的酶-底物数据，训练定制化的Km预测模型'),
      icon: '📊',
      route: '/training/km'
    },
    {
      id: 'solubility',
      title: t('training.services.solubility.title', '蛋白质溶解度预测模型训练'),
      description: t('training.services.solubility.description', '使用您自己的蛋白质溶解度数据，训练定制化的溶解度预测模型'),
      icon: '💧',
      route: '/training/solubility'
    },
    {
      id: 'promoter',
      title: t('training.services.promoter.title', '启动子强度预测模型训练'),
      description: t('training.services.promoter.description', '使用您自己的启动子序列和强度数据，训练定制化的启动子强度预测模型'),
      icon: '🧬',
      route: '/training/promoter'
    },
    {
      id: 'rbs',
      title: t('training.services.rbs.title', 'RBS预测模型训练'),
      description: t('training.services.rbs.description', '使用您自己的RBS序列和活性数据，训练定制化的RBS预测模型'),
      icon: '🔬',
      route: '/training/rbs'
    }
  ];

  return (
    <Container>
      <h1 className="mb-4">{t('training.pageTitle', '模型训练服务')}</h1>
      
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>{t('training.customTitle', '定制化模型训练')}</h5>
              <p>
                {t('training.customDescription', '欢迎使用我们的模型训练服务。通过此服务，您可以使用自己的数据来训练定制化的预测模型，以提高针对您特定研究领域的预测准确性。训练完成后，您可以下载模型或直接在我们的平台上使用。')}
              </p>
              <p>
                <strong>{t('training.advantages', '优势')}：</strong>
              </p>
              <ul>
                <li>{t('training.advantagesList.ownData', '使用您自己的数据集进行训练')}</li>
                <li>{t('training.advantagesList.customization', '根据特定需求定制化模型')}</li>
                <li>{t('training.advantagesList.accuracy', '提高针对您研究领域的预测准确性')}</li>
                <li>{t('training.advantagesList.download', '训练完成后可下载模型或直接在平台使用')}</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mb-3">{t('training.availableServices', '可用的训练服务')}</h2>
      <Row xs={1} md={2} className="g-4 mb-5">
        {trainingServices.map((service) => (
          <Col key={service.id}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="service-icon me-3">{service.icon}</div>
                  <h5 className="mb-0">{service.title}</h5>
                </div>
                <Card.Text>{service.description}</Card.Text>
                <div className="d-grid gap-2">
                  <Link to={service.route}>
                    <Button 
                      variant="outline-primary"
                      className="w-100"
                    >
                      {t('training.startTraining', '开始训练')}
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <h5>{t('training.howToUse', '如何使用训练服务')}</h5>
              <ol>
                <li>{t('training.steps.selectModel', '选择您要训练的模型类型')}</li>
                <li>{t('training.steps.uploadData', '上传您的训练数据集（CSV或Excel格式）')}</li>
                <li>{t('training.steps.setParams', '设置训练参数')}</li>
                <li>{t('training.steps.submitJob', '提交训练任务')}</li>
                <li>{t('training.steps.waitCompletion', '等待训练完成（您可以随时查看训练进度）')}</li>
                <li>{t('training.steps.download', '下载训练好的模型或直接在平台上使用')}</li>
              </ol>
              <p className="mb-0">
                <strong>{t('training.note', '注意')}：</strong> {t('training.trainingTimeNote', '训练时间取决于数据集大小和选择的参数。大型数据集可能需要几小时完成训练。')}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h5>{t('training.viewTasks', '查看我的训练任务')}</h5>
              <p>
                {t('training.viewTasksDescription', '您可以查看和管理您之前提交的所有训练任务，包括正在进行中和已完成的任务。')}
              </p>
              <Link to="/training/jobs">
                <Button 
                  variant="primary"
                >
                  {t('training.viewMyTasks', '查看我的训练任务')}
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Training; 