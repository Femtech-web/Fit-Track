import { TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { COLORS, gStyles } from "@/constants";

const InfoBox = ({ info }: { info: string }) => {
  return (
    <TouchableOpacity
      style={[
        gStyles.wFull,
        gStyles.flexCenter,
        gStyles.pV16,
        {
          borderWidth: 1.5,
          borderColor: COLORS.grey200,
          backgroundColor: COLORS.grey50,
          borderRadius: 12,
        },
      ]}
    >
      <ThemedText color={COLORS.grey600}>{info}</ThemedText>
    </TouchableOpacity>
  );
};

export default InfoBox;
