
import React from "react";
import {Alert, Button} from 'react-native';

const ButtonComponent=()=>{


    const alertDine=()=>{
        Alert.alert('OK ?','Yes it is' );
    }

    return(
        <Button
            title='Button 1'
            onPress={alertDine}
            color="#841584"


        />
    )
}
export default ButtonComponent;
