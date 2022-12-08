import React, {useContext, useState} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  const {forgotPassword} = useContext(AuthContext);

  const passValidation = () => {
    let FormErr = {};
    let isValid = true;

    if (email === '') {
      FormErr.email = 'Enter valid Email!';
      isValid = false;
    }
    setError(FormErr);
    return isValid;
  };

  console.log(email);
  const onContinue = () => {
    if (passValidation()) {
      navigateToLogin();
      forgotPassword(email);
    }
    console.log(error);
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}> Reset Your Password</Text>
      <SafeAreaView style={styles.view}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Regitered Email"
          value={email}
          onChangeText={setEmail}
        />
        {error.email && (
          <Text style={{color: 'red', marginLeft: 55}}>{error.email}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={onContinue}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            {' '}
            Continue{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            {' '}
            Back{' '}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
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
    margin: 10,
    marginLeft: 40,
    width: 330,
    backgroundColor: 'lavender',
    alignContent: 'center',
    borderColor: '#c71585',
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#c71585',
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 8,
    margin: 10,
    marginTop: 10,
    marginLeft: 160,
  },

  text: {
    fontSize: 33,
    fontWeight: 'bold',
    marginLeft: 40,
    margin: 25,
    color: 'lavender',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default ResetPassword;
