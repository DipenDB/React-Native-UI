
import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Modal} from 'react-native';
import COLOR from './Colors';
import {AntDesign} from "@expo/vector-icons";
import {tempData} from './TempData';
import CategoryCard from "./CategoryCard";
import AddListModel from "./AddListModel";

class ToDos extends React.Component{

    // const [modelOpen, setModelOpen]= useState(false);
    state={
      addToVisible:true,
    };

    toggleAddToVisible(){
        this.setState({addToVisible:!this.state.addToVisible});
    }

render() {

    return(

            <View style={styles.container}>

                <Modal animationType='slide'
                visible={this.state.addToVisible}
                onRequestClose={() => this.toggleAddToVisible()}
                >

                    <AddListModel closeModal={()=>this.toggleAddToVisible()}/>


                 </Modal>






            {/*-----------TODO Title------------*/}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.divider}/>
                    <Text style={styles.title}>
                    ToDo
                        <Text style={{...styles.title, fontWeight: 'bold', color: COLOR.blue}}>List</Text>
                    </Text>
                <View style={styles.divider}/>
            </View>


            {/* --------------ADD BUTTON------------------*/}
            <View style={{marginVertical: 48, alignItems: 'center'}}>
                <TouchableOpacity style={styles.addList} onPress={()=>this.toggleAddToVisible()}>
                    <AntDesign name='plus' size={20}  color={COLOR.blue}/>
                </TouchableOpacity>

                <Text style={styles.add}>Add List</Text>
            </View>

            {/*    -------------LIST CATEGORY-------------------------*/}
            <View style={{height: 270}}>
                <FlatList
                data={tempData}
                keyExtractor={(item) => item.name}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <CategoryCard list={item}/>
                )}
                />
            </View>


            </View>
)
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.white,
        alignItems:'center',
        justifyContent:'center',
    },
    add:{
        fontSize: 15,
        color: COLOR.blue,
        fontWeight: 'bold',
        marginTop:5,
    },
    addList:{
        borderWidth:3,
        borderColor:COLOR.blue,
        borderRadius:10,
        padding:16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider:{
        backgroundColor: COLOR.blue,
        height:1,
        flex: 1,
    },
    title:{
        fontSize:38,
        fontWeight:'800',
        color:COLOR.black,
        paddingHorizontal:64,
    },

})

export default ToDos;
