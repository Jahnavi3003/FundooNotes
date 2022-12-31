import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLOR} from '../utility/Theme';
import Icon from 'react-native-vector-icons/Ionicons'
import { fetchLabel } from '../services/FirebaseLabelServices';
import { useUid } from '../hooks/useUid';
import Labels from '../components/Labels';
import { useSelector, useDispatch } from 'react-redux';

const LabelInModal = ({navigation,route}) => {
    
    const [value, setValue] = useState('');
    const [selection,setSelection] = useState([]);
 //   const [labelData, setLabelData] = useState([]);
    const uid = useUid();
    const noteData = route.params?.noteData;
    const dispatch= useDispatch();
    const labels = useSelector((state) => state.labels);

    const getData = useCallback (async () => {
      let result = await fetchLabel(uid);
      dispatch({type: 'GETLABELDATA', payload: result});
     // setLabelData(result);
    }, []);
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getData();
      });
      return unsubscribe;
    }, []);

   const onCheck = (item) => {
    const index = selection.findIndex(labels => labels.labelNameid === item.labelNameid);
    if (index === -1)
    setSelection([...selection,item]);
    else {
      const selected = [...selection];
      selected.splice(index, 1);
      setSelection(selected);
    }
     
   }
  return (
   <SafeAreaView style={styles.view}>
     <SafeAreaView style={styles.top}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('AddNewNote', {labels: selection,noteData})}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
       <TextInput style={styles.input}
         placeholder= "Enter label name"
         value={value}
         onChangeText={text =>setValue(text)}
         placeholderTextColor={'white'}
       />
     </SafeAreaView>
         
         <View>
         {labels.map(item => (
          <Labels
          key={item.labelNameid}
          data={item}
          onCheck={onCheck}
          selection={selection}/>    
         ))}
       </View> 
       

   </SafeAreaView>
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
    input: {
      width: 200,
      height: 45,
      backgroundColor: COLOR.BACKGROUND_COLOR_DG,
      marginRight: 280,
      color: 'white',
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

export default LabelInModal