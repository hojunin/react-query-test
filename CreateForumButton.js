import React from "react";
import styled from "styled-components/native";

const CreateForumButton = () => {
  //navigation to Create Forum
  const navigateToCreateForum = () => {};
  return (
    <Container onPress={navigateToCreateForum}>
      <DefaultImage source={require("./src/assets/default.png")} />
      <Title>포럼 개설하기</Title>
    </Container>
  );
};

export default CreateForumButton;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const DefaultImage = styled.Image`
  width: 54px;
  height: 54px;
  resize-mode: contain;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 18px;
`;
