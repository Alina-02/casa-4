import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  View,
} from "react-native";

interface DeletePointsModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (points: string) => void;
}

export function DeletePointsModal({
  isVisible,
  onClose,
  onConfirm,
}: DeletePointsModalProps) {
  const [points, setPoints] = React.useState("");

  const handleConfirm = () => {
    onConfirm(points);
    setPoints("");
  };

  const handleClose = () => {
    setPoints("");
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      <Pressable
        className="flex-1 justify-center items-center bg-black/50 "
        onPress={handleClose}
      >
        <Pressable
          className="w-[80%] bg-peach_light p-7 rounded-3xl h-96 justify-between"
          onPress={(e) => e.stopPropagation()}
        >
          <View>
            <Text className="text-2xl font-bold text-peach_dark mb-2 text-center">
              Puntos a eliminar
            </Text>

            <Text className="text-peach_dark mb-4 text-center">
              No sé por qué vas a hacer esto pero buenas.
            </Text>
          </View>

          <TextInput
            className="bg-white px-4 py-4 rounded-xl mb-4"
            placeholder="Puntos..."
            value={points}
            onChangeText={setPoints}
            keyboardType="numeric"
          />
          <View>
            <TouchableOpacity
              className="bg-peach_main rounded-full py-4 mb-3 text-lg"
              onPress={handleConfirm}
            >
              <Text className="text-white text-center font-medium">
                Confirmar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleClose}>
              <Text className="text-peach_dark text-center text-lg">
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
