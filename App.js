import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {} from "react-native-web";
import ViewImage from "./Components/View/ViewImage";
import Welcome from "./Components/Welcome";
import FlexboxRead from "./Components/Class";
import Calculator from "./Components/Calculator";
import Bank from "./Components/Bank";
import Category from "./Components/Bank/Category";

export default function App() {
  return (
    <View style={styles.container}>
        {/*<Welcome></Welcome>*/}
        {/*<FlexboxRead/>*/}
        {/*<Calculator></Calculator>*/}
        <Bank/>
        {/*<Category/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop: Platform.OS ==="android" ? StatusBar.currentHeight :0,    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
      flex:1,
  }
});
