import React, {useState, createContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const usersCollection = firestore().collection('UserData');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const userdata = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            console.log(userdata);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            const userDetails = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            await usersCollection.doc(userDetails.user.uid).set({email});
            console.log('Hello');
            console.log(userDetails.user.uid);
            console.log(userDetails);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
            console.log(userInfo);
          } catch (error) {
            console.log(error);
          }
        },
        forgotPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
            //callback();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
