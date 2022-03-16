import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const SearchStatus = () => {
  return (
    <Container>
      <Text>0건</Text>
      <Text>제목+내용</Text>
    </Container>
  );
};

export default SearchStatus;

const Container = styled.View`
  padding: 12px 20px;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
`;
