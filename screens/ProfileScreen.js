import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = ({ route }) => {
  const { name, course } = route.params || {};

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {name}</Text>
      <Text>Course: {course}</Text>
    </View>
  );
};

export default ProfileScreen;