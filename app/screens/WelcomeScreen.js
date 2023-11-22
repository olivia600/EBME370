import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";
import ScrollableKeyboardAvoidView from "../config/ScrollableKeyboardAvoidView";

function WelcomeScreen({ navigation }) {
  return (
    <>
      <ImageBackground
        blurRadius={0}
        style={styles.background}
        source={require("../assets/stroke.webp")}
        resizeMode="cover" // Add this line to cover the screen
      >
        <View style={styles.logoContainer}>
          <Text style={styles.tagline}>Get the help you deserve</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <Button
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 60,
    width: "120%",
  },
  logo: {
    fontSize: 25,
    fontWeight: "400",
    color: 'tomato',
    marginTop: 30, // Adjust this value as needed
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "900",
    color: 'purple',
    marginTop: 20, 
  },
});


export default WelcomeScreen;
