import { Image, ScrollView, StyleSheet, Text, View,Linking } from 'react-native';
import React from 'react';
import myImage from './me_recent.jpg'; // Importing your local image

export default function ContactList() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
      }
 
    const contacts = [
    {
      uid: 1,
      name: 'Prasanna Sahoo',
      status: 'Just a newbie in the tech world! 🌟',
      imageUrl: null, // Indicating that this is a local image
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_1280.png',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThN3ggq5Uhyo2R-dD7Q4a2rWO3iXLJkL2wAA&s',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_ygIznYYk2eBxuaTtbGBLkHdmwiBooHqvg&s',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      <ScrollView style={styles.container}>
        {contacts.map((contact) => (
          <View key={contact.uid} style={styles.userCard}>
            
            <Image
              source={contact.imageUrl ? { uri: contact.imageUrl } : myImage} // Using local image for yourself
              style={styles.userImage}

            />



            <View>
            <Text style={styles.userName} onPress={() => openWebsite('https://www.instagram.com/p/DGNjMRxx6Qs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==')}>{contact.name}</Text>
            <Text style={styles.userStatus}>{contact.status}</Text>
            </View>


          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#e4cef5',
        padding: 8,
        borderRadius: 10,
        margin: 10,
        elevation: 10,
        
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3b2c27'
    },
    userStatus: {
        fontSize: 12
    }
})