import React, {useState}from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { COLOR } from '../utility/Theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {useUid} from '../hooks/useUid';
import { updateLabel, deleteLabel } from '../services/FirebaseLabelServices';

const LabelCard = (props) => {
  const [value, setValue] = useState(props.labelName);
  const [trash, setTrash] = useState(false);
  const [borderColor, setBorderColor] = useState(false);

  const uid = useUid();

  const onDeletePress = async () => {
    await deleteLabel(uid,props.labelNameid)
    setTrash(!trash);
    setBorderColor(!borderColor);
  }

  const onLabelPress = () => {
    setTrash(!trash);
    setBorderColor(!borderColor);
  }

  const onCheckPress = async () => {
    await updateLabel(props.labelName,uid,props.labelNameid);
    setTrash(!trash);
    setBorderColor(!borderColor); 
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
         {!trash? 
         (<Icon
          name= "label-outline"
          size={20} onPress={() =>onLabelPress()}
            style={styles.icon1} color="white"
         />) :
         (<Icon
          name= "delete-outline"
          size={20} onPress={() =>onDeletePress()}
            style={styles.icon1} color="white"
         />)}

         <TextInput 
         onPressIn={()=> onLabelPress()}
         style={styles.text}
         value={value}
         onChangeText={text =>setValue(text)}
         placeholderTextColor={'white'}
         />
        
        {!trash? 
         (<Icon
          name= "pencil"
          size={20} onPress={() => {setTrash(!trash)}}
            style={styles.icon2} color="white"
         />) :
         (<Icon
          name= "check"
          size={20} onPress={() =>onCheckPress()}
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

export default LabelCard
