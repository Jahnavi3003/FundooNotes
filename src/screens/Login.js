import React, {useState, useEffect, useContext} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {COLOR} from '../utility/Theme';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/Ionicons';
import note from '../Assets/images/fun.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const {login} = useContext(AuthContext);
  const {googleLogin} = useContext(AuthContext);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '392866249183-99t0qttam7373ip7qnisbgff23i6i8o2.apps.googleusercontent.com',
    });
  }, []);

  const loginValidation = () => {
    let FormErr = {};
    let isValid = true;

    if (email === '') {
      FormErr.email = 'Enter valid Email!';
      isValid = false;
    }
    if (password === '') {
      FormErr.password = 'Enter valid Password!';
      isValid = false;
    }

    setError(FormErr);

    return isValid;
  };

  const onLogin = () => {
    if (loginValidation()) {
      login(email, password);
    }
    console.log(error);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}> Fundoo Notes </Text>
      <Image style={styles.image} source={note} resizeMode="contain" />
      <View style={styles.icon}>
        <Icon name="person-circle-outline" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {error.email && (
          <Text style={{color: 'red', marginLeft: 55}}>{error.email}</Text>
        )}
      </View>
      <View style={styles.icon}>
        <Icon name="lock-closed" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {error.password && (
          <Text style={{color: 'red', marginLeft: 50}}> {error.password} </Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: COLOR.BACKGROUND_COLOR_W,
          }}>
          {' '}
          Login{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.btn}> Forgot Password? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => googleLogin()}>
        <Text style={styles.btn}> Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.btn}> New User? Register Here!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.BACKGROUND_COLOR_B,
  },
  image: {
    marginLeft: 45,
    paddingLeft: 300,
    maxHeight: 150,
    maxWidth: 300,
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    margin: 10,
    marginLeft: 60,
    width: 40,
    backgroundColor: COLOR.PRIMARY_COLOR_L,
    alignContent: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 10,
    // marginLeft: 55,
    width: 250,
    backgroundColor: COLOR.PRIMARY_COLOR_L,
    alignContent: 'center',
    borderColor: COLOR.SECONDARY_COLOR_P,
    borderWidth: 1,
    padding: 10,
  },
  btn: {fontSize: 14, fontWeight: 'bold', color: COLOR.BACKGROUND_COLOR_B},
  button: {
    backgroundColor: COLOR.SECONDARY_COLOR_P,
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 8,
    marginTop: 10,
    marginLeft: 160,
  },
  buttons: {
    backgroundColor: COLOR.BACKGROUND_COLOR_W,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLOR.SECONDARY_COLOR_P,
    alignItems: 'center',
    width: 180,
    height: 40,
    padding: 8,
    marginTop: 15,
    marginLeft: 120,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 30,
    color: COLOR.PRIMARY_COLOR_L,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: COLOR.PRIMARY_COLOR_L,
    borderRadius: 8,
    alignItems: 'center',
    width: 180,
    height: 40,
    padding: 7,
    marginTop: 18,
    marginLeft: 120,
    borderColor: COLOR.BORDER_COLOR_BV,
    borderWidth: 3,
  },
  button2: {
    backgroundColor: COLOR.BACKGROUND_COLOR_W,
    borderRadius: 8,
    alignItems: 'center',
    width: 180,
    height: 40,
    padding: 7,
    marginTop: 18,
    marginLeft: 120,
    borderColor: COLOR.SECONDARY_COLOR_P,
    borderWidth: 3,
  },
});

export default Login;
