import styled from "styled-components/native";
import { WrapperProps } from "../../types";

export const Wrapper = styled.View<WrapperProps>`
  padding-top: ${(props) => props.insets.top + 30}px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 299px;
  height: 34px;
  border: 1px solid #006175;
  border-radius: 10px;
`;

export const PostWrapper = styled.View`
  width: 335px;
  height: 338px;
  background-color: #c4c4c4;
  opacity: 0.2;
  border-radius: 10px;
  position: relative;
`;

export const PostHead = styled.View`
  flex-direction: row;
  position: absolute;
  height: 46px;
  left: 39px;
  justify-content: center;
`;

export const PostUserNameView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PostUserNameText = styled.Text`
  height: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #000000;
`;
