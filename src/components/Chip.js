import React, {useState} from "react";
import { SafeAreaView,View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { COLOR } from "../utility/Theme";
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

const Chip = ({item})=> {

  const [labelData, setLabelData] = useState([]);
    const [checkBox, setCheckBox] = useState(true);

    const onBoxPress = () => {
      setCheckBox(!checkBox);
    }

    return (      
      <SafeAreaView style={styles.view}>
      {labelData.map(item => (
       <TouchableOpacity key={item.labelNameid}
       style={styles.label}
       onPress={() =>onBoxPress()}>
      <Icon1 size={20} 
      style={styles.icon}
       name= "label-outline" 
        color="white" />  
        <View key={item.labelNameid}> 
        <Text style={styles.text1}> {item.labelName}</Text>         
        </View>
        <Icon1 size={20} 
     name= {checkBox? "checkbox-blank-outline" : "checkbox-marked"} 
       style={styles.icon1} color="white" />
     </TouchableOpacity>
      ))}
    </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
  label: {
    flexDirection:'row',
    marginTop: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
   
  },
  text1: {
    width:100,
    color:'white',
    marginRight: 180,
    marginTop:15,
   },
   icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
icon1: {
    color:"white",
    marginRight:20,
    marginTop:10
},
})
  
export default Chip