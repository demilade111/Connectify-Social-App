import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import HeaderContent from '../components/Header';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const ProfileSection = styled(View)`
  padding: 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

const ProfileName = styled(Text)`
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #006175;
  margin-top: 10px;
`;

const ProfileEmail = styled(Text)`
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #666;
  margin-top: 5px;
`;

const MenuSection = styled(View)`
  flex: 1;
  padding: 20px;
`;

const MenuItem = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

const MenuText = styled(Text)`
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #333;
`;

const LogoutButton = styled(TouchableOpacity)`
  background-color: #ff4444;
  margin: 20px;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const LogoutText = styled(Text)`
  font-family: Poppins-Bold;
  color: #fff;
  font-size: 16px;
`;

const ProfileScreen = () => {
  const { state, logout } = useAuth();
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: logout 
        },
      ]
    );
  };

  return (
    <Container>
      <HeaderContent title="Profile" />
      
      <ProfileSection>
        <ProfileName>{state.user?.username}</ProfileName>
        <ProfileEmail>{state.user?.email}</ProfileEmail>
      </ProfileSection>

      <MenuSection>
        <MenuItem>
          <MenuText>Edit Profile</MenuText>
          <Text style={{ color: '#999' }}>›</Text>
        </MenuItem>
        
        <MenuItem>
          <MenuText>Settings</MenuText>
          <Text style={{ color: '#999' }}>›</Text>
        </MenuItem>
        
        <MenuItem>
          <MenuText>Privacy</MenuText>
          <Text style={{ color: '#999' }}>›</Text>
        </MenuItem>
        
        <MenuItem>
          <MenuText>Help & Support</MenuText>
          <Text style={{ color: '#999' }}>›</Text>
        </MenuItem>
        
        <MenuItem>
          <MenuText>About</MenuText>
          <Text style={{ color: '#999' }}>›</Text>
        </MenuItem>
      </MenuSection>

      <LogoutButton onPress={handleLogout}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});