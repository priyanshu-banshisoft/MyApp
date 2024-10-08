// src/api/ApiService.js
import axios from 'axios';
import AsyncStore from '../utils/AsyncStore';
import AppConstants from '../config/AppConstants';
import { useNavigation } from '@react-navigation/native'; 
import { replace } from '../utils/NavigationServiceUtils';
import { showToast } from '../utils/ToastUtils';


const apiClient = axios.create({
  baseURL: AppConstants.apiUrl, 
  timeout: AppConstants.timeoutDuration, 
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStore.getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['Accept'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response && error.response.status === 401) {
      showToast('Session Expied, Please Login Again');
      replace('Splash')
    }
    return Promise.reject(error);
  }
);

export default apiClient;
