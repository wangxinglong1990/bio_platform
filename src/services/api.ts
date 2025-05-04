import axios from 'axios';

// 根据环境选择API URL
const isDevelopment = process.env.NODE_ENV === 'development';
const API_URL = isDevelopment
  ? (process.env.REACT_APP_LOCAL_API_URL || 'http://localhost:5000/api')
  : (process.env.REACT_APP_API_URL || 'https://api.yourserver.com/api');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 文件上传配置
const fileApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export interface PredictionResponse {
  success: boolean;
  data?: any;
  error?: string;
  error_type?: string;
}

// Kcat预测
export const predictKcat = async (sequence: string, substrate: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/kcat', { sequence, substrate });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Kcat预测API错误:', error);
    
    // 获取错误信息和类型
    const errorData = error.response?.data || {};
    const errorMessage = errorData.error || '预测服务请求失败';
    const errorType = errorData.error_type || 'unknown_error';
    const statusCode = error.response?.status;
    
    // 根据错误类型和HTTP状态码定制错误信息
    if (errorType === 'protein_encoding_failed') {
      return { 
        success: false, 
        error: '蛋白质编码失败：无法处理蛋白质序列。请检查网络连接或稍后再试。',
        error_type: 'protein_encoding_failed'
      };
    } else if (errorType === 'model_missing') {
      return { 
        success: false, 
        error: '预测模型缺失：服务器上没有找到必要的预测模型文件。',
        error_type: 'model_missing'
      };
    } else if (statusCode === 503) {
      return { 
        success: false, 
        error: '服务暂时不可用：' + errorMessage,
        error_type: errorType
      };
    } else if (error.message === 'Network Error') {
      return {
        success: false,
        error: '网络错误：无法连接到预测服务。请检查您的网络连接。',
        error_type: 'network_error'
      };
    }
    
    return { 
      success: false, 
      error: errorMessage,
      error_type: errorType
    };
  }
};

export const predictKcatWithFile = async (file: File, substrateFile: File | null): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    if (substrateFile) {
      formData.append('substrate_file', substrateFile);
    }
    
    const response = await fileApi.post('/predict/kcat/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Kcat文件预测API错误:', error);
    
    // 获取错误信息和类型
    const errorData = error.response?.data || {};
    const errorMessage = errorData.error || '文件处理过程中发生错误';
    const errorType = errorData.error_type || 'unknown_error';
    const statusCode = error.response?.status;
    
    // 根据错误类型和HTTP状态码定制错误信息
    if (errorType === 'protein_encoding_failed') {
      return { 
        success: false, 
        error: '蛋白质编码失败：无法处理蛋白质序列。请检查网络连接或稍后再试。',
        error_type: 'protein_encoding_failed'
      };
    } else if (errorType === 'model_missing') {
      return { 
        success: false, 
        error: '预测模型缺失：服务器上没有找到必要的预测模型文件。',
        error_type: 'model_missing'
      };
    } else if (statusCode === 503) {
      return { 
        success: false, 
        error: '服务暂时不可用：' + errorMessage,
        error_type: errorType
      };
    } else if (error.message === 'Network Error') {
      return {
        success: false,
        error: '网络错误：无法连接到预测服务。请检查您的网络连接。',
        error_type: 'network_error'
      };
    }
    
    return { 
      success: false, 
      error: errorMessage,
      error_type: errorType
    };
  }
};

// Km预测
export const predictKm = async (sequence: string, substrate: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/km', { sequence, substrate });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '预测过程中发生错误' 
    };
  }
};

export const predictKmWithFile = async (file: File, substrateFile: File | null): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    if (substrateFile) {
      formData.append('substrate_file', substrateFile);
    }
    
    const response = await fileApi.post('/predict/km/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '文件处理过程中发生错误' 
    };
  }
};

// Tm预测
export const predictTm = async (sequence: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/tm', { sequence });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '预测过程中发生错误' 
    };
  }
};

