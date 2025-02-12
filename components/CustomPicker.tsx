import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native";

interface CustomPickerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  options: string[];
  title: string;
}

export function CustomPicker({
  visible,
  onClose,
  onSelect,
  options,
  title,
}: CustomPickerProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white rounded-t-3xl">
          <View className="p-4 border-b border-gray-200">
            <Text className="text-lg font-medium text-center text-pink_dark">
              {title}
            </Text>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 border-b border-gray-100"
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text className="text-center text-gray-700 text-lg">
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity className="p-4 bg-gray-100" onPress={onClose}>
            <Text className="text-center text-gray-700 font-medium">
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
