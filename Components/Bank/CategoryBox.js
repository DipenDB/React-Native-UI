
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons";


const CategoryBox=(props)=>{
    return(
        <View style={styles.arrangeOnRow}>
            <View style={{...styles.ServicesCircle, width:40, height:40, backgroundColor:props.backgroundColor}}>
                {/*<FontAwesome5 name="car" size={25} color="white" />*/}
                <MaterialCommunityIcons name={props.icon} size={24} color="white" />
            </View>
            <View >
                <Text style={{...styles.ServicesText,paddingLeft:15,}}>{props.title}</Text>
                <Text style={{...styles.ServicesText,paddingLeft:15,}}>{props.subtitle}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    arrangeOnRow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
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
        color:'#001e49',
        fontWeight: 'bold',

    },
})

export default CategoryBox;
