import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

interface Props {
  text: string;
  onPress: () => void;
}

export default function PinkButton({ text, onPress }: Props) {
  const [isInfoModalVisible, setInfoModalVisible] = useState(false);
  return (
    <Pressable
      className="flex-row items-center justify-between bg-pink_main rounded-xl mt-4 p-4 w-full h-20"
      onPress={onPress}
    >
      <View style={{ width: 24 }} />
      <Text className="text-center text-xl text-pink_dark font-semibold">
        {text}
      </Text>
      <Pressable
        onLongPress={() => setInfoModalVisible(true)}
        delayLongPress={500}
      >
        <Feather name="info" size={24} color="#D164C1" />
      </Pressable>
    </Pressable>
  );
}
