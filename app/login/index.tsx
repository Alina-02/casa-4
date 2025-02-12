import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

export default function LoginScreen() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      //const userCredential = await signInWithEmailAndPassword(auth, email, password)
      //setUser(userCredential.user)
      //navigation.replace("Main")
      router.push("/home");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show message to user)
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-10 pt-10">
        <Text className="text-2xl font-semibold text-black mb-10 text-center">
          Bienvenidos
        </Text>
        <TextInput
          className="border-b border-gray-200 py-2.5 mb-5 text-base"
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
          autoCapitalize="none"
        />
        <TextInput
          className="border-b border-gray-200 py-2.5 mb-5 text-base"
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable
          className="bg-peach_light rounded-full mt-5 p-4"
          onPress={handleLogin}
        >
          <Text className="text-peach_dark text-center text-base font-medium">
            Entrar
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
