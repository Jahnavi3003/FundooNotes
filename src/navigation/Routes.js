import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Routes;
