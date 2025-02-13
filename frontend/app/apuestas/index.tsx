import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomPicker } from "@/components/CustomPicker";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const players = [
  "Alba",
  "David",
  "Marc",
  "Alina",
  "Victor",
  "Mubi",
  "Germán",
  "Jose",
  "Marina",
  "Irene",
  "Manu",
];

export default function ApuestasScreen() {
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [points, setPoints] = useState("");

  const [isSelectWinner, setIsSelectWinner] = useState(false);
  const [isSelectLoser, setIsSelectLoser] = useState(false);

  const handleAccept = () => {
    console.log("Apuesta aceptada:", { winner, loser, points });
    // Add logic here to handle the bet acceptance

    setWinner("");
    setLoser("");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FFF0FF]">
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
              Apuestas
            </Text>
          </View>
        </View>

        {/* Dropdowns */}
        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-6 rounded-xl mb-4 border border-pink_main"
          onPress={() => {
            setIsSelectWinner(true);
          }}
        >
          <Text className="text-pink_dark text-base">
            {winner || "Ganador"}
          </Text>
          <FontAwesome6 name="chevron-down" size={16} color="#D164C1" />
        </TouchableOpacity>
        <CustomPicker
          visible={isSelectWinner}
          onClose={() => {
            setIsSelectWinner(false);
          }}
          onSelect={(winner) => {
            setWinner(winner);
          }}
          options={players}
          title={"Ganador"}
        />

        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-6 rounded-xl mb-8 border border-pink_main"
          onPress={() => {
            setIsSelectLoser(true);
          }}
        >
          <Text className="text-pink_dark text-base">
            {loser || "Perdedor"}
          </Text>
          <FontAwesome6 name="chevron-down" size={16} color="#D164C1" />
        </TouchableOpacity>
        <CustomPicker
          visible={isSelectLoser}
          onClose={() => {
            setIsSelectLoser(false);
          }}
          onSelect={(loser) => {
            setLoser(loser);
          }}
          options={players}
          title={"Perdedor"}
        />

        {/* Points Section */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl font-semibold text-pink_dark mb-6 text-center">
            Puntos
          </Text>
          <View className="w-32 h-32 bg-white rounded-xl border border-pink_main">
            <TextInput
              className="flex-1 text-center text-pink_very_dark text-4xl"
              value={points}
              onChangeText={setPoints}
              keyboardType="numeric"
              textAlignVertical="center"
            />
          </View>
        </View>

        {/* Accept Button */}
        <TouchableOpacity
          className="bg-pink_dark py-4 rounded-xl mb-6"
          onPress={handleAccept}
        >
          <Text className="text-pink_light text-center text-lg font-semibold">
            Aceptar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
