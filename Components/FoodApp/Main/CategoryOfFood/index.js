

import React from "react";
import {StyleSheet,View,Text} from 'react-native';
import Color from '../Color/color';
import { MaterialIcons   } from '@expo/vector-icons';


const CategoryOfFood=({icon,name})=>{
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center',justifyContent:'center',}}>
                <View elevation={5} style={styles.circle}>
                    <MaterialIcons  name={icon} size={40} color={Color.IconPinkColor} />
                </View>
                <Text  style={styles.foodCategoryName}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:40,
    },
    foodCategoryName:{
        marginTop: 15,
        fontWeight:'bold',
    },
    circle:{
        width:70,
        height:70,
        backgroundColor:Color.white,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',

    },
})

export default CategoryOfFood;
