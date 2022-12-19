import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import SplashScreen from '../screens/SplashScreen';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    setTimeout(()=> {setInitializing(false)},2000);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Routes;
