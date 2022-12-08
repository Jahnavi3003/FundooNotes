import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ReminderTopBar from '../components/ReminderTopBar';
import {COLOR} from '../utility/Theme';
const Reminders = ({navigation}) => {
  const [layout, setLayout] = useState(false);
  const changeLayout = () => {
    setLayout(!layout);
  };

  return (
    <View style={styles.view}>
      <ReminderTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
        changeLayout={changeLayout}
        layout={layout}
      />
      <Text>Reminders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
});

export default Reminders;
