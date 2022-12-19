import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLOR} from '../utility/Theme';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { fetchLabel } from '../services/FirebaseLabelServices';
import { useUid } from '../hooks/useUid';
import LabelName from '../components/LabelName';

const LabelInModal = ({navigation,item}) => {
    
    const [labelName, setLabelName] = useState(item.labelName)
    const [labelData, setLabelData] = useState([]);
    const [checkBox, setCheckBox] = useState(true)
    const uid = useUid();
  
    const getData = async () => {
      let result = await fetchLabel(uid);
      setLabelData(result);
    };
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getData();
      });
      return unsubscribe;
    }, []);

   const onBoxPress = () => {
     setCheckBox(false)
   }
  return (
   <View style={styles.view}>
     <View style={styles.top}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
       <TextInput style={styles.text}
         placeholder= "Enter label name"
         value={labelName}
         onChangeText={text =>setLabelName(text)}
         placeholderTextColor={'white'}
       />
     </View>
      <View style={styles.label}>
        <TouchableOpacity onPress={() =>onBoxPress()}>
        <Icon1 size={20} 
         name= "label-outline" 
         style={styles.icon1} color="white" />
         </TouchableOpacity>
         <Text style={styles.text1}>{labelName}</Text>
        <TouchableOpacity onPress={() =>onBoxPress()}>
        <Icon1 size={20} 
        name= {checkBox? "checkbox-blank-outline" : "checkbox-marked"} style={styles.icon2} color="white" />
        </TouchableOpacity>
        </View>
   </View>
  )
}

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
    label: {
      flexDirection:'row',
      alignContent:'space-between',
      alignItems:'center',
    },
    text: {
      color: 'white',
      marginRight: 280,
    },
    text1: {
      width:290,
      color:'white'
     },
    input: {
      width: 200,
      height: 45,
      backgroundColor: COLOR.BACKGROUND_COLOR_DG,
      marginRight: 80,
      color: 'white',
    },
    icon: {
        margin: 5,
        padding: 5,
        paddingHorizontal: 15,
        paddingVertical: 9,
      },
    icon1: {
        margin: 7,
        padding: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color:"white"
  },
    icon2: {
        color:"white",
        alignItems:'flex-end',
        alignContent:'flex-end',
  },
})

export default LabelInModal