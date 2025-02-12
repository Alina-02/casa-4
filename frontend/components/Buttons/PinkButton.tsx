import { View, Text, Pressable } from "react-native";
import React from "react";
import { Circle } from "react-native-svg";

interface Props {
  text: string;
  onPress: () => void;
}

export default function PinkButton({ text, onPress }: Props) {
  return (
    <Pressable
      className="align-middle justify-center bg-pink_main rounded-xl mt-4 p-4 w-full h-20"
      onPress={onPress}
    >
      <Text className="text-center text-xl text-pink_dark font-semibold">
        {text}
      </Text>
    </Pressable>
  );
}
