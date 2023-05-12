import { StyleSheet, View } from "react-native";
import React from "react";
import LoginContent from "../components/Auth/Login";
import ForgotPasswordContent from "../components/Auth/ForgotPassword";
import ChangePasswordContent from "../components/Auth/ChangePassword";

const LoginScreen = () => {
  return (
    <>
      {/* <LoginContent /> */}
      {/* <ForgotPasswordContent /> */}
      <ChangePasswordContent />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
