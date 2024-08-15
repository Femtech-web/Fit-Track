import { useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, gStyles, icons } from "@/constants";
import { HeaderIcon } from "@/components/homeScreen";
import { ThemedView } from "@/components/reusables";
import {
  FeedBackHeader,
  TogglePanel,
  PostSection,
  ChallengesSection,
} from "@/components/feedScreen";

const Feed = () => {
  const [activePanel, setActivePanel] = useState<string>("Posts");
  const panelList = ["Posts", "Challenges"];

  const isPosts = activePanel === "Posts";

  return (
    <SafeAreaView style={[gStyles.container, gStyles.pT32]}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerLeft: () => <FeedBackHeader />,
          headerRight: () => (
            <HeaderIcon icon={<icons.bellIcon />} style={{ marginRight: 24 }} />
          ),
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: "",
        }}
      />
      <ThemedView style={[gStyles.flex1, gStyles.wFull]}>
        <TogglePanel
          panelList={panelList}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
        <ThemedView style={[gStyles.flex1, gStyles.wFull, gStyles.p24]}>
          {isPosts ? <PostSection /> : <ChallengesSection />}
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Feed;
