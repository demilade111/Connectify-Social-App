import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

import styled from "styled-components";
import { Text, View } from "react-native";

const loadFonts = async () => {
  await Font.loadAsync({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
  });
};
const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
const Paragraph = styled(Text)`
  font-family: Poppins-Bold;
  color:red;
`;

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Container>
      <Paragraph>demihj</Paragraph>
    </Container>
  );
}
