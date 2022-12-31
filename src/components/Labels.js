import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLOR } from '../utility/Theme';
const Labels = ({ data, onCheck, selection }) => {
  const labelValue = data.labelNameid + '|' + data.labelName;
  console.log('***&**&&', labelValue);
  return (
    <View style={styles.label}>
      <Icon1 size={20}
        style={styles.icon}
        name="label-outline"
        color="white" />
      <Text style={styles.text}>{data.labelName}</Text>
      <Checkbox
        color='white'
        status={selection.includes(data) ? 'checked' : 'unchecked'}
        onPress={() => onCheck(data)} />
    </View>

  )
}
export default Labels;

const styles = StyleSheet.create({
  label: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  text: {
    width: 100,
    color: 'white',
    marginRight: 180,
    marginTop: 15,
  },
});
