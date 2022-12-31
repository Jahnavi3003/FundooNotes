import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ViewBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteNote} from '../services/FirebaseNoteServices';
import {COLOR} from '../utility/Theme';
import {useTime} from '../hooks/useTime';

const NotesBottomBar = ({navigation, noteData, setDeleteData}) => {
  const time = useTime();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="plussquareo" size={20} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon1}>
        <Icon1 name="color-palette-outline" size={20} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Edited {time}</Text>
      </View>
      <TouchableOpacity
        style={styles.icon2}
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
            <TouchableOpacity
              onPress={() => {
                setDeleteData(true);
                setModalVisible(!modalVisible);
              }}>
              <Icon style={styles.icons} name="delete" size={20} color="white">
                <Text style={styles.text1}> Delete </Text>
              </Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={{}}>
              <Icon style={styles.icons} name="copy1" size={20} color="white">
                <Text style={styles.text1}> Make a copy </Text>
              </Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={{}}>
              <Icon
                style={styles.icons}
                name="sharealt"
                size={20}
                color="white">
                <Text style={styles.text1}> Send </Text>
              </Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              navigation.navigate('LabelInModal',{noteData});
              setModalVisible(!modalVisible);
              }}>
              <Icon3
                style={styles.icons}
                name="label-outline"
                size={20}
                color="white">
                <Text style={styles.text1}> Labels </Text>
              </Icon3>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#302f2c',
    borderRadius: 1,
    flexDirection: 'row',
    width: '100%',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    height: 40,
  },
  icon: {
    alignContent: 'center',
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: 120,
    padding: 5,
  },
  icons: {
    paddingHorizontal: 10,
  },
  modalbackground: {
    flex: 0.4,
    backgroundColor: COLOR.BACKGROUND_COLOR_LG,
    justifyContent: 'space-around',
  },
  icon1: {
    alignContent: 'center',
    margin: 10,
    alignItems: 'center',
  },
  icon2: {
    alignContent: 'center',
    margin: 10,
    alignItems: 'center',
  },
  text: {
    width: 200,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 11,
    marginLeft: 60,
  },
  text1: {
    color: 'white',
    fontWeight: '500',
    alignContent: 'center',
  },
});
export default NotesBottomBar;
