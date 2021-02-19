
import React from "react";
import {StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import COLOR from './Colors';
import {tempData} from "./TempData";

class AddListModel extends React.Component{

    backgroundColors=[
        '#f54242','#63f542','#0099ff','#1500ff','#a200ff'
    ];

    state={
        name:'',
        todos:'',
        color: this.backgroundColors[0],
    };

    createTdo=()=>{
        const {name,color}=this.state
        tempData.push(
            name,
            color,

        )
    }



    renderColor(){
        return this.backgroundColors.map(color=>{
            return(
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect,{backgroundColor:color}]}
                    onPress={()=>this.setState({color})}
                />
            )
        })
    }



    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <TouchableOpacity style={styles.touchable} onPress={this.props.closeModal}>
                    <AntDesign name='close' size={24} color={COLOR.black}/>
                </TouchableOpacity>


                <View style={styles.textField}>
                    <Text style={styles.title}>Create Todo List</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="List Name"
                        onChangeText={text => this.setState({name:text})}
                    />


                    {/*---------------Color Palate-------------*/}
                    <View style={styles.ColorPalate}>
                        {this.renderColor()}
                    </View>



                        <TouchableOpacity style={[styles.create,{backgroundColor:this.state.color}]}>
                            <Text style={{color:COLOR.white,fontWeight:'bold',fontSize:20,}}>Create</Text>
                        </TouchableOpacity>
                </View>






            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    ColorPalate:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    colorSelect:{
        width:30,
        height:30,
        borderRadius:4,
    },
    create:{
        marginTop:24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'green'
    },
    input:{
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:10,
        height:50,
        marginTop:8,
        paddingHorizontal:16,
        fontSize: 18,
    },

    textField:{
        alignSelf:'stretch',
        marginHorizontal:32,
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:COLOR.black,
        alignSelf:'center',
        marginBottom:16,
    },
    touchable:{
        position:'absolute',
        top:30,
        right:33,
    },
})
export default AddListModel;
