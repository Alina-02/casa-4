import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import * as Svg from "react-native-svg";

const App = () => {
  return <Redirect href={"/login"} />;
};

export default App;
