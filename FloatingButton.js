import styled from "styled-components/native";
import React from "react";

const Button = ({ direction }) => (
  <Container isTail={direction === "down"}>
    {direction === "down" ? <Label>아래</Label> : <Label>위</Label>}
  </Container>
);

const FloatingButton = ({ direction }) => {
  return <Button direction={direction} />;
};

export default FloatingButton;

const Container = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 50px;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isTail ? "red" : "blue")};
`;

const Label = styled.Text`
  color: white;
`;
