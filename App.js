import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar, SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeScreen from "./Home";
import Search from "./Search";
import Community from "./Community";
import CustomTabVIew from "./CustomTabVIew";
const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar animated={true} backgroundColor="#61dafb" />
          <CustomTabVIew />
          {/* <HomeScreen /> */}
        </QueryClientProvider>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
