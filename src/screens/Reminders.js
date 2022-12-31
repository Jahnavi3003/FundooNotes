import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ReminderTopBar from '../components/ReminderTopBar';
import BottomBar from '../components/BottomBar'
import {COLOR} from '../utility/Theme';
const Reminders = ({navigation}) => {
  const [layout, setLayout] = useState(false);
  const changeLayout = () => {
    setLayout(!layout);
  };

  return (
    <SafeAreaView style={styles.view}>
      <ReminderTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
        changeLayout={changeLayout}
        layout={layout}
      />
       <SafeAreaView style={{justifyContent: 'flex-end'}}>
        <BottomBar navigation={navigation} />
       </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
});

export default Reminders;
