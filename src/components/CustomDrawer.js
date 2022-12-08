import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#302f2c'}}>
      <Text style={{fontSize: 25, color: 'white', margin: 10}}>
        {' '}
        Fundoo Notes
      </Text>
      <DrawerContentScrollView {...props}>
        <View style={{color: 'white'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
