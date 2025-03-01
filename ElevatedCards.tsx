import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>to </Text>
        </View>

        <View style={[styles.card,styles.cardElevated]}>
            <Text>scroll </Text>
        </View>


        <View style={[styles.card,styles.cardElevated]}>
            <Text>more... </Text>
        </View>


      </ScrollView>
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
        padding: 10,
        
     },
     card:{
        height: 100,
        width: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
     },
     cardElevated:{
        backgroundColor: '#CAD5E2',
        shadowOffset: {width: 1, height:1},
        shadowColor: 'red',
        
     }
})