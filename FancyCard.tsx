import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
        source={{uri:'https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>A Fort</Text>
            <Text style={styles.cardLabel}>Pink City</Text>
            <Text style={styles.cardDescription}>it is in rajasthan which is in india and we love india and we are very proud of our india and we want to stay here for how long we can </Text>
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


     card:{
        borderRadius: 10,
        margin: 20,
        
        },


     cardElevated:{
        backgroundColor: 'grey',
        elevation: 10,
     },
     cardImage:{
        height: 200,
        borderRadius: 10,
        margin: 10,
     },
     cardBody:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CAD5E2',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexGrow: 1,

        
     },


     cardTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        
        
     },


     cardLabel:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
     },


     cardDescription:{
        fontSize: 10,
        fontWeight: 'bold',
     }

})