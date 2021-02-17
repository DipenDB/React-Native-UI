

import React from "react";
import {StyleSheet,View,Text,FlatList} from 'react-native';
import {DATA} from './data';

const FlatListPractice =()=>{
    // console.log(DATA);
    return(
        // <Text>Hello</Text>
        <FlatList
            data={DATA}
            keyExtractor={(item)=>item.id}
            numColumns={2}
            renderItem={({item})=>(
                <Text> {item.title}</Text>
            )}

        />
    )
}

const style = StyleSheet.create({

})


export default FlatListPractice;
