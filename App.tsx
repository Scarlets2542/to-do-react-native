import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import IconButton from "./components/Icon";
import { Text, View, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Awesome app",
            headerRight: () => (
              <IconButton
                name="logout"
                size={35}
                onPress={() => navigation.navigate("Details")}
                label="Sign out"
                buttonStyle={styles.customButton}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customButton: {
    paddingRight:20, 
  },
});
