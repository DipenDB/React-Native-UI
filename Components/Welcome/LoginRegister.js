
import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from "../../config/config";

const LoginRegister=({color,name})=>{
    return(
        <TouchableOpacity style={{...styles.Button,backgroundColor: color}}>
            <Text style={styles.ButtomText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        width:'100%',
        height:50,
        backgroundColor: colors.secondary,
        borderRadius:20,
        alignItems:'center',
        marginBottom:5,
    },
    ButtomText:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:13,
        color:'white',
    },
})

export default LoginRegister;
