import React from "react";
import {
  TextInput,
  StyleSheet,
  type TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SIZES, FONT, COLORS } from "@/constants";

export type ThemedTextInputProps = TextInputProps & {
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  type?: "default" | "outlined" | "filled";
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
};

export function ThemedTextInput({
  textStyle,
  containerStyle,
  type = "default",
  color,
  backgroundColor,
  borderColor,
  style,
  ...rest
}: ThemedTextInputProps) {
  return (
    <TextInput
      style={[
        styles.base,
        type === "default" ? styles.default : undefined,
        type === "outlined" ? styles.outlined : undefined,
        type === "filled" ? styles.filled : undefined,
        color ? { color } : undefined,
        backgroundColor ? { backgroundColor } : undefined,
        borderColor ? { borderColor } : undefined,
        textStyle,
        style,
      ]}
      placeholderTextColor={color ? color : COLORS.grey600}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: SIZES.small,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  default: {
    borderWidth: 1,
    borderColor: COLORS.grey200,
    backgroundColor: COLORS.grey50,
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  filled: {
    borderWidth: 1,
    borderColor: COLORS.grey500,
    backgroundColor: COLORS.grey200,
  },
});

export default ThemedTextInput;
