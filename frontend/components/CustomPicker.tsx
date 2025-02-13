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
      <View className="flex-1 justify-end bg-black/50 mb-2">
        <View className="bg-pink_light rounded-t-3xl">
          <View className="p-4 border-b border-pink_main">
            <Text className="text-xl font-bold text-center text-pink_dark">
              {title}
            </Text>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 border-b border-pink_main"
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text className="text-center text-peach_dark text-lg">
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity className="p-4 bg-pink_light" onPress={onClose}>
            <Text className="text-center text-pink_very_dark font-bold text-xl">
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
