
import React from "react";
import {StyleSheet,View,Text} from 'react-native';

const Title=({title})=>{
    return(
        <View >
            <Text style={styles.title}>{title}</Text>
            <View style={styles.boldLine}/>
        </View>
    )
}
const styles=StyleSheet.create({

    title:{
        fontWeight:'bold',
        fontSize:23,
    },
    boldLine:{
        marginTop:6,
        width:100,
        height:5,
        backgroundColor:'black',
    },
})

export default Title;
