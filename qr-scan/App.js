import { StyleSheet, View, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import QrScanner from "./screen/QrScanner";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import SubmitButton from "./components/SubmitButton";
import ScreenNavigator from "./components/ScreenNavigator";

const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "#0001c0",
    background: "#fff",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer style={styles.rootScreen} theme={MyTheme}>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="null"
          component={QrScanner}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={LoginScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabNav: {
    borderWidth: 3,
  },
});
