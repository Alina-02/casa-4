import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { router } from "expo-router";

export default function ApuestasScreen() {
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [points, setPoints] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#FFF0FF]">
      <View className="flex-1 px-6 pt-4">
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="mr-4"
          >
            {/* <ChevronLeft size={24} color="#FF69B4" />*/}
          </TouchableOpacity>
          <Text className="text-xl text-pink_dark text-center">Apuestas</Text>
        </View>

        {/* Dropdowns */}
        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 rounded-xl mb-4 border border-gray-200"
          onPress={() => {
            /* Handle winner selection */
          }}
        >
          <Text className="text-gray-300">{winner || "Ganador"}</Text>
          {/* <ChevronDown size={20} color="#FF69B4" />*/}
        </TouchableOpacity>

        {/* <Picker
          selectedValue={winner}
          onValueChange={(itemValue, itemIndex) => setWinner(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>*/}

        <TouchableOpacity
          className="flex-row items-center justify-between bg-white p-4 rounded-xl mb-8 border border-gray-200"
          onPress={() => {
            /* Handle loser selection */
          }}
        >
          <Text className="text-gray-300">{loser || "Perdedor"}</Text>
          {/* <ChevronDown size={20} color="#FF69B4" />*/}
        </TouchableOpacity>

        {/* Points Section */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-3xl font-semibold text-pink_dark mb-6 text-center">
            Puntos
          </Text>
          <View className="w-32 h-32 bg-white rounded-xl border border-gray-200">
            <TextInput
              className="flex-1 text-center text-gray-600 text-4xl"
              value={points}
              onChangeText={setPoints}
              keyboardType="numeric"
              textAlignVertical="center"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
