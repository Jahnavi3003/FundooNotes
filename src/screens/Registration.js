import React, {useContext, useState} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import {COLOR} from '../utility/Theme';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

const Register = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const {register} = useContext(AuthContext);

  const [error, setError] = useState({});

  const registerValidation = () => {
    let RegFormErr = {};
    let isValid = true;

    if (fullName === '') {
      RegFormErr.fullName = 'Enter valid Name';
      isValid = false;
    }
    if (email === '') {
      RegFormErr.email = 'Enter valid Email Address';
      isValid = false;
    }

    if (password === '') {
      RegFormErr.password = 'Create valid Password';
      isValid = false;
    }
    if (password !== confPassword) {
      RegFormErr.confPassword = 'Password Does Not Match';
      isValid = false;
    }

    setError(RegFormErr);
    return isValid;
  };

  console.log(email, password);
  const onRegister = () => {
    if (registerValidation()) {
      register(email, password);
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}> Registration Form </Text>
      <Text> </Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      {error.fullName && <Text style={styles.text1}>{error.fullName}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {error.email && <Text style={styles.text1}>{error.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {error.password && <Text style={styles.text1}>{error.password}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confPassword}
        onChangeText={setConfPassword}
      />
      {error.confPassword && (
        <Text style={styles.text1}>{error.confPassword}</Text>
      )}
      <Text style={styles.condition1}>
        By registering , you confirm that you accept our {''}
        <Text style={styles.condition2}>terms of use {''}</Text>
        and {''}
        <Text style={styles.condition2}>privacy policy.</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRegister}>
        <Text style={styles.registerbtn}> Register </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.button2}> Already Have Account? Login! </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.BACKGROUND_COLOR_B,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: COLOR.BACKGROUND_COLOR_W,
    textAlign: 'center',
    alignContent: 'flex-start',
    margin: 8,
  },
  text1: {color: 'red'},
  button: {
    backgroundColor: COLOR.SECONDARY_COLOR_P,
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  button1: {
    backgroundColor: COLOR.SECONDARY_COLOR_P,
    alignItems: 'center',
    width: 230,
    margin: 15,
    height: 40,
    padding: 8,
    marginTop: 15,
    marginLeft: 10,
  },
  condition1: {
    color: COLOR.BACKGROUND_COLOR_W,
    marginLeft: 20,
    textAlign: 'center',
    margin: 15,
  },
  condition2: {
    color: COLOR.BORDER_COLOR_BV,
    fontWeight: 'bold',
    marginRight: 30,
  },
  button2: {fontSize: 15, fontWeight: 'bold', color: COLOR.BACKGROUND_COLOR_W},
  registerbtn: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLOR.BACKGROUND_COLOR_W,
  },
  input: {
    height: 40,
    margin: 10,
    marginLeft: 10,
    width: 320,
    backgroundColor: COLOR.BACKGROUND_COLOR_W,
    alignContent: 'center',
    borderColor: COLOR.SECONDARY_COLOR_P,
    borderRadius: 8,
    borderWidth: 2,
    padding: 10,
  },
});

export default Register;
