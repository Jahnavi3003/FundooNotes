import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'
import notes from '../Assets/images/fun.png'

const SplashScreen = () => {
  return (
    <View style={styles.view}>
        <View style={styles.imageview}>
            
        <Image source={notes} style={styles.image} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width:100,
        height:100,
    },
    

    imageview: {
        justifyContent:'center',
        alignItems:'center'
    }
})
export default SplashScreen