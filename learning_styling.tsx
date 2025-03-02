import React from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import Actioncard from './components/Actioncard';
import ContactList from './components/ContactList';

const LearningStyling = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards/>
                <ElevatedCards/>
                <FancyCard/>
                <Actioncard/>
                <ContactList/>


             </ScrollView>
        </SafeAreaView>

    );
}

//const styles = StyleSheet.create({})

export default LearningStyling;
