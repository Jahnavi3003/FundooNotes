import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../utility/Theme';
import { Chip } from 'react-native-paper';

const NoteCard = (props) => {
  if (props.pinData) {
    console.log(props);
  }

  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.text}>{props.note}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        {props.labelData?.map(label=> 
        <Chip style={styles.chip} key={label.labelNameid}>{label.labelName}</Chip>)}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    borderRadius: 20,
    borderColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
    margin: 12,
    color: 'white',
    borderWidth: 3,
    paddingHorizontal: 15,
  },
  chip: {
    backgroundColor:'grey',
    margin:8,
    width:70,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: COLOR.BACKGROUND_COLOR_W,
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 15,
    color: COLOR.BACKGROUND_COLOR_W,
    justifyContent: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default NoteCard;
