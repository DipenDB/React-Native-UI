
import React from "react";
import {StyleSheet, View, Text, ScrollView,ImageBackground} from 'react-native';
import {FOODS} from "./data";

const Scroll=()=>{
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.container}>
            {FOODS.map(food=>{
                return(
                    <ImageBackground key={food.title} style={styles.box} source={{uri:food.image}}>
                        <Text>{food.title}</Text>
                    </ImageBackground>
                )

            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    box:{
        width:160,
        height:160,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',

    }


})


export default Scroll;
