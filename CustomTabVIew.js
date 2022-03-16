import { View, FlatList, ScrollView, Dimensions } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import HomeScreen from "./Home";
import Header from "./Community";
import TempTobBar from "./TempTobBar";
import {} from "react/cjs/react.production.min";

const CustomTabVIew = () => {
  const { width, height } = Dimensions.get("screen");
  const [currentIndex, setCurrentIndex] = useState(1);
  const flatListRef = useRef(null);
  const renderItem = ({ _, index }) => {
    return (
      <View
        style={{
          width,
          height,
        }}
      >
        <HomeScreen index={index} />
      </View>
    );
  };
  useEffect(() => {
    if (currentIndex === undefined) return;
    flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex });
  }, [currentIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <ScrollView
        stickyHeaderIndices={[1]}
        style={{ backgroundColor: "green" }}
      >
        <Header />
        <TempTobBar
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <FlatList
          ref={flatListRef}
          horizontal
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
          initialNumToRender={1}
          style={{ backgroundColor: "orange" }}
        />
      </ScrollView>
    </View>
  );
};

export default CustomTabVIew;
