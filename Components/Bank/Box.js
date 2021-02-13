
import React from "react";
import {Text, View,StyleSheet} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";


const Box=(props)=>{
    return(
        <View style={{...styles.box,backgroundColor:props.backgroundColor}}>
            <View style={styles.ServicesCircle}>
                <FontAwesome5 name={props.icon} size={30} color={props.backgroundColor} />
            </View>

            <View>
                <Text style={{...styles.ServicesText, paddingTop:10,}}>{props.title}</Text>
                <Text style={{...styles.ServicesText, fontWeight: 'regular'}}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    box:{
        width:160,
        height:160,
        backgroundColor:'brown',
        margin:3,
        borderRadius: 10,
        alignItems:'flex-start',
        justifyContent:'center',
        padding: 15,
    },
    ServicesCircle:{
        backgroundColor:'white',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
    },
    ServicesText:{
        // marginTop:5,
        // paddingTop:15,
        color:'white',
        fontWeight: 'bold',

    },


})


export default Box;
