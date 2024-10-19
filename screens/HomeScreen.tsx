import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToDoScreen from "./todo/ToDoScreen ";
import DoingScreen from "./todo/DoingScreen";
import DoneScreen from "./todo/DoneScreen";
import { View, StyleSheet } from "react-native";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }: any) {
  const onPressTab = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.contener}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (route.name === "ToDoScreen") {
              iconName = "home";
            } else if (route.name === "DoingScreen") {
              iconName = "settings";
            } else {
              iconName = "zoom-out-map";
            }
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                onPress={() => onPressTab(route.name)}
              />
            );
          },
          headerShown: false,
          tabBarVisible: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="ToDoScreen"
          component={ToDoScreen}
          options={{ tabBarLabel: "Todo" }}
        />
        <Tab.Screen
          name="DoingScreen"
          component={DoingScreen}
          options={{ tabBarLabel: "Doing" }}
        />
        <Tab.Screen
          name="DoneScreen"
          component={DoneScreen}
          options={{ tabBarLabel: "Done" }}
        />
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
