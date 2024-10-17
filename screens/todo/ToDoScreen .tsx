import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>
          This is a bordered view!
        </Text>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <Text style={styles.text}>Read a book</Text>
          <Text style={styles.text}>19:30</Text>
        </View>
        <Text style={styles.text}>This is a bordered view!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "50%",
    // justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    padding: 20,
  },
  box: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2, // Width of the border
    borderColor: "#6200ee", // Color of the border
    borderRadius: 10, // Rounded corners (optional)
    backgroundColor: "#fff", // Background color of the view
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default ToDoScreen;
