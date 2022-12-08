import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {COLOR} from '../utility/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';

const NewLabel = ({navigation}) => {

  const [value, setValue] = useState('');
  const [cross, setCross] = useState(true);
  const [check, setCheck] = useState(true);

  // onCheckHandle =()=> {
  //   setCheck(!check)
  // }

  // onCrossHandle =()=> {
  //    setCross(!cross)
  // }

  return (
    <View style={styles.view}>

      <View style={styles.top}> 
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}> Edit labels</Text>
      </View>
      
      <View style={styles.box}>
      <TouchableOpacity onPress={{}}>
      <Icon1 style={styles.icon1} name="x" size={20} color="white" /> 
      </TouchableOpacity>
      <TextInput style={styles.input}
          value={value}
          onChangeText={(label)=> setValue(label)}
          placeholder="Create new label"
          placeholderTextColor={'white'}
          /> 
      <TouchableOpacity onPress={onCheckHandle()}>
      <Icon2 style={styles.icon2} name="check" size={20} color="white" />
      </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
  top: {
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    marginTop: 10,
    marginRight:280,
  },
  input: {
   width:200,
   height:45,
   backgroundColor:COLOR.BACKGROUND_COLOR_DG,
   marginRight:80

  },
  icon1: {
    margin: 7,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
     
  icon2: {
    margin:12,
    paddingEnd:50
     
  },
  box: {
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    borderColor:'gray',
    flexDirection: 'row',
    marginTop: 20,
    height:50,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth:1,
   
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
export default NewLabel;
