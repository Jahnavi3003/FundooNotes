import React,{useState,useEffect,useCallback} from 'react';
import {SafeAreaView,View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { COLOR } from '../utility/Theme';
import { fetchLabel } from '../services/FirebaseLabelServices';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUid } from '../hooks/useUid';
import { useDispatch, useSelector } from 'react-redux';

import { DrawerContentScrollView } from '@react-navigation/drawer';


const CustomDrawer = ({props , navigation}) => {
 // const [labelData, setLabelData] = useState([]);
  const dispatch= useDispatch();
  const labels = useSelector((state) => state.labels);
  const uid = useUid();

  const getData = useCallback(async () => {
    let result = await fetchLabel(uid);
    dispatch({type: 'GETLABELDATA', payload: result});
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);
  
  console.log('&%%%%%%%%%%%%%%',labels);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#302f2c'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.body}>
        <Text style={styles.title}>
        {' '}
        Fundoo Notes
      </Text>
      </View>  

         <TouchableOpacity       
          onPress={() => {
            navigation.navigate('Notes');
          }}>
          <View style={styles.header}>
            <Icon
              name="light-bulb"
              size={24}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Notes
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Reminders');
          }}>
          <View style={styles.header}>
            <Icon1
              name="bell-o"
              size={24}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Reminders
            </Text>
          </View>
        </TouchableOpacity>
       
        <View style={styles.box}>
        <View style={styles.boxheader}> 
          <Text style={styles.text}>Labels</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('CreateNewLabel')}>
            <Text style={styles.text}> Edit</Text>
          </TouchableOpacity>
          </View>
          <View>
             {labels?.map(item => { return(
              <TouchableOpacity onPress={() => navigation.navigate('LabelInDrawer')}>
                <View key={item.labelNameid} 
                style={styles.header1}>    
            <Icon3
              name="label-outline"
              size={22}
              color={'gray'}
            />
         
          <Text style={styles.text1}> {item.labelName}</Text>
        </View>
        </TouchableOpacity>
             ) })}
       
       </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateNewLabel');
          }}>
          <View style={styles.header2}>
            <Icon
              name="plus"
              size={22}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Create New Label
            </Text>
          </View>
        </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Archive');
          }}>
          <View style={styles.header}>
            <Icon2
              name="archive-outline"
              size={22}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Archive
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Trash');
          }}>
          <View style={styles.header}>
            <Icon2
              name="trash"
              size={22}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Trash
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <View style={styles.header}>
            <Icon2
              name="settings-sharp"
              size={22}
              color={'white'}
            />
            <Text
              style={styles.text}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
        
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    borderColor:'blue', 
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:10
  },
  boxheader: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 30, 
    color: 'white', 
    alignContent:'flex-start',
  },
  header: {
    flexDirection: 'row', 
    paddingTop: 20, 
    paddingLeft: 22,
    margin:1,
    marginBottom:5
  },
  header1: {
    flexDirection: 'row', 
    paddingTop: 20, 
    paddingLeft: 15,
  },
  labelbox: {
    borderColor:'blue',
    borderWidth:2,
    marginLeft: 18,
    alignItems:'flex-start',
  },
  text: {
    fontSize: 15,
    color:COLOR.BACKGROUND_COLOR_W,
    fontFamily: 'arial',
    paddingLeft: 17,
  },
  header2: {
    flexDirection: 'row', 
    paddingTop: 20, 
    paddingLeft: 12,
  },
  text1: {
    fontSize: 15,
    color:'gray',
    fontFamily: 'arial',
    paddingLeft: 17,
  }
})

export default CustomDrawer;
