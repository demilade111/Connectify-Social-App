import { StyleSheet, View } from "react-native";
import React from "react";
import LoginContent from "../components/Auth/Login";
import ForgotPasswordContent from "../components/Auth/ForgotPassword";
import ChangePasswordContent from "../components/Auth/ChangePassword";
import OtpSentContent from "../components/Auth/OtpSent";

const LoginScreen = () => {
  return (
    <>
      {/* <LoginContent /> */}
      {/* <ForgotPasswordContent /> */}
      {/* <ChangePasswordContent /> */}
      <OtpSentContent />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
