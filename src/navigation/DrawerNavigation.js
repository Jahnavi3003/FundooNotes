import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Trash from '../screens/Trash';
import Reminders from '../screens/Reminders';
import Home from '../screens/Home';
//import Dashboard from '../screens/Dashboard';
import NewLabel from '../screens/NewLabel';
import Settings from '../screens/Settings';
import Help from '../screens/Help';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import Archive from '../screens/Archive';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {marginLeft: -10},
        drawerInactiveTintColor: 'grey',
        drawerActiveTintColor: 'blue',
      }}>
      <Drawer.Screen
        name="Notes"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="light-bulb" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reminders"
        component={Reminders}
        options={{
          drawerIcon: ({color}) => (
            <Icon1 name="bell-o" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Create New Label"
        component={NewLabel}
        options={{
          drawerIcon: ({color}) => (<Icon name="plus" size={22} color={color} />),
        }}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
        options={{
          drawerIcon: ({color}) => (
            <Icon2 name="archive-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Trash"
        component={Trash}
        options={{
          drawerIcon: ({color}) => (
            <Icon2 name="trash" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Icon2 name="settings-sharp" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: ({color}) => (
            <Icon2 name="help-circle" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
