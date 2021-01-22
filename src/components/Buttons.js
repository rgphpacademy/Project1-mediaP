import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Buttons = ({navigation}) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Home', item)}
          >
            <Text>30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Home', item)}
          >
            <Text>50</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Home', item)}
          >
            <Text>100</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
  });

export default Buttons;