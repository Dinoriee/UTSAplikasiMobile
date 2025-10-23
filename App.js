import React, {Component} from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KatalogProvider } from './src/screens/KatalogContext';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Katalog from './src/screens/Katalog';
import SplashScreen from './src/screens/SplashScreen';
import Profile from './src/screens/Profile';
import TambahProduk from './src/screens/TambahProduk';
import Detail from './src/screens/Detail';
const Stack = createNativeStackNavigator();

function App(){
  return(
    <KatalogProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Katalog' component={Katalog} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='TambahProduk' component={TambahProduk} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    </KatalogProvider>
  )
}
export default App;