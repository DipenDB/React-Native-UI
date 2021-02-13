
import React from 'react';

import {View,Text,StyleSheet} from "react-native";


const Calculator=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.digital}>

                    <Text style={styles.digitalText}>0.0</Text>
                

            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.whole}>
                    <View>
                        <View style={styles.button123}>
                            <View style={styles.buttons}><Text style={styles.buttonText}>1</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>2</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>3</Text></View>
                        </View>

                        <View style={styles.button456}>
                            <View style={styles.buttons}><Text style={styles.buttonText}>4</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>5</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>6</Text></View>
                        </View>
                        <View style={styles.button789}>
                            <View style={styles.buttons}><Text style={styles.buttonText}>7</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>8</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>9</Text></View>
                        </View>
                        <View style={styles.buttonLast}>
                            <View style={styles.joinButtons}><Text style={styles.buttonText}>0</Text></View>
                            <View style={styles.buttons}><Text style={styles.buttonText}>.</Text></View>
                        </View>
                    </View>

                    <View style={styles.backspace}>
                        <View style={styles.joinButtonsRight}><Text style={styles.buttonText}>~</Text></View>
                        <View style={styles.joinButtonsRight}><Text style={styles.buttonText}>=</Text></View>
                    </View>
                </View>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    digital:{
        marginTop:20,
        flex:0.2,
        width:'100%',
        height:200,
        backgroundColor:'brown',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        padding:5,
    },

    digitalText:{
        fontSize: 40,
        color:'white',

    },
    buttonsContainer:{
        flex:0.6,

        backgroundColor: 'pink',
    },
    buttons:{
        width: 90,
        height: 90,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        // margin:3,
        marginRight:5,

    },
    joinButtons:{
        width:180,
        height:90,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        // margin:3,
        marginRight:5,
    },
    joinButtonsRight:{
        width:90,
        height:190,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        // margin:3,
        marginRight:5,
        marginBottom:13,

    },

    buttonText:{
        fontSize:40,
        fontWeight:'bold',
    },
    button123:{
        marginTop: 10,
        flexDirection:'row',
        margin:5,
    },
    button456:{
        marginTop: 8,
        flexDirection:'row',
        margin:5,
    },
    button789:{
        marginTop: 8,
        flexDirection:'row',
        margin:5,
    },
    buttonLast:{
        marginTop: 8,
        flexDirection:'row',
        margin:5,
    },
    backspace:{
        alignItems:'flex-end',
        marginTop:13,
    },
    whole:{
        flexDirection:'row',
    }
})


export default Calculator;
