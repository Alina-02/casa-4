import React, { useEffect } from "react";
import "./global.css";
import { Slot, SplashScreen } from "expo-router";

import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
