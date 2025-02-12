import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export default function OrangeButton({ text, onPress }: Props) {
  return (
    <Pressable
      className="align-middle justify-center bg-peach_light rounded-xl mt-4 p-4 w-full h-20"
      onPress={onPress}
    >
      <Text className="text-center text-xl text-peach_dark font-semibold ">
        {text}
      </Text>
    </Pressable>
  );
}
