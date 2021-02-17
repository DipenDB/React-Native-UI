
import React from 'react';
import {View,StyleSheet} from "react-native";
import {Text} from "react-native";

const FlexboxRead=()=>{
    return(
    <View style={styles.container}>
        <View style={styles.view1}><Text style={styles.textHeading}>Conversation..</Text></View>
        <View style={styles.view2}>
            <Text style={styles.conversation}>Message 1..</Text>
            <Text style={styles.conversation}>Message 2..</Text>
            <Text style={styles.conversation}>Message 3..</Text>






        </View>
        <View style={styles.view3}>
            <View style={styles.footerContainer}>
                <View  >
                    <Text style={{color:'white'}}>TL</Text>
                </View>
                <View >
                    <Text style={{color:'white'}}>TR</Text>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <View  >
                    <Text style={{color:'white'}}>BL</Text>
                </View>
                <View  >
                    <Text style={{color:'white'}}>BR</Text>
                </View>
            </View>
        </View>
    </View>
    )
}
 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:"white",
     },
     view1: {
         flex: 0.5,
         backgroundColor: "red",
         alignItems: 'center',
         justifyContent: 'center',

     },
     textHeading:{
         fontWeight: 'bold',
         color: 'white',
         fontSize:20,
     },

     view2:{
         padding:12,
         flex:7,
         backgroundColor: "green",
         alignItems: 'flex-end',
         justifyContent:'flex-end',
         // alignItems: 'flex-end',
         // justifyContent: 'flex-end',

     },
     conversation:{
         fontWeight: 'bold',
         color: 'white',
         fontSize:13,
     },
     view3:{
         flex:1,
         backgroundColor: "black",
         // flexWrap: wrap,
         justifyContent:'space-between',
     },
     footerContainer:{
         flexDirection:'row',
         justifyContent:'space-between'
     },


 })

export default FlexboxRead;
