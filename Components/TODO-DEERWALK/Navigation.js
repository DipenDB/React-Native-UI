
import React from "react";
import {StyleSheet,View,Text} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';



const Navigation=()=>{
    return(
        <View style={styles.container}>
            <AntDesign name="caretleft" size={15} color="white" />
            <Entypo name="dots-three-vertical" size={15} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        paddingHorizontal:20,
      flexDirection:'row',
      justifyContent:'space-between',
    },
})
export default Navigation;
