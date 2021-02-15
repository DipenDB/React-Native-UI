
import React from "react";
import {StyleSheet,View,Text} from 'react-native';
import { Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';
import Color from '../../Main/Color/color';


const Footer =()=>{
    return(
        <View style={styles.barLine}>
            <View style={{flexDirection:'row', justifyContent:"space-between", margin:10,}}>
                <View style={styles.center}>
                    <Ionicons name="home-sharp" size={30} color={Color.IconPinkColor} />
                    <Text style={styles.textStyle}>Home</Text>
                </View>
                <View style={styles.center}>
                    <Ionicons name="search" size={30} color={Color.IconPinkColor} />
                    <Text style={styles.textStyle}>Search</Text>
                </View>
                <View style={styles.center}>
                    <Ionicons name="cart-sharp" size={30} color={Color.IconPinkColor} />
                    <Text style={styles.textStyle}>Cart</Text>
                </View>
                <View style={styles.center}>
                    <MaterialCommunityIcons name="truck-delivery" size={30} color={Color.IconPinkColor} />
                    <Text style={styles.textStyle}>Delivery</Text>
                </View>
                <View style={styles.center}>
                    <MaterialCommunityIcons name="face-profile" size={30} color={Color.IconPinkColor} />
                    <Text style={styles.textStyle}>Profile</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    barLine:{

        backgroundColor:Color.lightDark,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        // borderColor:Color.IconPinkColor,
    },
    textStyle:{
        fontSize:15,
        fontWeight:'bold',
        color:Color.IconPinkColor,
    },
    center:{
      alignItems:'center',
      justifyContent:'center',
    },
})
export default Footer;
