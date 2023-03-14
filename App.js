import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/pages/Home";
import { LinearGradient } from "expo-linear-gradient";

const config = {
  depedencies: {
    'linear-gradient': LinearGradient
  }
}

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <Home />
    </NativeBaseProvider>
  );
}