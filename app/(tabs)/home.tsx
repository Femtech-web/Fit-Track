import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView, ThemedText } from "@/components/reusables";
import { COLORS, gStyles, icons } from "@/constants";
import {
  HeaderIcon,
  MetricBox,
  NewGoalBox,
  UpcomingChallenge,
} from "@/components/homeScreen";

const Home = () => {
  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerLeft: () => (
            <HeaderIcon icon={<icons.userIcon />} style={{ marginLeft: 24 }} />
          ),
          headerRight: () => (
            <HeaderIcon icon={<icons.bellIcon />} style={{ marginRight: 24 }} />
          ),
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
