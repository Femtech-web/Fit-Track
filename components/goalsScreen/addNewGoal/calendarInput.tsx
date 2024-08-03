import React from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { COLORS, FONT, gStyles, icons } from "@/constants";
import { styles } from "./styles";

const CustomCalendarInput = ({ label }: { label: string }) => {
  return (
    <ThemedView
      style={[
        styles.customInputContainer,
        gStyles.flex1,
        { paddingBottom: 10 },
      ]}
    >
      <ThemedText type="small" style={{ marginBottom: 8 }}>
        {label}
      </ThemedText>
      <TouchableOpacity style={[gStyles.flexRowSpace, gStyles.gap10]}>
        <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap12]}>
          <icons.calendarIcon size={20} />
          <ThemedText
            style={{
              fontFamily: FONT.regular,
              fontSize: 18,
            }}
            color={COLORS.black}
          >
            Today
          </ThemedText>
        </ThemedView>

        <icons.arrowDownIcon size={23} />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default CustomCalendarInput;
