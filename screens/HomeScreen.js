import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/header";
import StudentCard from "../components/studentCard";
import { students } from "../data/students";
import CustomButton from "../components/customButton";

const HomeScreen = ({ navigation }) => {
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
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <StudentCard name={item.name} course={item.course} />
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

