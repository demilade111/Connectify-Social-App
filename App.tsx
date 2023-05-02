import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

export default function App() {
  const [stop, setStop] = useState<Boolean>(false);
  const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  `;

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
