import React from "react";
import { TouchableOpacity, StyleSheet, Text, ViewStyle, TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type IconButtonProps = {
  onPress: () => void;
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
  label: string;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;                         // Custom styles for the label
};

const IconButton = ({
  onPress,
  name,
  size,
  color,
  label,
  buttonStyle,
  labelStyle,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <MaterialIcons name={name} size={size} color={color} />
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 16, // Font size for the text
  },
});
