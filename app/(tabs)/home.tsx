import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView, ThemedText, IconContainer } from "@/components/reusables";
import { COLORS, gStyles, icons } from "@/constants";
import {
  MetricBox,
  NewGoalBox,
  UpcomingChallenge,
} from "@/components/homeScreen";

const Home = () => {
  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={gStyles.flex1}>
          <ThemedView
            style={[gStyles.wFull, gStyles.flexRowSpace, gStyles.mB50]}
          >
            <IconContainer backgroundColor={COLORS.green50}>
              <icons.userIcon />
            </IconContainer>
            <IconContainer backgroundColor={COLORS.green50}>
              <icons.bellIcon />
            </IconContainer>
          </ThemedView>
        </ThemedView>
        <ThemedView style={[gStyles.gap4, gStyles.mB20]}>
          <ThemedText type="title2" color={COLORS.black}>
            Good Morning!
          </ThemedText>
          <ThemedText color={COLORS.grey500}>
            Ready to crush some fitness goals today?
          </ThemedText>
        </ThemedView>
        <ThemedView style={[gStyles.gap10, gStyles.flex1, gStyles.mB40]}>
          <MetricBox />
          <NewGoalBox />
        </ThemedView>
        <UpcomingChallenge />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
