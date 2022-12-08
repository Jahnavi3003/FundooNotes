import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

const BottomBar = ({navigation}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.icon}>
        <Icon1 name="done-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Icon name="brush" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Icon name="microphone-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <Icon name="image" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon1}
        onPress={() => navigation.navigate('AddNewNote', {object: 'object'})}>
        <Icon2 name="squared-plus" size={60} color="#4e504e" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#4e504e',
    borderRadius: 1,
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  icon: {
    alignContent: 'center',
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  icon1: {
    backgroundColor: '#302f2c',
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: 120,
    height: 60,
    width: 60,
  },
});

export default BottomBar;
