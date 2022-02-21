import { SafeAreaProvider} from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashScreen from './components/FlashScreen';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ForgetpasswordScreen from './components/ForgetpasswordScreen';
import RegisterScreen from './components/RegisterScreen';
import EntercodeScreen from './components/EntercodeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Flash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Flash" component={FlashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={LoginScreen} />
          <Stack.Screen name="Forgetpassword" component={ForgetpasswordScreen} options={{headerShown: true , title:"Forget Password",backgroungColor:"blue"}} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Entercode" component={EntercodeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
