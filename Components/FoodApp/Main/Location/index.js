
import React from 'react';
import {View,StyleSheet,Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Location =(props)=>{
    return(
        <View style={styles.locationOnRow}>
            <Ionicons name="location-sharp" size={24} color={props.Color} />
            <Text style={styles.locationText}>{props.location}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    locationOnRow:{
        flexDirection:'row',

    },
    locationText:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:6,
    },
})

export default Location;
