import React from "react";
import {StyleSheet,Dimensions,View,Text,Image,ScrollView} from 'react-native';
import Location from "./Location";
import {ImageBackground} from "react-native";
import Color from './Color/color'
import {FontAwesome5} from "@expo/vector-icons";
import color from "./Color/color";
import CategoryOfFood from "./CategoryOfFood";
import Title from "./Title";
import CardWithImage from "./CardWithImage";
import OtherFood from "./OthersFoodRow";
import Footer from "./Footer";



const FrontPage=()=>{

    return(

        <View style={styles.container}>
            {/*<ImageBackground style={styles.backgroundImage} source={require('../../../assets/background.jpg')}>*/}
        <ScrollView>
                {/*Location*/}
                <Location Color={Color.IconPinkColor} location='2142,Doggle NY, USA'/>

                {/*Platform Specific Search Bar*/}
                <View  style={{...styles.search, backgroundColor:Color.lightDark}}>
                    <View >
                        <View style={styles.searchItems}>
                            <FontAwesome5 name="search" size={24} color="#001435" />
                            <Text style={styles.searchText}>Search</Text>
                        </View>
                    </View>
                </View>

            {/*Category of Food*/}
            <View style={styles.CategoryOfFood}>
                <CategoryOfFood icon='emoji-food-beverage' name='Asian Food'/>
                <CategoryOfFood icon='fastfood' name='American'/>
                <CategoryOfFood icon='food-bank' name='Burger'/>
                <CategoryOfFood icon='no-food' name='Pizza'/>
            </View>

            {/*Recomended Deals*/}
            <View style={styles.recomendedDeals}>
                <Title title='Recommended Deals'/>
            </View>

            {/*Card*/}
            <View style={styles.CategoryOfFood}>
                <CardWithImage backgroundColor={Color.yellow} source={require('../../../assets/food1.png')} name1='Burger' name2='Sandwich ' like='98'/>
                <CardWithImage backgroundColor={Color.lightBlue} source={require('../../../assets/food2.png' )} name1='Grilled ' name2='Hot Dog' like='94'/>

            </View>

            {/*OtherFood*/}
            <View style={styles.recomendedDeals}>
                <Title title='Other Food'/>
            </View>

            {/*Other food Rows*/}
            <View >
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='35' price='25' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
                <OtherFood source={require('../../../assets/burger.jpg')} cousin='Chisnes Cousine' description='A hamburger is a sandwich.' time='40' price='35' icon='time-outline' />
            </View>
        </ScrollView>




            {/*Sticky bottom */}

            <Footer/>











            {/*</ImageBackground>*/}
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
        padding: 20,
    },
    backgroundImage:{
        flex: 1,
        width: undefined,
        height: undefined,
        padding:15,
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        // justifyContent: 'center',
        // alignItems: 'center',
        // resizeMode: 'cover',
    },


    CategoryOfFood:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    recomendedDeals:{
        marginTop: 30,
    },
    search:{
        marginTop: 30,
        width:'100%',
        height:50,
        // backgroundColor:'#eff1fe',
        borderRadius:20,
        paddingLeft:10,

        alignItems:'flex-start',
        justifyContent: 'center',
    },

    searchItems:{
        flexDirection: 'row',
    },

    searchText:{
        fontSize:20,
        paddingLeft: 10,
    },



})

export default FrontPage;
