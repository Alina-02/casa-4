import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  View,
} from "react-native";

interface ActivityModalProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (description: string) => void;
}

export function ActivityModal({
  isVisible,
  onClose,
  onConfirm,
}: ActivityModalProps) {
  const [description, setDescription] = React.useState("");

  const handleConfirm = () => {
    onConfirm(description);
    setDescription("");
  };

  const handleClose = () => {
    setDescription("");
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
        className="flex-1 justify-center items-center bg-black/50"
        onPress={handleClose}
      >
        <Pressable
          className="w-[85%] bg-pink_main p-7 rounded-3xl h-96 justify-between"
          onPress={(e) => e.stopPropagation()}
        >
          <Text className="text-2xl font-bold text-pink_very_dark text-center mb-2">
            ¿Qué has hecho para merecer esto?
          </Text>

          <Text className="text-pink_very_dark text-center mb-4">
            Esto será juzgado por la justicia.
          </Text>

          <TextInput
            className="bg-white p-4 rounded-xl mb-4"
            placeholder="Actividad realizada..."
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />

          <View>
            <TouchableOpacity
              className="bg-pink_very_dark rounded-full py-4 mb-3"
              onPress={handleConfirm}
            >
              <Text className="text-white text-center font-medium text-lg">
                Confirmar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleClose}>
              <Text className="text-pink_very_dark text-center text-lg">
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
