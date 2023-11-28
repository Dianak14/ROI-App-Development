import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../alert';

export default function AddContact() {
  const [staffName, setStaffName] = useState('');
  const [staffDepartment, setStaffDepartment] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    loadTasks();
  }, []);

  const defaultTasks = [
    {
      name: 'John Smith',
      description: 'ICT',
      contact: '1 Code Lane Javaville NSW 0100',
      isDefault: true,
    },
    {
      name: 'Sue White',
      description: 'Finance',
      contact: '16 Bit Way Byte Cove QLD 1101',
      isDefault: true,
    },
    {
      name: 'Bob OBits',
      description: 'Marketing',
      contact: '18 Silicon Road Cloud Hills VIC 1001',
      isDefault: true,
    },
    {
      name: 'Mary Blue',
      description: 'Finance',
      contact: '4 Processor Boulevard Appleston NT 1010',
      isDefault: true,
    },
    {
      name: 'Mick Green',
      description: 'Marketing',
      contact: '700 Bandwidth Street Bufferland NSW 0110',
      isDefault: true,
    },
    // Add more default items as needed
  ];

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        // Merge default tasks with loaded tasks if no tasks are present
        setTasks((prevTasks) =>
          prevTasks.length === 0
            ? JSON.parse(savedTasks).concat(defaultTasks)
            : JSON.parse(savedTasks)
        );
      } else {
        // Set default tasks if no tasks are present
        setTasks(defaultTasks);
        saveTasks(defaultTasks);
      }
    } catch (error) {
      console.error('Error loading contact list:', error);
    }
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleAddTask = () => {
  if (
    staffName.trim() !== '' &&
    staffDepartment.trim() !== '' &&
    contactInfo.trim() !== ''
  ) {
    const newTask = {
      name: staffName,
      description: staffDepartment,
      contact: contactInfo,
    };
    const newTasks = [newTask, ...tasks]; // Prepend the new task
    setTasks(newTasks);
    saveTasks(newTasks);
    setStaffName('');
    setStaffDepartment('');
    setContactInfo('');
  }
};

  const deleteTask = (index) => {
    return alert(
      'Are you sure?',
      'Are you sure you want to delete this staff member?',
      [
        // The "No" button
        {
          text: 'No',
        },
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            let taskList = tasks.concat();
            taskList.splice(index, 1);
            setTasks(taskList);
          },
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.taskItem}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.contact}>{item.contact}</Text>
      </View>
      <TouchableOpacity
        key={index}
        style={styles.deleteButton}
        onPress={() => deleteTask(index)}>
        <Text style={styles.deleteText}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add an ROI staff </Text>
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Enter Staff Full Name"
        value={staffName}
        onChangeText={(text) => setStaffName(text)}
      />
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Enter Staff's Department"
        value={staffDepartment}
        onChangeText={(text) => setStaffDepartment(text)}
      />
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Enter Contact Information"
        value={contactInfo}
        onChangeText={(text) => setContactInfo(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add ROI Contact</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontFamily: 'Trebuchet',
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#595959',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: 'black', // Set text color to black
  },
  textContainer: {
    flex: 1, // Take up the available space
  },
  taskItem: {
    backgroundColor: '#595959', // Set the background color for added tasks
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10, // Add border radius for rounded corners
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  deleteButton: {
    backgroundColor: 'white', // Set the background color for the delete button
    borderRadius: 10,
    padding: 10,
  },
  deleteText: {
    color: '#262626',
    fontSize: 30,
  },
  name: {
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: 'white', // Set text color for added tasks
  },
  description: {
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: 'white', // Set text color for added tasks
  },
  contact: {
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: 'white', // Set text color for added tasks
  },
  button: {
    backgroundColor: '#941a1d',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 30,
    alignItems: 'center', // Align text in the center
  },
  buttonText: {
    color: 'white',
    fontSize: 25, // Increase the font size
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
});
