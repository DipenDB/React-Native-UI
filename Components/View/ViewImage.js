
import React from 'react';
import {Image, SafeAreaView, StyleSheet} from "react-native";
import {View} from "react-native";
import colors from '../../config/config';


const ViewImage =()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>



            <Image style={styles.image}
                   resizeMode="contain"
                   source={require("../../assets/chair.jpg")}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f9ff',
    },

    closeIcon:{
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position:'absolute',
        left:30,
      top:40,

    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position:'absolute',
        right:30,
        top:40,
    },
    image:{
      width:'100%',
      height:'100%',
    },
})

export default ViewImage;
