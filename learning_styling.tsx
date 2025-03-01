import React from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './ElevatedCards';
import FancyCard from './FancyCard';

const LearningStyling = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards/>
                <ElevatedCards/>
                <FancyCard/>
                <FancyCard/>


             </ScrollView>
        </SafeAreaView>

    );
}

//const styles = StyleSheet.create({})

export default LearningStyling;
