import React, {useContext, useEffect, useState} from 'react';
import { SafeAreaView,View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import LabelTopBar from '../components/LabelTopBar'
import BottomBar from '../components/BottomBar'

const LabelInDrawer = ({navigation}) => {
  //  const labelData= (route.params?.labelData|| []);
    return(
        <SafeAreaView style={styles.view}>   
         <View style={{marginBottom: 15}}>
         <LabelTopBar
           menuPress={() => {
            navigation.openDrawer();
          }}
          />
         </View>
        
        <View style={styles.bottom}>
         <BottomBar navigation={navigation} />
        </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#302f2c',
    },
    bottom: {
      
      marginTop:600
    }
  });

export default LabelInDrawer;