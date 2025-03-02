import { StyleSheet, Text, View,Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Actioncard() {

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }



    return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card,styles.elevatedCrad]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            what's new in javascript
        </Text>
        </View>

        <Image
            source={{uri: 'https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.jpg?s=1024x1024&w=is&k=20&c=n09_q789C4LPvey3op74SGkt3-OgmR8r-giT5jiEWeA='}}
            style={styles.cardImage}
            />
        
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>hello i  am Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolores sit facere pariatur enim. Nemo commodi sapiente distinctio pariatur labore repellat nostrum veritatis incidunt quod totam molestiae dolorum esse, voluptate tempora facere maxime recusandae?</Text>
        </View>

        <View style={styles.fotterContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
        </View>

        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#cef5f2',
        margin: 20,
    
        height: 350,
        marginLeft: 20,
    },
    elevatedCrad: {
        elevation: 10,
        shadowColor: '',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
     },


    headingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },




    headerText: {
        color: 'green',
        fontWeight: 'bold', 
        
    },
    cardImage: {
        height: 100,
        borderRadius: 10,
        margin: 10
    },
    bodyContainer: {
        padding: 10
    },
    fotterContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    socialLinks: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 5

        
    }
})