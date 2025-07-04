import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import HeaderContent from '../components/Header';
import {
  AuthDetailText,
  AuthHeaderText,
  BottomWrapper,
  FormTextInput,
  FormView,
  LabelText,
  SignUpText,
  SubmitButton,
  TopWrapper,
  Wrapper,
} from '../components/Auth/Login/styles';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    const success = await register(username, email, password);
    if (!success) {
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <>
      <HeaderContent />
      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>Create Account</AuthHeaderText>
          <AuthDetailText>Sign up to get started</AuthDetailText>
          <FormView>
            <LabelText>Username</LabelText>
            <FormTextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
              autoCapitalize="none"
            />
            <LabelText>Email</LabelText>
            <FormTextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <LabelText>Password</LabelText>
            <FormTextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry
            />
            <LabelText>Confirm Password</LabelText>
            <FormTextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
              secureTextEntry
            />
          </FormView>
        </TopWrapper>

        <BottomWrapper>
          <SubmitButton
            title="Sign Up"
            onPress={handleRegister}
            accessibilityLabel="Register"
            color="#006175"
          />

          <SignUpText>
            Already have an account?{' '}
            <Text 
              style={{ color: '#70a6b1' }}
              onPress={() => navigation.navigate('Login' as never)}
            >
              Sign In
            </Text>
          </SignUpText>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});