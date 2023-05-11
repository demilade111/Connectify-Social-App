import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import { AuthDetailText, AuthHeaderText, Wrapper } from "./styles";

const LoginContent = () => {
  return (
    <>
      <HeaderContent />
      <Wrapper>
        <AuthHeaderText>Sign in</AuthHeaderText>
        <AuthDetailText>Enter your credentials</AuthDetailText>
      </Wrapper>
    </>
  );
};

export default LoginContent;

const styles = StyleSheet.create({});
