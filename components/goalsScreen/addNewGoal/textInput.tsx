import React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { FONT, SIZES } from "@/constants";
import { styles } from "./styles";

interface ICustomInput extends TextInputProps {
  label: string;
}

const CustomTextInput: React.FC<ICustomInput> = ({ label, ...rest }) => {
  return (
    <ThemedView style={styles.customInputContainer}>
      <ThemedText type="small" style={{ marginBottom: 2 }}>
        {label}
      </ThemedText>
      <TextInput style={{ fontFamily: FONT.medium, fontSize: SIZES.medium }} />
    </ThemedView>
  );
};

export default CustomTextInput;
