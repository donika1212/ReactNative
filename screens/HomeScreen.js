import React, {useState, useEffect} from "react";
import { View, FlatList, StyleSheet, Text} from "react-native";

import Header from "../components/header";
import StudentCard from "../components/studentCard";
import CustomButton from "../components/customButton";
import studentData from "../data/students.json"

const HomeScreen = ({ navigation }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStudents(studentData);
    setLoading(false);
  }, []);

  if (loading){
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>

  <Header />

  <View style={styles.buttonRow}>
    <CustomButton title="Add"/>
    <CustomButton title="Delete"/>
  </View>

  <CustomButton
    title="Go to Profile"
    onPress={() =>
      navigation.navigate("Profile", {
        name: "John Doe",
        course: "Computer Science",
      })
    }
  />

  <FlatList
    data={students}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <StudentCard 
      name={item.name} 
      course={item.course} 
      age= {item.age}
      />
    )}
  />
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  
})

export default HomeScreen;

