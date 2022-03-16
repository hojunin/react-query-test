import { View, Text } from "react-native";
import styled from "styled-components/native";
import React from "react";

const Header = () => {
  return (
    <Container>
      <Touchable hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
        <Icon source={require("./src/assets/notification.png")} />
      </Touchable>
      <SearchAndReward>
        <Touchable hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
          <Icon source={require("./src/assets/search.png")} />
        </Touchable>
        <View style={{ width: 20 }} />
        <Touchable hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
          <Icon source={require("./src/assets/reward.png")} />
        </Touchable>
      </SearchAndReward>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;
const Touchable = styled.TouchableOpacity``;
const Icon = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;
const SearchAndReward = styled.View`
  flex-direction: row;
  align-items: center;
`;
