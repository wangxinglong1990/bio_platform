import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Badge, Button, Alert, Spinner, ProgressBar } from 'react-bootstrap';
import { getAllTrainingJobs, getTrainingJobStatus, cancelTrainingJob, downloadTrainedModel, TrainingJobStatus } from '../../services/api';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const TrainingJobs: React.FC = () => {
  const { t } = useTranslation();
  // 状态变量
  const [jobs, setJobs] = useState<TrainingJobStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [downloadingJobs, setDownloadingJobs] = useState<Record<string, boolean>>({});
  const [cancellingJobs, setCancellingJobs] = useState<Record<string, boolean>>({});
  
  // 获取所有训练任务
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getAllTrainingJobs();
      
      if (response.success) {
        setJobs(response.data.jobs || []);
      } else {
        setError(response.error || t('training.jobs.fetchError'));
      }
    } catch (err: any) {
      setError(t('training.jobs.fetchErrorMsg') + ': ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  
  // 刷新任务状态
  const refreshJobs = async () => {
    setRefreshing(true);
    
    try {
      // 对于正在运行的任务，单独更新状态
      const runningJobs = jobs.filter(job => job.status === 'queued' || job.status === 'running');
      
      if (runningJobs.length > 0) {
        const updatedJobsPromises = runningJobs.map(async (job) => {
          const response = await getTrainingJobStatus(job.jobId);
          return response.success ? response.data : job;
        });
        
        const updatedJobs = await Promise.all(updatedJobsPromises);
        
        // 更新任务列表
        setJobs(currentJobs => {
          const newJobs = [...currentJobs];
          
          for (const updatedJob of updatedJobs) {
            const index = newJobs.findIndex(j => j.jobId === updatedJob.jobId);
            if (index !== -1) {
              newJobs[index] = updatedJob;
            }
          }
          
          return newJobs;
        });
      } else {
        // 如果没有运行中的任务，直接获取所有任务
        await fetchJobs();
      }
    } catch (err: any) {
      console.error(t('training.jobs.refreshError') + ':', err);
    } finally {
      setRefreshing(false);
    }
  };
  
  // 取消训练任务
  const handleCancelJob = async (jobId: string) => {
    setCancellingJobs(prev => ({ ...prev, [jobId]: true }));
    
    try {
      const response = await cancelTrainingJob(jobId);
      
      if (response.success) {
        // 更新任务状态
        setJobs(currentJobs => {
          return currentJobs.map(job => {
            if (job.jobId === jobId) {
              return { ...job, status: 'failed', message: t('training.jobs.cancelledMessage') };
            }
            return job;
          });
        });
      } else {
        setError(t('training.jobs.cancelError', { jobId }));
      }
    } catch (err: any) {
      setError(t('training.jobs.cancelErrorMsg') + ': ' + err.message);
    } finally {
      setCancellingJobs(prev => ({ ...prev, [jobId]: false }));
    }
  };
  
  // 下载训练模型
  const handleDownloadModel = async (jobId: string) => {
    setDownloadingJobs(prev => ({ ...prev, [jobId]: true }));
    
    try {
      const modelBlob = await downloadTrainedModel(jobId);
      
      // 创建下载链接
      const url = window.URL.createObjectURL(modelBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `model_${jobId}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(t('training.jobs.downloadError') + ': ' + err.message);
    } finally {
      setDownloadingJobs(prev => ({ ...prev, [jobId]: false }));
    }
  };
  
  // 获取状态标签
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'queued':
        return <Badge bg="secondary">{t('training.jobs.status.queued')}</Badge>;
      case 'running':
        return <Badge bg="primary">{t('training.jobs.status.running')}</Badge>;
      case 'completed':
        return <Badge bg="success">{t('training.jobs.status.completed')}</Badge>;
      case 'failed':
        return <Badge bg="danger">{t('training.jobs.status.failed')}</Badge>;
      default:
        return <Badge bg="light" text="dark">{t('training.jobs.status.unknown')}</Badge>;
    }
  };
  
  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(i18n.language === 'zh' ? 'zh-CN' : 'en-US');
  };
  
  // 组件加载时获取数据
  useEffect(() => {
    fetchJobs();
    
    // 设置定时器，每30秒刷新一次运行中的任务状态
    const intervalId = setInterval(() => {
      if (jobs.some(job => job.status === 'queued' || job.status === 'running')) {
        refreshJobs();
      }
    }, 30000);
    
    // 组件卸载时清除定时器
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{t('training.jobs.title')}</h1>
        <Button 
          variant="outline-primary"
          onClick={refreshJobs}
          disabled={refreshing}
        >
          {refreshing ? (
            <>
              <Spinner 
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              {t('training.jobs.refreshing')}
            </>
          ) : t('training.jobs.refresh')}
        </Button>
      </div>
      
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}
      
      <Card className="shadow-sm">
        <Card.Body>
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" />
              <p className="mt-3">{t('training.jobs.loading')}</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-5">
              <p className="mb-0">{t('training.jobs.empty')}</p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table hover>
                <thead>
                  <tr>
                    <th>{t('training.jobs.table.id')}</th>
                    <th>{t('training.jobs.table.type')}</th>
                    <th>{t('training.jobs.table.description')}</th>
                    <th>{t('training.jobs.table.status')}</th>
                    <th>{t('training.jobs.table.progress')}</th>
                    <th>{t('training.jobs.table.created')}</th>
                    <th>{t('training.jobs.table.updated')}</th>
                    <th>{t('training.jobs.table.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.jobId}>
                      <td>
                        <small className="text-muted">{job.jobId.substring(0, 8)}...</small>
                      </td>
                      <td>
                        {job.modelType === 'kcat' && t('training.jobs.modelType.kcat')}
                        {job.modelType === 'km' && t('training.jobs.modelType.km')}
                        {job.modelType === 'solubility' && t('training.jobs.modelType.solubility')}
                        {job.modelType === 'promoter' && t('training.jobs.modelType.promoter')}
                        {job.modelType === 'rbs' && t('training.jobs.modelType.rbs')}
                      </td>
                      <td>{job.description || '-'}</td>
                      <td>{getStatusBadge(job.status)}</td>
                      <td>
                        {(job.status === 'running' || job.status === 'queued') && (
                          <ProgressBar 
                            now={job.progress || 0} 
                            label={`${job.progress || 0}%`}
                            animated 
                            style={{ height: '10px' }}
                          />
                        )}
                        {job.status === 'completed' && '100%'}
                        {job.status === 'failed' && (
                          <span className="text-danger">{job.message || t('training.jobs.trainingFailed')}</span>
                        )}
                      </td>
                      <td>
                        <small>{formatDate(job.createdAt)}</small>
                      </td>
                      <td>
                        <small>{formatDate(job.updatedAt)}</small>
                      </td>
                      <td>
                        {job.status === 'completed' && (
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => handleDownloadModel(job.jobId)}
                            disabled={downloadingJobs[job.jobId]}
                          >
                            {downloadingJobs[job.jobId] ? (
                              <>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </>
                            ) : t('training.jobs.download')}
                          </Button>
                        )}
                        {(job.status === 'running' || job.status === 'queued') && (
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleCancelJob(job.jobId)}
                            disabled={cancellingJobs[job.jobId]}
                          >
                            {cancellingJobs[job.jobId] ? (
                              <>
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </>
                            ) : t('training.jobs.cancel')}
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TrainingJobs; 