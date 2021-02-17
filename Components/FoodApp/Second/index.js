
import React from "react";
import {StyleSheet, View, Text, Image, ImageBackground,ScrollView} from 'react-native';
import Color from "../Main/Color/color";
import CategoryOfFood from "../Main/CategoryOfFood";
import { Octicons } from '@expo/vector-icons';
import OtherFood from "../Main/OthersFoodRow";


const OpenCategory=()=>{
    return(
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground style={styles.imageWallpaper} source={require('../../../assets/foodwallpaper.jpg')}/>
                <View style={styles.foodContainer}>

                    <View  style={styles.circle}>
                        <CategoryOfFood icon='settings-input-svideo'/>
                    </View>
                    <View style={styles.foods}>
                        <OtherFood source={require('../../../assets/burger.jpg')} cousin='Australia: Meat Pie' description='A hamburger is a sandwich.' time='35' price='25' icon='time-outline' icon2='star' rate='4.5'/>
                        <OtherFood source={require('../../../assets/burger.jpg')} cousin='Belgium: Moules ' description='A hamburger is a sandwich.' time='35' price='45' icon='time-outline' icon2='star' rate='4.5'/>
                        <OtherFood source={require('../../../assets/burger.jpg')} cousin='Brazil: Pudim' description='A hamburger is a sandwich.' time='35' price='35' icon='time-outline' icon2='star' rate='4.5'/>
                        <OtherFood source={require('../../../assets/burger.jpg')} cousin='Canada: Poutine' description='A hamburger is a sandwich.' time='35' price='22' icon='time-outline' icon2='star' rate='4.5'/>
                        <OtherFood source={require('../../../assets/burger.jpg')} cousin='Finland: Squeaky' description='A hamburger is a sandwich.' time='35' price='44.4' icon='time-outline' icon2='star' rate='4.5'/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    circle:{
        marginTop: -30,
        alignItems:'flex-end',

    },
    foods:{
        marginTop:-30,
    },

    foodContainer:{
        marginTop:-30,
        backgroundColor:Color.white,
        flex: 1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
    },
    imageWallpaper:{
        width:'100%',
        height:250,
    },
})

export default OpenCategory;
