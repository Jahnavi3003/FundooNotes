import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';
import { useSelector, useDispatch } from 'react-redux';

const ArchiveTopBar = ({menuPress}) => {

  const dispatch = useDispatch();
  const layout = useSelector((state) => state.layout)
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={menuPress}>
        <Icon name="menu" style={styles.icon} size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}> Archive </Text>
      <TouchableOpacity onPress={{}}>
        <Icon2 name="search" style={styles.icon} size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type : 'CHANGELAYOUT'})}>
        <Icon1
          name={layout ? 'view-grid-outline' : 'view-agenda-outline'}
          style={styles.icon}
          size={20}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    color: 'white',
    marginTop: 10,
    borderRadius: 5,
    height: 35,
    width: 180,
  },
});

export default ArchiveTopBar;
