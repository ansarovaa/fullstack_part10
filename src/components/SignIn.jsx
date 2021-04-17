import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import SignForm from "./SignForm";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
  },
});

const initialValues = {
  username: "",
  password: "",
};


const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;