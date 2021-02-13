

import React from 'react';
import {Text,View,StyleSheet} from "react-native";
import {Ionicons, MaterialIcons,FontAwesome5} from "@expo/vector-icons";
import Notification from "./Notification";
import AppText from "./AppText";
import Box from "./Box";
import CategoryBox from "./CategoryBox";

const Category=()=>{
    return(
        <View style={styles.container}>
            {/*<View style={styles.notificationIcons}>*/}
            {/*    <Ionicons name="arrow-back-outline" size={24} color="black" />*/}
            {/*    <MaterialIcons name="notifications" size={24} color="black" />*/}
            {/*</View>*/}

            <Notification/>


            <View style={styles.paddingTop}>
                <AppText title="Welcome Back" subtitle="Creative Mints"/>
            </View>



            <View style={styles.search}>
                <View style={styles.searchItems}>
                    <FontAwesome5 name="search" size={24} color="#001435" />
                    <Text style={styles.searchText}>Search</Text>
                </View>

            </View>



            <View style={styles.boxContainer}>
                <View style={styles.boxes}>
                    <Box backgroundColor="#01cd88" icon='dollar-sign' title="Transaction" subtitle="4 Items"/>
                    <Box backgroundColor="#ff5949" icon='piggy-bank' title="Transaction" subtitle="4 Items"/>
                </View>
                <View style={styles.boxes}>
                    <Box backgroundColor="#ecac48" icon='star' title="Transaction" subtitle="4 Items"/>
                    <Box backgroundColor="#2f26d9" icon='credit-card' title="Transaction" subtitle="4 Items"/>
                </View>

            </View>


            <View >

                <View>
                    <Text style={{...styles.ServicesText, fontSize:25,fontWeight:'bold',fontcolor:'#001b46', color:'black',marginBottom:10,}}>Choose a Categories.</Text>
                </View>


                <View style={styles.categoryBoxes}>
                    <View style={styles.categoryBox}>
                        <CategoryBox title="Branch" subtitle={"Services"} backgroundColor="#01cd88" icon='bank'/>
                    </View>
                    <View style={styles.categoryBox}>
                        <CategoryBox title="Make a" subtitle={"Payment"} backgroundColor="#3c66fa" icon='credit-card-outline'/>
                    </View>
                </View>
            </View>






        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:30,
    },
    boxes:{
      flexDirection:'row',
        justifyContent:'space-between',  //
    },
    boxContainer:{
        marginTop: 30,
        width: '100%',
        height: 350,
        // backgroundColor: 'brown',
    },
    categoryBox:{
        backgroundColor:'#e3e3e3',

        height:60,
        width:155,
        borderRadius:10

    },
    categoryBoxes:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    paddingTop:{
        paddingTop:40,
    },

    search:{
        marginTop: 30,
        width:'100%',
        height:50,
        backgroundColor:'#eff1fe',
        borderRadius:20,
        paddingLeft:10,

        alignItems:'flex-start',
        justifyContent: 'center',


    },

    searchItems:{
        flexDirection: 'row',

    },


    searchText:{
        fontSize:20,
        paddingLeft: 10,

    },

    // title:{
    //     fontSize:40,
    //     fontWeight:'bold',
    //     color:'#00183a',
    // },

})


export default Category;
