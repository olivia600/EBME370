import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import ScrollableKeyboardAvoidView from "../config/ScrollableKeyboardAvoidView";
import { RadioButton, Text } from "react-native-paper";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  last_name: Yup.string().required().label("Last Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  re_password: Yup.string().required().min(4).label("Confirm Password"),
});

function RegisterScreen({navigation}) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const [selectedValue, setSelectedValue] = useState("yes");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
  
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
    } else {
      navigation.navigate(routes.REGISTER_SUCCESS);
    }
  };

  return (
    <>
    <ScrollableKeyboardAvoidView>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ first_name: "", last_name: "", username: "", email: "", password: "", re_password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="first_name"
            placeholder="First Name"
          />
           <FormField
            autoCorrect={false}
            icon="account"
            name="last_name"
            placeholder="Last Name"
          />
           <FormField
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="Username"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="re_password"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />

<View style={styles.container}>
      <Text style={styles.question}>Are you a patient?</Text>
      <RadioButton.Group
        onValueChange={(value) => handleRadioChange(value)}
        value={selectedValue}
      >
        <View style={styles.radioButtonContainer}>
          <RadioButton.Android
            value="yes"
            status={selectedValue === "yes" ? "checked" : "unchecked"}
            color="#007bff" // Bootstrap primary color
          />
          <Text style={styles.radioButtonText}>Yes</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Android
            value="no"
            status={selectedValue === "no" ? "checked" : "unchecked"}
            color="#007bff" // Bootstrap primary color
          />
          <Text style={styles.radioButtonText}>No</Text>
        </View>
      </RadioButton.Group>
    </View>

          <SubmitButton title="Register" />
        </Form>
      </Screen>
      </ScrollableKeyboardAvoidView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: "row", // Flex options in a row
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonText: {
    marginLeft: 10,
  },
  selectedOptionText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default RegisterScreen;
