import React from 'react';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
return Font.loadAsync({
'Trebuchet': require('./assets/trebuc.ttf'),
});
};

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




import HomeScreen from './Screens/Home'
import SettingsScreen from './Screens/Settings'
import ToDo from './Screens/ToDo'
import StaffListing from './Screens/StaffListing'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation screenOptions={styles.navigatorHeading}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="ToDo" component={ToDo} />
        <Drawer.Screen name="ROI Staff Listing" component={StaffListing} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = require('./Styles');
