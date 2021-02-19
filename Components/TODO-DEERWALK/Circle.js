
import React, {useState} from "react";
import {StyleSheet,View,Text} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLOR from './Color';



const Circle=({icon})=>{

    return(
        <View elevation={5} style={styles.container}>
            <FontAwesome5 name={icon} size={30} color={COLOR.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'white',
        // alignSelf:'center',

        alignItems:'center',
        justifyContent:'center',
    },
})
export default Circle;
