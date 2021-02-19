
import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput, Picker, Button, Alert, Modal, FlatList} from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLOR from './Color';
import ViewTodos from "./ViewTodo";
import {CATEGORIES} from "./data";
import {DATA} from "../FlatList/data";


const ToDoForm=(props)=>{
    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [selectedValue, setSelectedValue] = useState("java");


    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [category, setcategory] = useState("");



    return(
        <View style={styles.form}>

            <View style={{flexDirection:"row",justifyContent:'flex-end',marginRight:20,marginTop:20}}>
                <Entypo onPress={props.cancel} name="cross" size={24} color="red" />
            </View>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:30,}}>New tasks</Text>

            <View style={styles.formBody}>

                <View style={styles.formGroup}>
                    <Text style={{color:'green',fontSize:20,}}>What are you planning ?</Text>
                    <TextInput
                        style={{...styles.input }}
                        maxLength={20}
                        onChangeText={text => setTitle(text)}
                        value={title}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={{color:'green',fontSize:20,}}>Add Notes</Text>
                    <TextInput
                        style={{...styles.input }}
                        maxLength={50}
                        multiline
                        numberOfLines={4}
                        onChangeText={text => setNote(text)}
                        value={note}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={{color:'green',fontSize:20,}}>Category</Text>

                    <Picker
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => setcategory(itemValue)}
                        selectedValue={category}
                    >
                        <Picker.Item color='#aaa' label="Select Category" value={null} />

                        {
                            CATEGORIES.map((category,index)=>{
                                return(<Picker.Item key={category.id}  label={category.title} value={category.title} />)
                            })
                        }

                    </Picker>
                </View>

                <Button
                    title="Submit"
                    onPress={()=>props.submit({title,note,category})}
                />
            </View>



        </View>


    )
}

const styles = StyleSheet.create({
    form:{
        padding:30,
    },
    formBody:{
        paddingVertical:30,
    },
    formGroup:{
        marginBottom:20,
    },
    input:{
        borderBottomColor:'black',
        borderBottomWidth:2,
    },

})
export default ToDoForm;
