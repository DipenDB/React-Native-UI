
import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from "react-native";
import { Ionicons,MaterialIcons,FontAwesome5,FontAwesome    } from '@expo/vector-icons';
import TransactionRow from "./TransactionsRow";
import {AMOUNT, cardData, carTransaction} from "./data";


const Bank = ()=>{
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.aboveContainer}>
                <View style={styles.notificationIcons}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                    <MaterialIcons name="notifications" size={24} color="white" />
                </View>

                <FlatList
                    data={AMOUNT}
                    keyExtractor={(item)=>item.name}
                    numColumns={2}
                    renderItem={({item})=>(
                    <View style={styles.balance}>
                        <Text style={styles.balanceText1}>{item.name}</Text>
                        <Text style={styles.balanceText2}>{item.amount}</Text>
                    </View>
                    )}
                />




                        <View style={styles.boxContainer}>
                            <FlatList

                                data={cardData}
                                keyExtractor={(item, index) => item.id }

                                numColumns={2}
                                columnWrapperStyle={styles.row}

                                renderItem={({item})=>(
                                    <View style={styles.box}>
                                        <FontAwesome5 name={item.icon} size={60} color="#f2a812" />
                                        <Text style={styles.boxText2}>{item.amount}</Text>
                                        <Text style={styles.boxText3}>{item.type}</Text>
                                    </View>
                                )}
                            />
                        </View>




            </View>






            <View style={styles.bottomContainer}>

                <View style={styles.notificationIcons}>
                        <Text style={{...styles.boxText2, fontWeight:'bold', fontSize:25,}} >Transaction</Text>
                        <View style={styles.SeeAllbutton}><Text style={styles.seeAllText}>See All</Text></View>
                </View>

                <FlatList
                    data={carTransaction}
                    keyExtractor={(item, index) => item.id }
                    renderItem={({item})=>(
                        <TransactionRow icon={item.icon} name={item.name} type={item.type} price={item.price}/>
                        )}
                />

            </View>
        </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2f26d9',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,

    },
    aboveContainer:{
        flex:0.5,
        padding:30,

    },
    balance:{
        paddingTop:40,

    },
    balanceText1:{
        fontSize:25,
        color:'#d7dadb',
    },
    balanceText2:{
        fontSize:40,
        color:'#ffffff',
        fontWeight:'bold',
    },
    bottomContainer:{
        flex:0.5,
        backgroundColor: '#fcffff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:30,
    },
    boxContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
    box:{

        width:160,
        height:160,
        backgroundColor:'#c4f2ff',
        borderRadius:10,
        paddingLeft:20,
        alignItems:'flex-start',
        justifyContent:'center',
        margin:5,

    },
    boxText2:{
      fontSize:30,
      color:'#021e50',
    },
    boxText3:{
        fontSize:15,
        color:'#021e50',
    },
    car:{
      flexDirection:'row',
    },
    row:{
        flex: 1,
        justifyContent: 'space-evenly',
    },
    Services:{
        paddingTop:10,
        paddingLeft: 10,
        // justifyContent:'flex-start',
        // alignItems: 'center',
    },

    notificationIcons:{
      flexDirection:'row',
        justifyContent:'space-between',
    },
    SeeAllbutton:{
        backgroundColor:'#cdd4d1',
        width:70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,

    },
    seeAllText:{
        color:'#021e50',
        fontWeight:'bold',
        fontSize:15,
    },
    servicesContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,

    },
    ServicesTitle:{
        fontSize:20,
        color:'#021e50',
        fontWeight: 'bold',
    },
    ServicesSubTitle:{
        fontSize:15,
        color:'#021e50',
        // fontWeight: 'bold',
    },
    ServiceAmountContainer:{
        paddingTop:30,
    },
    ServiceAmount:{
        fontWeight:'bold',
    },
    ServicesCircle:{
        backgroundColor:'green',
        borderRadius: 50,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent:'center',
    }



})

export default Bank;
