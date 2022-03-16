import React, {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const SearchBar = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return value;
    },
    focus: () => {
      return inputRef.current?.focus();
    },
  }));
  return (
    <Container>
      <TouchableOpacity>
        <BackButton source={require("./src/assets/back.png")} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <Input
          ref={inputRef}
          value={value}
          onChangeText={setValue}
          placeholder="검색어를 입력해주세요."
          placeholderTextColor={"#aeaeae"}
          selectionColor="#EF3333"
          returnKeyType="search"
          onSubmitEditing={props.onSubmit}
        />
        {value.length > 0 && (
          <TouchableOpacity
            onPress={() => setValue("")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 5,
            }}
          >
            <DeleteButton source={require("./src/assets/delete.png")} />
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
});

export default SearchBar;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

const BackButton = styled.Image`
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;
const DeleteButton = styled.Image`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  resize-mode: contain;
`;

const Input = styled.TextInput`
  flex: 1;
  width: 100%;
  background-color: #f7f7f7;
  font-size: 13px;
  height: 38px;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 35px;
  margin-left: 16px;
`;
