import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import {COLOR} from '../utility/Theme';

const TrashTopBar = ({menuPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={menuPress}>
        <Icon name="menu" style={styles.icon} size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}> Trash </Text>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setModalVisible(true)}>
        <Icon2 name="dots-three-vertical" size={20} color="white" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbackground}>
            <Pressable onPress={{}}>
              <Text style={styles.text1}> Empty Trash </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    width: 400,
    height: 20,
    padding: 15,
  },
  text1: {
    color: 'white',
    fontWeight: '500',
    alignContent: 'center',
  },
  modalbackground: {
    flex: 0.1,
    backgroundColor: COLOR.BACKGROUND_COLOR_LG,
    justifyContent: 'space-around',
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  text: {
    color: 'white',
    marginTop: 10,
    borderRadius: 5,
    height: 35,
    width: 180,
  },
});

export default TrashTopBar;
