import React, {useState}from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { COLOR } from '../utility/Theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useUid} from '../hooks/useUid';
import { updateLabel } from '../services/FirebaseLabelServices';

const LabelName = ({item}) => {
  
  const [labelName, setLabelName] = useState(item.labelName);
  const [pencil, setPencil] = useState(true);
  const [label, setLabel] = useState(true);
  const [borderColor, setBorderColor] = useState(false);

  const uid = useUid();

  const onLabelPress = () => {
    setLabel(!label);
    setPencil(!pencil);
    setBorderColor(!borderColor);
  }

  const onPencilPress = async() => {
    setLabel(!label);
    setPencil(!pencil);
    setBorderColor(!borderColor);
    await updateLabel(uid,labelName)
  }

  return (
    <View style={[
      styles.view,
      {
        borderColor: borderColor
          ? COLOR.BACKGROUND_COLOR_G
          : COLOR.BACKGROUND_COLOR_DG,
      },
    ]}>
         {label? 
         (<Icon
          name= "label-outline"
          size={20} onPress={() =>onLabelPress()}
            style={styles.icon1} color="white"
         />) :
         (<Icon
          name= "delete-outline"
          size={20} onPress={() =>onLabelPress()}
            style={styles.icon1} color="white"
         />)}

         <TextInput 
         onPressIn={()=>onLabelPress()}
         style={styles.text}
         value={labelName}
         onChangeText={text =>setLabelName(text)}
         placeholderTextColor={'white'}
         />
        
        {pencil? 
         (<Icon
          name= "pencil"
          size={20} onPress={() =>onPencilPress()}
            style={styles.icon2} color="white"
         />) :
         (<Icon
          name= "check"
          size={20} onPress={() =>onLabelPress()}
            style={styles.icon2} color="white"
         />)}

        </View>
  )
}
const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: COLOR.BACKGROUND_COLOR_DG,
        flexDirection:'row',
        alignContent:'space-between',
        alignItems:'center',
        borderWidth:1,
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
    text: {
      width:290,
      color:'white'
     },
})

export default LabelName
