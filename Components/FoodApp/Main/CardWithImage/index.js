
import React from "react";
import {StyleSheet, View, Text,  ImageBackground} from "react-native";
import { Entypo } from '@expo/vector-icons';
import Color from '../Color/color';


const CardWithImage=(props)=>{
    return(
        <View style={{...styles.card,backgroundColor:props.backgroundColor}}>
            <ImageBackground elevation={5} style={styles.imageContainer} source={props.source}/>
                <View style={styles.textOnImage}>
                    <View >
                        <Text style={{...styles.text,fontSize:20,}}>{props.name1}</Text>
                        <Text style={{...styles.text,fontSize:20,marginTop:0,}}>{props.name2}</Text>
                    </View>
                    <View style={styles.row}>
                        <Entypo name="heart-outlined" size={24} color={Color.IconPinkColor} />
                        <Text style={{...styles.text,marginLeft:5,fontSize:15, marginTop:2,}}>{props.like}+</Text>
                    </View>
                </View>

        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        marginTop:20,
      width:170,
      height:180,
        borderRadius:20,
    },
    imageContainer:{
        width: 170,
        height: 170,
        overflow:'hidden',
        padding:10,
    },
    row:{
        flexDirection:'row',
        marginTop:90,
        marginLeft: 15,
    },
    text:{
        marginLeft:15,
        marginTop: 5,
        fontWeight:'bold',
        color:Color.white,
        // position:'absolute',
    },
    textOnImage:{
      position: 'absolute',
        alignItems:'flex-start',

    },


})
export default CardWithImage;
