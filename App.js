import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import AccountRecovery from './pages/AccountRecovery';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={ Landing } />
          <Stack.Screen name='Login' component={ Login } />
          <Stack.Screen name='Registration' component={ Registration } />
          <Stack.Screen name='Home' component={ Home } />
          <Stack.Screen name='AccountRecovery' component={ AccountRecovery } />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;