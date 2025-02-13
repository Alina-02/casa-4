import { View, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import OrangeButton from "@/components/Buttons/OrangeButton";
import { DeletePointsModal } from "@/components/Modals/DeletePointsModal";

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDeletePoints = (points: string) => {
    // Handle the points deletion here
    console.log("Deleting points:", points);
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6 py-8 space-y-8">
        <View className="h-1/2">
          <View className="bg-pink_main rounded-full justify-center items-center w-[300px] h-[300px]">
            <View className="bg-white rounded-full w-[260px] h-[260px] justify-center items-center">
              <Text className="text-6xl font-bold text-pink_very_dark">1</Text>
            </View>
          </View>
        </View>
        <OrangeButton
          text="Añadir puntos"
          onPress={() => router.push("/add")}
        />

        <OrangeButton
          text="Eliminar puntos"
          onPress={() => setIsModalVisible(true)}
        />
        <OrangeButton
          text="Apuestas"
          onPress={() => router.push("/apuestas")}
        />

        <DeletePointsModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onConfirm={handleDeletePoints}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
