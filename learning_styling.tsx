import React from 'react';
import { StyleSheet,Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './ElevatedCards';

const LearningStyling = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards/>
                <ElevatedCards/>

             </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({})

export default LearningStyling;
