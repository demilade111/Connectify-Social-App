import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { Wrapper } from "./styles";
import CustomIcon from "../../shared/Icon";
import { HeaderPropsType } from "../../types";

const HeaderContent = (props: HeaderPropsType) => {
  const insets = useSafeAreaInsets();
  return (
    <Wrapper insets={insets}>
      <CustomIcon name="chevron-back-sharp" type="ionicon" />
      <Text>{props?.title}</Text>
      <Text></Text>
    </Wrapper>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({});
