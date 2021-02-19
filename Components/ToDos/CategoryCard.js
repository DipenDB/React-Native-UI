
import React from "react";
import {StyleSheet,View,Text} from 'react-native';
import COLOR from './Colors';


const CategoryCard=({list})=>{

    const completedCount =list.todos.filter(todo=>todo.completed).length;
    const RemainingCount =list.todos.length-completedCount;


    return(
        <View style={{...styles.listContainer, backgroundColor:list.color}}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.count}>{RemainingCount}</Text>
                    <Text style={styles.subTitle}>Remaining</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subTitle}>Completed</Text>
                </View>

            </View>


        </View>
    )
}

const styles=StyleSheet.create({
    listContainer:{
        paddingHorizontal:16,
        paddingVertical:32,
        borderRadius:19,
        marginHorizontal:15,
        alignItems:'center',
        width:200,
        // height:400,
    },
    count:{
        fontSize: 48,
        color: COLOR.white,
    },
    subTitle:{
        fontSize:12,
        color:COLOR.white,
        fontWeight: 'bold',
    },

    listTitle:{
        color:COLOR.white,
        fontWeight:'bold',
        fontSize:20,
        marginBottom:18,
    },
})
export default CategoryCard;
