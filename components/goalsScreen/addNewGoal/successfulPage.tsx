import { Dispatch, SetStateAction } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ThemedView, ThemedButton, ThemedText } from "@/components/reusables";
import { gStyles, COLORS, icons } from "@/constants";

const SuccessfulPage = ({
  setGoalAdded,
}: {
  setGoalAdded: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const handleHomePress = () => {
    setGoalAdded(false);
    router.push("/");
  };

  return (
    <ThemedView style={[gStyles.flex1, gStyles.flexCenter]}>
      <ThemedView style={[gStyles.flexCenter, gStyles.gap20, gStyles.mB100]}>
        <ThemedView
          style={[
            gStyles.flexRowCenter,
            {
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
              backgroundColor: COLORS.secondary,
            },
          ]}
        >
          <icons.checkmarkIcon />
        </ThemedView>
        <ThemedText type="title2" color={COLORS.black}>
          Way to go Champ!
        </ThemedText>
        <ThemedText style={{ textAlign: "center" }}>
          You’ve successfully added a new goal. Remember to work towards
          achieving your goals, we’re rooting for you!
        </ThemedText>
      </ThemedView>
      <ThemedView style={[gStyles.wFull, gStyles.flexCenter, gStyles.gap20]}>
        <ThemedButton
          title="VIEW MY GOALS"
          style={{ width: "100%" }}
          textStyle={gStyles.btnText}
          isLink
          href="/goals"
          onPress={() => setGoalAdded(false)}
        />
        <TouchableOpacity onPress={handleHomePress}>
          <ThemedText color={COLORS.grey600}>GO BACK HOME</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default SuccessfulPage;
