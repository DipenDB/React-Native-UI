
import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Ionicons, MaterialIcons,Entypo} from "@expo/vector-icons";

const Notification=()=>{
    return(
        <View style={styles.notificationIcons}>
            <View style={styles.circle}>
                {/*<Ionicons name="arrow-back-outline" size={24} color='#0546ac' />*/}
                <Entypo name="menu" size={24} color="#0546ac" />
            </View>

                <MaterialIcons name="notifications" size={24} color="black" />

        </View>

    )
}

const styles = StyleSheet.create({
    notificationIcons:{

        flexDirection:'row',
            justifyContent:'space-between',
    },
    circle:{
      width:40,
      height:40,
      borderRadius:50,
      backgroundColor:'#eff1fe',
        alignItems:'center',
        justifyContent: 'center',
    },
})
export default Notification;
