import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const NotesTopBar = ({
  onBackPress,
  pinData,
  archiveData,
  setArchiveData,
  deleteData,
  onPinHandle,
  onPress,
}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => onBackPress(pinData)}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon1} onPress={() => onPinHandle()}>
        <Icon1
          name={pinData ? 'pushpin' : 'pushpino'}
          size={20}
          color="white"
          style={{transform: [{rotate: '45deg'}]}}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon2}>
        <Icon3 name="bell-plus-outline" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon2}
        onPress={() => {
          setArchiveData(true);
          onPress();
        }}>
        <Icon name="archive-outline" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#302f2c',
    borderRadius: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
    width: '100%',
    height: 40,
  },
  icon: {
    alignContent: 'center',
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  icon1: {
    alignContent: 'center',
    margin: 10,
    marginLeft: 200,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  icon2: {
    alignContent: 'center',
    margin: 10,
    marginLeft: 20,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
export default NotesTopBar;
