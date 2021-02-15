import React from 'react'
import {View, StyleSheet, Text, SafeAreaView, Image, ImageBackground, Button} from "react-native";
import colors from '../../config/config'
import LoginRegister from "./LoginRegister";


const Welcome=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={require("../../assets/background.jpg")}>

                <View style={styles.logocontainer}>
                    <Image style={styles.logo} source={require("../../assets/logo-red.png")}></Image>
                    <Text style={styles.logoText}>Buy and Sell</Text>
                </View>




                <View style={styles.buttonsContainer}>
                    <LoginRegister name="Login" color={colors.primary}/>
                    <LoginRegister name="Register" color={colors.secondary}/>
                </View>





            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :  {
        flex: 1,
        backgroundColor:"white",
    },
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        padding:10,
    },

    buttonsContainer:{
        justifyContent: 'flex-end',
        width:'100%',
        position: 'absolute',
    },



    logo:{
       height:100,
       width:100,
    },
    logoText:{
        fontSize:20,
        fontWeight:'bold',
    },

    logocontainer:{
        position:"absolute",
        top:70,
        alignItems: 'center',
    },


})


export default Welcome;
