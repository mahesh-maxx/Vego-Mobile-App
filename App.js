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
import MainScreen from './components/MainScreen';
import CategoryScreen from './components/CategoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Flash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Flash" component={FlashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={LoginScreen} />
          <Stack.Screen name="Forgetpassword" component={ForgetpasswordScreen} options={{headerShown: true , title:"Forget Password",backgroundColor:"blue"}} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Entercode" component={EntercodeScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
