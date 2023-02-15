import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Onboarding from './containers/OnBoarding';
import Maps from './containers/Dashboard/Maps';
import Trips from './containers/Dashboard/Trips';
import NewJourney from './containers/Dashboard/NewJourney';
import boot from './utils/boot';
import Register from './containers/Auth/Register';
const Routes = () => {
  const bootstart = async () => {
    await boot.start();
  };
  useEffect(() => {
    bootstart();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen name="NewJourney" component={NewJourney} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Maps" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
