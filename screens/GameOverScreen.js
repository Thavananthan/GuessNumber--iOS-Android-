import React from 'react';
import {View, StyleSheet, Text,Image, Dimensions,ScrollView} from 'react-native';

import BodyText  from '../components/BodyText';
import TitleText  from '../components/TitleText';
import Colors from '../constants/colors'; 
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return(
        <ScrollView>
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/success.png')} 
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
              <View style={styles.resultContainer}>
              <BodyText style={styles.textResult}>
                 Your phone needed <Text>{props.roundsNumber} </Text>rounds to guess the number 
                 <Text>{props.userNumber}</Text>.
              </BodyText>
              </View>
              <MainButton onPress={props.onRestart}> NEW GAME</MainButton>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    imageContainer:{
        width:Dimensions.get('window').width * 0.5,
        height:Dimensions.get('window').width * 0.5,
        borderRadius:Dimensions.get('window').width * 0.5 / 2,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical: Dimensions.get('window').height / 20,   
    },
    image:{
        width:'100%',
        height:'100%'
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical: Dimensions.get('window').height / 80
    },
    textResult :{
            textAlign:'center'
    },
    heighLight:{
        color:Colors.primary,
        fontFamily:'open-sans-bold',
        fontSize:Dimensions.get('window').height < 400 ? 16 : 20
    }
    

})

export default GameOverScreen;