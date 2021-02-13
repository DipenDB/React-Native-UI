
import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";

const TransactionRow=(props)=>{
    return(

        <View style={styles.servicesContainer}>
            <View style={styles.car}>
                <View style={styles.ServicesCircle}>
                    <FontAwesome5 name="{props.icon}" size={30} color="white" />
                </View>
                <View style={styles.Services}>
                    <Text style={styles.ServicesTitle}>Car Purchase</Text>
                    <Text style={styles.ServicesSubTitle}>Auto Loan</Text>
                </View>
            </View>
            <View style={styles.ServiceAmountContainer}>
                <Text style={styles.ServiceAmount}>$450</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    car:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        // paddingLeft: 5,
    },
    Services:{
        // paddingTop:2,
        paddingLeft: 10,
        // justifyContent:'flex-start',
        // alignItems: 'center',
    },
    ServiceAmountContainer:{
        paddingTop:15,
    },
    ServiceAmount:{
        fontWeight:'bold',
    },
    servicesContainer:{
        // flex:1,
        // backgroundColor: 'red',
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',

        // paddingTop:20,
        marginTop:20,

    },
    ServicesCircle:{
        backgroundColor:'green',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
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

})

export default TransactionRow;
