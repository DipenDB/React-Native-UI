import React from 'react'
import {View,StyleSheet,Text,SafeAreaView,Image,ImageBackground} from "react-native";
// import {ImageBackground} from "react-native";
import colors from '../../config/config'
import AppButton from "../Button";


const Welcome=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background}
                source={require("../../assets/background.jpg")}
            >
                <View style={styles.logocontainer}>
                    <Image style={styles.logo} source={require("../../assets/logo-red.png")}></Image>
                    <Text style={styles.logoText}>Buy and Sell</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <AppButton title="Login"></AppButton>
                    {/*<View style={styles.loginButton}/>*/}
                    <View style={styles.registerButton}/>
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
    },
    // loginButton:{
    //     width:'100%',
    //     height:70,
    //     backgroundColor: colors.primary,
    // },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor: colors.secondary,
    },
    logo:{
       height:100,
       width:100,
    },
    logoText:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:13,
    },
    logocontainer:{
        position:"absolute",
        top:70,
        alignItems: 'center',
    },
    buttonsContainer:{
        marginLeft:5,
        marginRight:5,

    },

})


export default Welcome;
