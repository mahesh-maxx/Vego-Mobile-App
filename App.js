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
import BoxScreen from './components/BoxScreen';
import CheckoutScreen from './components/CheckoutScreen';
import ProfileScreen from './components/ProfileScreen';
import DeliveryaddressScreen from './components/DeliveryaddressScreen';
import BoxtypesScreen from './components/BoxtypesScreen';
import ProductScreen from './components/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Flash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Flash" component={FlashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={LoginScreen} options={{headerStyle: {
            backgroundColor: 'white',
          }}}/>
          <Stack.Screen name="Forgetpassword" component={ForgetpasswordScreen} options={{headerShown: true , title:"Forget Password",backgroundColor:"blue"}} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Entercode" component={EntercodeScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown: true}}/>
          <Stack.Screen name="Box" component={BoxScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown: true, color:'#939994', title:"Checkout"}}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true, color:'#939994', title:"My Profile"}}/>
          <Stack.Screen name="Deliveryaddress" component={DeliveryaddressScreen} options={{headerShown: true, color:'#a5b0aa', title:"Delivery Address"}}/>
          <Stack.Screen name="Boxtypes" component={BoxtypesScreen} options={{headerShown: true, color:'#a5b0aa', title:""}}/>
          <Stack.Screen name="Product" component={ProductScreen} options={{headerShown: true, color:'#a5b0aa', title:"Product Details"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
