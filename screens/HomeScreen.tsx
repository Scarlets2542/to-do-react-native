import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ToDoScreen from "./todo/ToDoScreen ";
import DoingScreen from "./todo/DoingScreen";
import DoneScreen from "./todo/DoneScreen";
import { View, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.contener}>
      <Tab.Navigator>
        <Tab.Screen name="To Do" component={ToDoScreen} />
        <Tab.Screen name="Doing" component={DoingScreen} />
        <Tab.Screen name="Done" component={DoneScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    flexDirection: "row",
  },
  label: {
    fontSize: 16, // Font size for the text
  },
});
