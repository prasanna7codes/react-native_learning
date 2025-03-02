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
    card: {},
    elevatedCrad: { },
    headingContainer: {},
    headerText: {},
    cardImage: {
        height: 100,
    },
    bodyContainer: {},
    fotterContainer: {},
    socialLinks: {}
})