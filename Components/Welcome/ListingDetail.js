
import React from "react";
import {StyleSheet,View,Text,Image} from 'react-native';

const ListingDetail =()=>{
    return(
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <Image style={styles.image} source={require('../../assets/jacket.jpg')}/>
                <View  style={styles.paddingOnText} >
                    <Text>red Jacket</Text>
                    <Text>$400</Text>
                </View>

                <View style={styles.postedBy}>
                    <Image style={styles.postedByImage} source={require('../../assets/person.jpg')}/>
                    <View>
                        <Text>My Name</Text>
                        <Text>5 listings</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    postedBy:{
        flexDirection:'row',
        padding:15,
    },
    postedByImage:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight:25,
    },
})

export default ListingDetail;
