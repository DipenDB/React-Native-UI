
import React, {useState} from "react";
import {StyleSheet, View, Text, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const ModalComponent=()=>{

    const [modelOpen, setModelOpen]= useState(false);


    return(
        <View style={styles.container}>
            <Text>Hello This is Container Text</Text>
            <AntDesign name="caretright" onPress={()=>setModelOpen(true)} size={24} color="green" />

            <Modal  animationType='fade' hardwareAccelerated visible={modelOpen} transparent>
                <View style={styles.modelContainer}>
                    <Text>Modal Text</Text>
                    <AntDesign name="closesquare" onPress={()=>setModelOpen(false)} size={24} color="red" />
                </View>
            </Modal>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#75cfff'
    },
    modelContainer:{
      marginTop:70,
        marginLeft:40,
        width:160,
      height:160,
      backgroundColor: '#ff879f',
        alignItems:'center',
        justifyContent:'center',
    },
})

export default ModalComponent;
