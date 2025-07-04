import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import HeaderContent from '../components/Header';
import {
  AuthDetailText,
  AuthHeaderText,
  BottomWrapper,
  ForgotPasswordText,
  ForgotPasswordView,
  FormTextInput,
  FormView,
  LabelText,
  SignUpText,
  SubmitButton,
  TopWrapper,
  Wrapper,
} from '../components/Auth/Login/styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { login, state } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (!success) {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  const handleSignUp = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <>
      <HeaderContent />
      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>Welcome Back</AuthHeaderText>
          <AuthDetailText>Sign in to continue</AuthDetailText>
          <FormView>
            <LabelText>Email</LabelText>
            <FormTextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <LabelText>Password</LabelText>
            <FormTextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </FormView>

          <ForgotPasswordView>
            <ForgotPasswordText onPress={handleForgotPassword}>
              Forgot Password?
            </ForgotPasswordText>
          </ForgotPasswordView>
        </TopWrapper>

        <BottomWrapper>
          <SubmitButton
            title={state.isLoading ? "Signing In..." : "Sign In"}
            onPress={handleLogin}
            disabled={state.isLoading}
            accessibilityLabel="Login"
            color="#006175"
          />

          <SignUpText>
            Don't have an account?{' '}
            <Text style={{ color: '#70a6b1' }} onPress={handleSignUp}>
              Sign Up
            </Text>
          </SignUpText>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
