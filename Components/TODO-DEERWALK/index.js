
import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Modal,
    TouchableOpacity, FlatList,
} from "react-native";
import Navigation from "./Navigation";
import Circle from "./Circle";
import ViewTodos from "./ViewTodo";
import ToDoForm from "./TodoForm";

const TODO=()=>{
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [todos,addTodos]=useState([

        {
            id:Math.random().toString(),
            title:'Cook Food',
            note:'Not Easy',
            isComplete:false,
        },
        {
            id:Math.random().toString(),
            title:'learn Rn',
            note:'Not Easy',
            isComplete:true,
        },
        {
            id:Math.random().toString(),
            title:'Ride bike',
            note:'Not Easy',
            isComplete:false,
        },
    ]);

    // const completedCount =todos.filter(todo=>todo.isComplete).length;
    // const RemainingCount =todos.length-completedCount;

    const handelSubmitOk=(data)=>{
        // console.log(data)
        addTodos([{...data,id:Math.random().toString() ,isComplete: false},...todos])
        setIsOpenModel(false)
    }

    const changeCheckBox=(todoId,value)=>{
        // console.log(todoId,value);
        const todosCopy =[...todos]
        // addTodos([{...data,id:Math.random().toString() ,isComplete: false},...todos])


        const updatedTodos =todosCopy.map(todo=>{
          if(todo.id==todoId){
              todo.isComplete=value
              return todo
          }
          return todo;

        })
        addTodos(updatedTodos)
    }


    return(
        <View style={styles.container}>
            <Navigation/>

            <View style={styles.todoMain}>
                <Circle icon='clipboard-list'/>
                <Text style={styles.text}>All Todos:<Text>{todos.length}</Text></Text>
                <Text style={{...styles.text,fontSize:15}}>Completed</Text>
                <Text style={{...styles.text,fontSize:25}}>{todos.filter(todo=>todo.isComplete).length}</Text>
                <Text style={{...styles.text,fontSize:15}}>Remaining</Text>
                <Text style={{...styles.text,fontSize:25}}>{todos.length-todos.filter(todo=>todo.isComplete).length}</Text>
            </View>



            <View style={styles.buttomContainer}>

                <FlatList
                    data={todos}
                    keyExtractor={(item)=>item.id.toString()}
                    // numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>(
                        <ViewTodos todo={item} onChange={changeCheckBox}/>
                    )}
                />




                {/*=------------------ADD BUTTON-------------------------------*/}

                <View style={styles.floatingButton}>
                    <TouchableOpacity
                        onPress={()=>setIsOpenModel(true)}

                    >
                        <Circle icon='plus'/>
                    </TouchableOpacity>
                </View>

                <Modal visible={isOpenModel}>
                    <ToDoForm cancel={()=>setIsOpenModel(false)} submit={handelSubmitOk}/>
                </Modal>







            </View>










        </View>
    )
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#5426ff',
        // padding:20,
    },
    buttomContainer:{
      backgroundColor: 'white',
        flex: 1,
        borderRadius:30,
        padding: 30,
        // position:'absolute',
    },


    todoMain:{
        padding: 40,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        marginTop: 20,
    },
    floatingButton:{
        position:'absolute',
        right:50,

        bottom: 60,

    },

})

export default TODO;
