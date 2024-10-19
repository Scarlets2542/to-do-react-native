import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import IconButton from "./components/Icon";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task Management",
            headerLeft: () => <></>,
            headerRight: () => (
              <IconButton
                name="logout"
                size={35}
                onPress={() => navigation.navigate("LoginScreen")}
                label="Sign out"
                buttonStyle={styles.customButton}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customButton: {
    paddingRight: 20,
  },
});
