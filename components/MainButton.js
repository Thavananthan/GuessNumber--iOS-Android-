import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import Colors from '../constants/colors';


const MainButton = props => {

    const buttonComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        buttonComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity  activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button,...props.style}}>
                 <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
     button:{
         backgroundColor: Colors.primary,
         paddingVertical:13,
         paddingHorizontal:30,
         borderRadius:25
     },
     buttonText:{ 
         color:'white',
         fontFamily:'open-sans',
         fontSize:18
     },
     buttonContainer:{
         borderRadius:25,
         overflow:'hidden'
     } 
})

export default MainButton;