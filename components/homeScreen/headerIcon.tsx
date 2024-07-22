import React from "react";
import { IconContainer } from "../reusables";
import { COLORS } from "@/constants";
import { ViewStyle } from "react-native";

const HeaderIcon = ({
  icon,
  style,
}: {
  icon: React.ReactNode;
  style: ViewStyle;
}) => {
  return (
    <IconContainer
      style={{ ...style, marginTop: 50 }}
      backgroundColor={COLORS.green50}
    >
      {icon}
    </IconContainer>
  );
};

export default HeaderIcon;
