import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Gmail = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.view}>
      <SafeAreaView>
        <Text style={styles.text}> Login using Gmail </Text>
      </SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text1}> Login </Text>
      </TouchableOpacity>
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
    margin: 10,
    marginLeft: 40,
    width: 330,
    backgroundColor: 'lavender',
    alignContent: 'center',
    borderColor: '#c71585',
    borderWidth: 1,
    padding: 10,
  },
  text1: {fontSize: 17, fontWeight: 'bold', color: 'white'},
  button: {
    backgroundColor: '#c71585',
    borderRadius: 8,
    alignItems: 'center',
    width: 100,
    height: 40,
    padding: 8,
    marginTop: 10,
    marginLeft: 160,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 75,
    marginTop: 5,
    margin: 15,
    color: 'lavender',
    justifyContent: 'center',
  },
});
export default Gmail;
