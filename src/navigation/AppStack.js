import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AddNewNote from '../screens/AddNewNote';
import SearchNotes from '../screens/SearchNotes';
import DrawerNavigation from './DrawerNavigation';
//import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Drawer"
        component={DrawerNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddNewNote"
        component={AddNewNote}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SearchNotes"
        component={SearchNotes}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
