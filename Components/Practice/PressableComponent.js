
import React, {useState} from "react";
import {StyleSheet,View,Text,Pressable} from 'react-native';

const PressableComponent=()=>{
    const [buttonPress,setButtonPress]= useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{buttonPress}</Text>

            <Pressable  style={styles.button} onPress={()=>setButtonPress(buttonPress+1)}>
                <Text style={{...styles.textStyle,fontSize:15,color:'white'}}>Press Me</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textStyle:{
        fontSize:30,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:'blue',
        borderRadius:5,
        padding:5,
        width:150,
        height:40,
        alignItems:'center',
        justifyContent:'center',
    },
})

export default PressableComponent;
