
import React from "react";
import {StyleSheet,View,Text,Image} from 'react-native';
import Color from '../Color/color';
import { Ionicons } from '@expo/vector-icons';



const OtherFood=(props)=>{
    return(
        // <Text>Hello</Text>
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={styles.image} source={require('../../../../assets/burger.jpg')}/>
                    <View style={{marginLeft:20,}}>
                        <Text style={styles.Heading}>{props.cousin}</Text>
                        <Text style={styles.subHeading}>{props.description}</Text>
                        <Text style={styles.subHeading}>{props.description}</Text>
                        <View style={{flexDirection:'row',marginTop:5,}}>
                            <Ionicons name={props.icon} size={24} color={Color.IconPinkColor} />
                            <Text style={styles.time}>{props.time} Min</Text>
                            <Ionicons style={{marginLeft:5}} name={props.icon2} size={20} color={Color.IconPinkColor} />
                            <Text style={styles.time}>{props.rate}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:15,}}>
                    <View style={styles.circle}><Text style={{fontSize:35, fontWeight:'bold', color:'white'}}>+</Text></View>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'black', paddingTop:5,}}>$ {props.price}</Text>
                </View>
            </View>
        </View>
    )}






const styles= StyleSheet.create({

    container:{
        height:100,
        width:'100%',
        // backgroundColor:Color.lightBlue,
        borderRadius:10,
        // padding:10,
        marginTop:15,
    },
    circle:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor: Color.IconPinkColor,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
       width: 90,
        height: 90,
        borderRadius: 30,
    },
    Heading:{
        marginTop:2,
        fontSize:20,
        fontWeight:'bold',
    },
    subHeading:{
        fontSize: 12,
        color:'#686666',

    },
    time:{
        marginTop: 2,
        color:Color.IconPinkColor,
    },



    })

export default OtherFood;
