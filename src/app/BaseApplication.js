// src/app/BaseApplication.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

const BaseApplicationContext = createContext();

export const useBaseApplication = () => useContext(BaseApplicationContext);

export const BaseApplicationProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const loadAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setAuthToken(token);
      }
    };

    // Subscribe to internet connection status changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    loadAuthToken();

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  const checkInternetConnection = () => {
    if (!isConnected) {
      Alert.alert(
        'Network Error!!',
        'Please enable data or wifi connection',
        [{ text: 'OK', onPress: () => {} }]
      );
      return false;
    }
    return true;
  };

  return (
    <BaseApplicationContext.Provider
      value={{
        authToken,
        setAuthToken,
        checkInternetConnection,
      }}
    >
      {children}
    </BaseApplicationContext.Provider>
  );
};

