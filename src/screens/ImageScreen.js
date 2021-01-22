import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImageScreen = ({navigation}) => {
    return(
        <View>
            <Text>{navigation.getParam('image')}</Text>
            <Text>{navigation.getParam('name')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;