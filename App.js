import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppProviders from './src/app/AppProviders';
import HomeScreen from './src/ui/screens/HomeScreen';

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