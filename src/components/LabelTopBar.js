import React, {useState} from 'react';
import {SafeAreaView,View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo'
import {COLOR} from '../utility/Theme';
import { useSelector, useDispatch } from 'react-redux';

const LabelTopBar = ({menuPress}) => {

  const dispatch = useDispatch();
  const layout = useSelector((state) => state.layout)
  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity onPress={menuPress}>
        <Icon name="menu" style={styles.icon} size={20} color="white" />
      </TouchableOpacity>
     
      <Text> lbName </Text>
      <TouchableOpacity>
      <Icon2 name="search" style={styles.icon1} size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type : 'CHANGELAYOUT'})}>
        <Icon1
          name={layout ? 'view-grid-outline' : 'view-agenda-outline'}
          style={styles.icon2}
          size={20}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon3 name="dots-three-vertical" size={20}  style={styles.icon2} color="white" />
      </TouchableOpacity>
      </SafeAreaView>


  );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderRadius: 20,
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
        marginLeft: 160,
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

export default LabelTopBar;
