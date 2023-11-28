import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Trebuchet': require('./assets/trebuc.ttf'),
  });
}
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 8,
  },
  navigatorHeading: {
    headerStyle: {
      backgroundColor: '#c64c38',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, 
  },
  title: {
    fontSize: 32,
    fontFamily: 'Trebuchet',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    margin: 24,
    fontSize: 18,
    fontFamily: 'Trebuchet',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Trebuchet',
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  contactItem: {
    marginBottom: 10,
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'red',
  },
  deleteText: {
    textAlign: 'center',
  },
  name: {
    fontFamily: 'Trebuchet',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskItem: {
    marginTop: 30,
  },
  description: {
    fontSize: 16,
  },
});
