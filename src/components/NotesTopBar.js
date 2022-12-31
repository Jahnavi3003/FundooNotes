import React, {useState, useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { COLOR } from '../utility/Theme';

const NotesTopBar = ({
  onBackPress,
  pinData,
  archiveData,
  setArchiveData,
  deleteData,
  onPinHandle,
  onPress,
}) => {

  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.view}>
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

      <TouchableOpacity style={styles.icon2} onPress={() => refRBSheet.current.open()} >
        <Icon3 name="bell-plus-outline" size={20} color="white" />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        height={350}
        
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container: {
            backgroundColor: COLOR.BACKGROUND_COLOR_LG
          },
          draggableIcon: {
            backgroundColor: COLOR.BACKGROUND_COLOR_LG
          }
        }}
      >
        <View style={{backgroundColor: COLOR.BACKGROUND_COLOR_LG, justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:5}}>
          <View>
            <TouchableOpacity style={styles.icons}>
              <Icon3
                name="alarm"
                color={'white'}
                size={20}
              />
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:-80}}>
              <TouchableOpacity>
              <Text style={styles.txt}>Later today</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity>
              <Text style={styles.time}>18:00 </Text>
              </TouchableOpacity>
            </View>
            
            </View>
            <View style={{backgroundColor: COLOR.BACKGROUND_COLOR_LG, justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:5}}>
          <View>
            <TouchableOpacity style={styles.icons}>
              <Icon3
                name="alarm"
                color={'white'}
                size={20}
              />
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:-80}}>
              <TouchableOpacity>
              <Text style={styles.txt}>Tomorrow Morning</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity>
              <Text style={styles.time}>8:00 </Text>
              </TouchableOpacity>
            </View>
            
            </View>
      
            <View style={{backgroundColor: COLOR.BACKGROUND_COLOR_LG, justifyContent:'space-between',flexDirection:'row',alignItems:'center',padding:5}}>
          <View>
            <TouchableOpacity style={styles.icons}>
              <Icon3
                name="alarm"
                color={'white'}
                size={20}
              />
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:-80}}>
              <TouchableOpacity>
              <Text style={styles.txt}>Tomorrow Evening</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity>
              <Text style={styles.time}>6:00 </Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{backgroundColor: COLOR.BACKGROUND_COLOR_LG}}>
            <TouchableOpacity
              style={styles.icons}
              onPress={{}}>
              <Icon3
                name="alarm"
                color={'white'}
                size={20}
              />
              <Text style={styles.txt}>Pick a Date</Text>
            </TouchableOpacity>
            </View>

            <View style={{backgroundColor: COLOR.BACKGROUND_COLOR_LG}}>
            <TouchableOpacity
              style={styles.icons}
              onPress={{}}>
              <Icon3
                name="alarm"
                color={'white'}
                size={20}
              />
              <Text style={styles.txt}>Pick a Time</Text>
            </TouchableOpacity>
            </View>


      </RBSheet>
      <TouchableOpacity
        style={styles.icon2}
        onPress={() => {
          setArchiveData(true);
          onPress();
        }}>
        <Icon name="archive-outline" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
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
  icons: {
    borderRadius: 30,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 5,
  },
  icon1: {
    alignContent: 'center',
    margin: 10,
    marginLeft: 200,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    marginLeft: 35,
  },
  time: {
    color: 'white',
    fontSize: 20,
    marginLeft: 85,
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
