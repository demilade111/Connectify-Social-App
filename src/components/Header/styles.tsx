import styled from "styled-components/native";
import { WrapperProps } from "../../types";

export const Wrapper = styled.View<WrapperProps>`
  padding-top: ${(props) => props.insets.top + 30}px;
  padding-bottom: ${(props) => props.insets.bottom + 30}px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CenterText = styled.Text`
  height: 27px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;
