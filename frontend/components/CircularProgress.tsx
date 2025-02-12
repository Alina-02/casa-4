import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  value: number;
}

export function CircularProgress({
  size,
  strokeWidth,
  value,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size} className="rotate-[-90deg]">
        {/* Decorative circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFA07A"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
      </Svg>
      <View className="absolute">
        <Text className="text-5xl font-bold text-gray-800">{value}</Text>
      </View>
    </View>
  );
}
