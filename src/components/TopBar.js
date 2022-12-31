import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../navigation/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({menuPress}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const layout = useSelector((state)=> state.layout)

  const {user, logout} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(user);
  return (
    <SafeAreaView style={styles.view}>
      <TouchableOpacity onPress={menuPress}>
        <Icon name="menu" style={styles.icon} size={20} color="white" />
      </TouchableOpacity>
      <SafeAreaView style={styles.input}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchNotes')}>
          <Text style={{color: 'white'}}> Search Your Notes </Text>

          {/* <TextInput
            // onChangeText={}
            placeholder="Search Your Notes"
            placeholderTextColor={'white'}
          /> */}
        </TouchableOpacity>
      </SafeAreaView>

      {/* <TouchableOpacity onPress={() => changeLayout()}> */}
      <TouchableOpacity onPress={() => dispatch({type: 'CHANGELAYOUT'})}>
        <Icon1
          name={layout ? 'view-grid-outline' : 'view-agenda-outline'}
          style={styles.icon}
          size={20}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {/* <Icon name="user" style={styles.icon} size={20} color="white" /> */}
        <SafeAreaView style={styles.photoURL}>
          {user.photoURL ? (
            <Image style={styles.image} source={{uri: user.photoURL}} />
          ) : (
            <Text style={styles.name}>
              {' '}
              S{/* {user.displayName.charAt(0)} */}
            </Text>
          )}
        </SafeAreaView>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={styles.modalcontainer}>
          <SafeAreaView style={styles.modalbackground}>
            <Image style={styles.modalimage} source={{uri: user.photoURL}} />
            <Text style={styles.email}> {user.email} </Text>
            <Pressable
              style={{backgroundColor: 'black', margin: 30, borderRadius: 10}}
              onPress={() => logout()}>
              <Text style={styles.text}>Logout</Text>
            </Pressable>
          </SafeAreaView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#4e504e',
    borderRadius: 20,
  },
  icon: {
    margin: 7,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  input: {
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: '#4e504e',
    borderRadius: 5,
    height: 35,
    width: 180,
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 60,
    marginBottom: 350,
  },
  modalbackground: {
    backgroundColor: '#4e504e',
    flex: 0.75,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  modalimage: {
    height: 30,
    borderRadius: 20,
    width: 30,
    marginRight: 20,
  },
  photoURL: {
    borderRadius: 20,
    backgroundColor: '#302f2c',
    paddingLeft: 3,
    margin: 5,
    borderColor: '#4e504e',
    borderWidth: 2,
    height: 35,
    width: 35,
  },
  image: {
    height: 30,
    borderRadius: 20,
    width: 30,
    marginRight: 20,
  },
  email: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
  },
  name: {
    color: 'white',
    marginLeft: 10,
    marginTop: 2,
    fontSize: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default TopBar;
