import React, { JSX } from 'react'

import{
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';

    return(
        <View style={styles.container}>
        <Text style={isDarkMode ? styles.whitetext : styles.darktext}>Hello again here</Text>
        </View> 
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',//moves element left and right
        justifyContent:'center'//moves element up and down
    },

    whitetext:{
        color:'#FFFFFF'
    },

    darktext:{
        color:'#000000'
    }


})

export default AppPro;
