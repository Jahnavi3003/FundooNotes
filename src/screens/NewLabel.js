import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLOR} from '../utility/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import LabelCard from '../components/LabelCard';
import {addLabel, fetchLabel} from '../services/FirebaseLabelServices';
import {useUid} from '../hooks/useUid';
import { useSelector, useDispatch } from 'react-redux';

const NewLabel = ({navigation}) => {
  const [labelName, setLabelName] = useState('');
  const [check, setCheck] = useState(true);
  const [cross, setCross] = useState(true);
  const [borderColor, setBorderColor] = useState(true);
  const dispatch= useDispatch();
  const labels = useSelector((state) => state.labels);

 // const [labelData, setLabelData] = useState([]);

  const uid = useUid();

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

  const onLabelPresent = async () => {
    setCross(!cross);
    setCheck(!check);
    setBorderColor(!borderColor);
    await addLabel(labelName, uid);
    getData();
    setLabelName('');
  };

  const onLabelAbsent = () => {
    setCross(!cross);
    setCheck(!check);
    setBorderColor(!borderColor);
  };
// console.log('$$$$$$$$$',labelData)
  return (
    <SafeAreaView style={styles.view}>
      <SafeAreaView style={styles.top}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}> Edit labels</Text>
      </SafeAreaView>

      <SafeAreaView
        style={[
          styles.box,
          {
            borderColor: borderColor
              ? COLOR.BACKGROUND_COLOR_G
              : COLOR.BACKGROUND_COLOR_DG,
          },
        ]}>
        <TouchableOpacity onPress={() => onLabelAbsent()}>
          <Icon1 style={styles.icon1} size={20} name={cross ? 'x' : 'plus'} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={labelName}
          onChangeText={label => setLabelName(label)}
          placeholder="Create new label"
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          onPress={
            labelName == '' ? () => onLabelAbsent() : () => onLabelPresent()
          }>
          <Icon2
            style={styles.icon2}
            name={cross ? 'check' : null}
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <FlatList
         // data={labelData}
          data={labels}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={{}}>
              <LabelCard
                {...item}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.labelNameid}
          key={item => item.labelNameid}
        />
      </SafeAreaView>
    </SafeAreaView>
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
    marginRight: 280,
  },
  input: {
    width: 200,
    height: 45,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    marginRight: 80,
    color: 'white',
  },
  icon1: {
    margin: 7,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: 'white',
  },

  icon2: {
    margin: 12,
    paddingEnd: 50,
  },
  box: {
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    flexDirection: 'row',
    marginTop: 20,
    height: 50,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default NewLabel;
