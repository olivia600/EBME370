// CustomSplashScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to GaitMate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#800080",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default CustomSplashScreen;
