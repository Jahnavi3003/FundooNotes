import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import otps from '../Assets/images/otps.png';

const NewPassword = ({navigation}) => {
  const [num, setNum] = useState('');
  const [pwd, setPwd] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Text style={styles.text}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the Otp received on your Email"
        value={num}
        onChangeText={setNum}
      />
      <TextInput
        style={styles.input1}
        placeholder="Enter your new password"
        value={pwd}
        onChangeText={setPwd}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
          {' '}
          Submit{' '}
        </Text>
      </TouchableOpacity>
      <Image style={styles.image} source={otps} resizeMode="contain" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  input: {
    height: 40,
    margin: 30,
    marginLeft: 40,
    width: 330,
    backgroundColor: 'lavender',
    alignContent: 'center',
    textAlign: 'center',
    borderColor: '#c71585',
    borderWidth: 3,
    padding: 10,
  },
  input1: {
    height: 40,
    margin: 10,
    marginLeft: 40,
    width: 330,
    backgroundColor: 'lavender',
    textAlign: 'center',
    borderColor: '#c71585',
    borderWidth: 3,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#c71585',
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 8,
    marginTop: 8,
    marginLeft: 160,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 30,
    color: 'lavender',
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 50,
    marginLeft: 55,
    paddingLeft: 300,
    maxHeight: 300,
    maxWidth: 300,
  },
});

export default NewPassword;
