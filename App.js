import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLoader } from './src/components/GlobalLoader';
import AppProviders from './src/app/AppProviders';
import { useBaseApplication } from './src/app/BaseApplication';
import apiClient from './src/api/ApiService';
import { showToast } from './src/utils/ToastUtils';
import { useBottomSheet } from './src/utils/BottomSheetUtils';


function HomeScreen() {
  const { authToken, checkInternetConnection } = useBaseApplication();
  const { showLoader, hideLoader } = useLoader();
  const {showBottomSheet} = useBottomSheet();

  const fetchData = async () => {
    if (!checkInternetConnection()) {
      console.log('No internet connection');
      return;
    }
  
    showLoader();
    
    try {
      const response = await apiClient.post(ApiPaths.LOGIN)
      //showBottomSheet(<Text>hello</Text>);
      showToast('Hello');
      console.log('Auth Token:', response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      hideLoader();
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProviders>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </AppProviders>
  );
}

export default App;