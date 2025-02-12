import { View, SafeAreaView } from "react-native";
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
      <View className="flex-1 items-center justify-center px-6 py-10 space-y-8">
        {/*<CircularProgress size={250} strokeWidth={25} value={1} />*/}

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
