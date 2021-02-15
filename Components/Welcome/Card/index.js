import React from "react";
import {StyleSheet,View,Text,Image} from 'react-native';

const CardComponent=()=>{
    return(
        <View style={styles.cardContainer}>
             <View style={styles.card}>
                <Image style={styles.image} source={require('../../../assets/jacket.jpg')}/>
                 <View  style={styles.paddingOnText} >
                     <Text>red Jacket</Text>
                 <Text>$400</Text>
                 </View>
             </View>
        </View>
    )
}

const styles=StyleSheet.create({
    cardContainer:{
        backgroundColor:'#f8f4f4',
        flex:1,
        padding:10,
        // paddingTop:100,

    },
    card:{
      borderRadius:15,
      backgroundColor: '#fff',
        marginBottom:15,
        overflow:'hidden',
    },
    image:{
       width:'100%',
        height:200,

    },
    paddingOnText:{
      padding:20,
    },
})

export default CardComponent;
