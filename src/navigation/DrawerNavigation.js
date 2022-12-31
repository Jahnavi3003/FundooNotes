import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Trash from '../screens/Trash';
import Reminders from '../screens/Reminders';
import Home from '../screens/Home';
//import Dashboard from '../screens/Dashboard';
import NewLabel from '../screens/NewLabel';
import Settings from '../screens/Settings';
import Help from '../screens/Help';
import LabelInDrawer from '../screens/LabelInDrawer'
import Archive from '../screens/Archive';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
        headerShown: false,
       }}
      >
      <Drawer.Screen
        name="Notes"
        component={Home}
      />
    
      <Drawer.Screen
        name="Reminders"
        component={Reminders}
      />
      <Drawer.Screen  
        name="CreateNewLabel"
        component={NewLabel}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
      />
      <Drawer.Screen
        name="Trash"
        component={Trash}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
      />
      <Drawer.Screen
        name="LabelInDrawer"
        component={LabelInDrawer}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
