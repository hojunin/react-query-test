import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

const TempTobBar = (props) => {
  const { currentIndex = 0, setCurrentIndex } = props;
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setCurrentIndex(index);
      }}
      style={{
        minHeight: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textDecorationLine: "underline",
          textDecorationColor: "red",
          textDecorationStyle: "solid",
          fontSize: 14,
          fontWeight: currentIndex === index ? "bold" : "400",
          color: currentIndex === index ? "red" : "black",
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={["북마크 피드", "HOT", "포럼", "토픽", "카플루언서"]}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        bounces={false}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
};

export default TempTobBar;