export const predictTmWithFile = async (file: File): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fileApi.post('/predict/tm/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '文件处理过程中发生错误' 
    };
  }
};

// 溶解度预测
export const predictSolubility = async (sequence: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/solubility', { sequence });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '预测过程中发生错误' 
    };
  }
};

export const predictSolubilityWithFile = async (file: File): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fileApi.post('/predict/solubility/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '文件处理过程中发生错误' 
    };
  }
};

// 启动子强度预测
export const predictPromoter = async (sequence: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/promoter', { sequence });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '预测过程中发生错误' 
    };
  }
};

export const predictPromoterWithFile = async (file: File): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fileApi.post('/predict/promoter/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '文件处理过程中发生错误' 
    };
  }
};

// RBS翻译起始率预测
export const predictRbs = async (sequence: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post('/predict/rbs', { sequence });
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '预测过程中发生错误' 
    };
  }
};

export const predictRbsWithFile = async (file: File): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fileApi.post('/predict/rbs/file', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    return { 
      success: false, 
      error: error.response?.data?.message || '文件处理过程中发生错误' 
    };
  }
};

// 训练服务API
export interface TrainingParams {
  modelType: string;
  datasetFile?: File;
  trainingParams?: {
    epochs?: number;
    batchSize?: number;
    learningRate?: number;
    validationSplit?: number;
    [key: string]: any;
  };
  sequences?: string[];
  labels?: number[] | string[];
  description?: string;
}

export interface TrainingJobStatus {
  jobId: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  progress?: number;
  message?: string;
  results?: any;
  createdAt: string;
  updatedAt: string;
  modelType: string;
  description?: string;
}

export const submitTrainingJob = async (params: TrainingParams): Promise<PredictionResponse> => {
  try {
    const formData = new FormData();
    
    // 添加模型类型
    formData.append('modelType', params.modelType);
    
    // 添加描述
    if (params.description) {
      formData.append('description', params.description);
    }
    
    // 如果有数据集文件，添加到formData
    if (params.datasetFile) {
      formData.append('datasetFile', params.datasetFile);
    }
    
    // 如果有训练参数，转为JSON并添加
    if (params.trainingParams) {
      formData.append('trainingParams', JSON.stringify(params.trainingParams));
    }
    
    // 如果有序列和标签直接提供，添加到formData
    if (params.sequences && params.sequences.length > 0) {
      formData.append('sequences', JSON.stringify(params.sequences));
    }
    
    if (params.labels && params.labels.length > 0) {
      formData.append('labels', JSON.stringify(params.labels));
    }
    
    const response = await fileApi.post('/training/submit', formData);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('提交训练任务错误:', error);
    
    // 获取错误信息
    const errorMessage = error.response?.data?.error || '提交训练任务失败';
    const errorType = error.response?.data?.error_type || 'unknown_error';
    
    return { 
      success: false, 
      error: errorMessage,
      error_type: errorType
    };
  }
};

export const getTrainingJobStatus = async (jobId: string): Promise<PredictionResponse> => {
  try {
    const response = await api.get(`/training/status/${jobId}`);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('获取训练任务状态错误:', error);
    
    // 获取错误信息
    const errorMessage = error.response?.data?.error || '获取训练任务状态失败';
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export const getAllTrainingJobs = async (): Promise<PredictionResponse> => {
  try {
    const response = await api.get('/training/jobs');
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('获取所有训练任务错误:', error);
    
    // 获取错误信息
    const errorMessage = error.response?.data?.error || '获取训练任务列表失败';
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export const cancelTrainingJob = async (jobId: string): Promise<PredictionResponse> => {
  try {
    const response = await api.post(`/training/cancel/${jobId}`);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('取消训练任务错误:', error);
    
    // 获取错误信息
    const errorMessage = error.response?.data?.error || '取消训练任务失败';
    
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export const downloadTrainedModel = async (jobId: string): Promise<Blob> => {
  try {
    const response = await api.get(`/training/download/${jobId}`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    console.error('下载训练模型错误:', error);
    throw error;
  }
}; 