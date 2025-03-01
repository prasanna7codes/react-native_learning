import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
       fontSize: 30,
       fontWeight: 'bold',
    textAlign: 'center',
    },

    container: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
    },


    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
    },
    cardOne:{
        backgroundColor:'pink'
    },
    cardTwo:{
        backgroundColor:'lightblue'
    },
    cardThree:{
        backgroundColor:'lightgreen'
    },


})