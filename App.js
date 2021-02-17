import React from 'react';
import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native';
import {} from "react-native-web";
import ViewImage from "./Components/View/ViewImage";
import Welcome from "./Components/Welcome";
import FlexboxRead from "./Components/Chat";
import Calculator from "./Components/Calculator";
import Bank from "./Components/Bank";
import Category from "./Components/Bank/Category";
import FrontPage from "./Components/FoodApp/Main";
import CardComponent from "./Components/Welcome/Card";
import ListingDetail from "./Components/Welcome/ListingDetail";
import OpenCategory from "./Components/FoodApp/Second";
import Scroll from "./Components/HorizontalScroll";
import FlatListPractice from "./Components/FlatList";
import ButtonComponent from "./Components/Practice/Button";
import ModalComponent from "./Components/Practice/Modal";
import PressableComponent from "./Components/Practice/PressableComponent";
import ToDos from "./Components/ToDos";

export default function App() {
  return (
    <View style={styles.container}>
        {/*<Welcome></Welcome>*/}
        {/*<FlexboxRead/>*/}
        {/*<Calculator></Calculator>*/}
        {/*<Bank/>*/}
        {/*<Category/>*/}
        {/*<FrontPage/>*/}
        {/*<OpenCategory/>*/}
        {/*<CardComponent/>*/}
        {/*<ListingDetail/>*/}
        {/*<Scroll/>*/}
        {/*<FlatListPractice/>*/}

    {/*    --------------------------*/}
    {/*    <ButtonComponent/>*/}
    {/*<ModalComponent/>*/}
    {/*<PressableComponent/>*/}
    <ToDos/>



    </View>
  );
}

const styles = StyleSheet.create({
  container : {
      marginTop: Platform.OS ==="android" ? StatusBar.currentHeight :0,
     flex: 1,
  },
});
