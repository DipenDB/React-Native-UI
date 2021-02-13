import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AppText=(props)=>{
    return(
            <View styles={{paddingTop:30}}>
                <Text style={styles.welcomeText}>{props.title}</Text>
                <Text style={styles.title}>{props.subtitle}</Text>
            </View>
    )
}
const styles = StyleSheet.create({

    welcomeText:{
        fontSize:30,
        color:'#8389ad',


    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'#00183a',
    },
})
export default AppText;
