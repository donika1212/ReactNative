import React from "react";
import { View } from "react-native";

import Header from "../components/header";
import StudentCard from "../components/studentCard";
import { students } from "../data/students";
import { FlatList } from "react-native-web";


const HomeScreen = () => {
    return (
        <View>
  <Header />
  <FlatList
    data={students}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <StudentCard
        name={item.name}
        course={item.course}
      />
    )}
  />
</View>
);
};

export default HomeScreen;