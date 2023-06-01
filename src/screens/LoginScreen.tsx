import { StyleSheet, View } from "react-native";
import React from "react";
import LoginContent from "../components/Auth/Login";
import ForgotPasswordContent from "../components/Auth/ForgotPassword";
import ChangePasswordContent from "../components/Auth/ChangePassword";
import OtpSentContent from "../components/Auth/OtpSent";
import HomeContent from "../components/Home";
import AddPostContent from "../components/Post/AddPost";

const LoginScreen = () => {
  return (
    <>
      {/* <LoginContent /> */}
      {/* <ForgotPasswordContent /> */}
      {/* <ChangePasswordContent /> */}
      {/* <OtpSentContent /> */}
      {/* <HomeContent /> */}
      <AddPostContent />
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
