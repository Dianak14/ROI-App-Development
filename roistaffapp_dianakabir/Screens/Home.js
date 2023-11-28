import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


export default function Home({ navigation }) {
  // Load the Trebuchet font
  const [loaded] = useFonts({
    Trebuchet: require('assets/trebuc.ttf'), // Replace with the correct path
  });

  if (!loaded) {
    return null; // Return null or a loading indicator while the font is being loaded
  }

  const handleEnterPress = () => {
    // Navigate to the 'TargetScreen' when the button is pressed
    navigation.navigate('TargetScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('assets/ROI logo.png')} />
        <Text style={styles.text}>Welcome to the ROI Staff Contact System</Text>
    </View>
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ROI Staff Listing')}
      >
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Adjust the marginTop to move the image higher up,
  },
  logo: {
    width: 400, // Adjust the width to make the image smaller
    height: 200, // Adjust the height proportionally if needed
    // You can remove the fixed width and height
  },
  text: {
    fontFamily: 'Trebuchet', // Set the font family to Trebuchet
    fontSize: 30, // Adjust the font size as needed
    marginTop: 90, // Adjust the marginTop to move the text down
    textAlign: 'center',
  },
   buttonContainer: {
    backgroundColor: '#941a1d', // Button background color
    paddingVertical: 10,
    paddingHorizontal:40,
    borderRadius: 20, // Adjust the border radius to make it rounded
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 18,
    textAlign: 'center',
  },
});



 