import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import reg from './All_pages/reg';
import Home from './All_pages/Home';
import Edit_Profile from './All_pages/Edit_Profile';
import Dashboard from './All_pages/Dashboard';
import Vouchers from './All_pages/Vouchers';
import Promocode from './All_pages/Promocode';
import Home_items from './All_pages/Home_items';
import Cash_status from './All_pages/Cash_status';
import Log_In from './All_pages/Log_in';
import Verification from './All_pages/Verification';
import Create_Account from './All_pages/Create_Account';

const app = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Log_in"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="reg" component={reg} />
        <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Vouchers" component={Vouchers} />
        <Stack.Screen name="Promocode" component={Promocode} />
        <Stack.Screen name="Home_items" component={Home_items} />
        <Stack.Screen name="Cash_status" component={Cash_status} />
        <Stack.Screen name="Log_in" component={Log_In} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Create_Account" component={Create_Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default app;
