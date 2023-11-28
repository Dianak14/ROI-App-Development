import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function Settings({navigation}) {


  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
         <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = require('../Styles');
