
import React, {useState} from "react";
import {StyleSheet, View, Text, CheckBox, FlatList,} from 'react-native';
import {DATA} from "../FlatList/data";

const ViewTodos=({todo,onChange})=>{
    // const [isSelected, setSelection] = useState(false);

    return(
                    <View style={styles.container}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20,}}>
                            <View>
                                <Text style={[styles.title,{textDecorationLine:todo.isComplete ? 'line-through':null}]}>{todo.title}</Text>
                                <Text style={{textDecorationLine:todo.isComplete ? 'line-through':null}}>{todo.note}</Text>
                            </View>
                            <CheckBox
                                value={todo.isComplete}
                                onValueChange={(value)=>onChange(todo.id,value)}
                                // onValueChange={()=>console.log(todo.id)}
                            />
                        </View>
                    </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    subTitle:{
        // fontWeight:'bold',
        fontSize:15,
    },

})


export default ViewTodos;
