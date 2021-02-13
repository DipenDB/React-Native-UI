

import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from "react-native";

const ViewPractice =()=>{
    return(<SafeAreaView style={styles.view1}>
                <View style={styles.view2}>
                    <Text>Hello</Text>
                </View>
                <View style={styles.view3}>
                    <Text>Hello</Text>
                </View>


            </SafeAreaView>)
}

const styles = StyleSheet.create({
    view1:{
      backgroundColor:"blue",
        flex:1,
        flexDirection:'row',
        // flexDirection:'column',

        // flexDirection:'row-reverse'
        // flexDirection:'column-reverse'
        justifyContent:"center",
        // justifyContent:"space-around",
        // justifyContent:"space-evenly",
        // justifyContent:"space-between",

        alignItems:"center",
        // alignItems:"flex-end",
        // alignItems:"flex-start",
        // alignItems:"stretch",
        alignContent:"center",
        flexWrap:"nowrap",



    },
    view2:{
        backgroundColor:"red",
        width:400,
        // flexGrow:1,
        // flexShrink:1,
        height:100,
    },
    view3:{
        backgroundColor:"yellow",
        width:100,
        height:100,
    },


});

export default ViewPractice;
