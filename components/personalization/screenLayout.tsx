import React from "react";
import { ThemedText, ThemedView } from "@/components/reusables";
import { gStyles } from "@/constants";

interface IProps {
  children: React.ReactNode;
  screenHeaderTitle: string;
}

const ScreenLayout: React.FC<IProps> = ({ children, screenHeaderTitle }) => {
  return (
    <ThemedView style={(gStyles.flexCenter, gStyles.flex1)}>
      <ThemedText type="title2" style={[gStyles.mB30, gStyles.textCenter]}>
        {screenHeaderTitle}
      </ThemedText>
      <ThemedView
        style={[
          gStyles.wFull,
          {
            justifyContent: "space-between",
            height: "88%",
          },
        ]}
      >
        {children}
      </ThemedView>
    </ThemedView>
  );
};

export default ScreenLayout;
