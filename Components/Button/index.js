
import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';
import colors from '../../config/config';



const AppButton=({title})=>{
    return(

        <TouchableOpacity style={styles.button} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:'100%',
        // position:'absolute',
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
})

export default AppButton;
