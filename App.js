import 'react-native-gesture-handler';
import React from 'react';
import AuthProvider from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
import {Provider} from 'react-redux'
import {store} from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </Provider>
  );
};
export default App;
