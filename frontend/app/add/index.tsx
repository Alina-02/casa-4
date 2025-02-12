"use client";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ActivityModal } from "@/components/Modals/AddPointsModal";
import PinkButton from "@/components/Buttons/PinkButton";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const activities = [
  { id: 1, title: "Juegos Nivel 1", points: 7 },
  { id: 2, title: "Juegos Nivel 2", points: 5 },
  { id: 3, title: "Juegos Nivel 3", points: 8 },
  { id: 4, title: "Ayuda Nivel 1", points: 3 },
  { id: 5, title: "Ayuda Nivel 2", points: 3 },
  { id: 6, title: "Participar", points: 2 },
];

export default function AddScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<
    (typeof activities)[0] | null
  >(null);

  const handleActivityPress = (activity: (typeof activities)[0]) => {
    setSelectedActivity(activity);
    setIsModalVisible(true);
  };

  const handleConfirm = (description: string) => {
    if (selectedActivity) {
      // Handle the activity submission here
      console.log(
        "Activity:",
        selectedActivity.title,
        "Description:",
        description
      );
    }
    setIsModalVisible(false);
    setSelectedActivity(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-pink_light">
      <View className="flex-1 px-6 pt-8">
        {/* Header */}
        <View className="flex-row items-center mb-6 relative">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="absolute left-0 z-10"
          >
            <Ionicons name="chevron-back" size={24} color="#D164C1" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-xl text-pink_dark text-center font-semibold">
              Añadir
            </Text>
          </View>
        </View>
        {/* Activities List */}
        <ScrollView className="flex-1">
          {activities.map((activity) => (
            <PinkButton
              key={activity.id}
              text={activity.title}
              onPress={() => handleActivityPress(activity)}
            />
          ))}
        </ScrollView>

        {/* Activity Modal */}
        <ActivityModal
          isVisible={isModalVisible}
          onClose={() => {
            setIsModalVisible(false);
            setSelectedActivity(null);
          }}
          onConfirm={handleConfirm}
        />
      </View>
    </SafeAreaView>
  );
}
