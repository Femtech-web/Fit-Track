import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView, ThemedButton } from "@/components/reusables";
import { images, COLORS, gStyles } from "@/constants";
import { styles, logoContainerView } from "./authStyles";

const Index = () => {
  const isAuthenticated = true;

  if (isAuthenticated) return <Redirect href="/home" />;

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24]}>
      <Image
        source={images.welcomeImage}
        resizeMode="cover"
        style={styles.homeImage}
      />
      <ThemedView style={logoContainerView}>
        <ThemedText
          type="title3"
          color={COLORS.green400}
          style={gStyles.space4}
        >
          FITTRACK
        </ThemedText>
      </ThemedView>
      <ThemedView style={[gStyles.flexCenter, { marginBottom: 70 }]}>
        <ThemedText style={[gStyles.mB8, styles.heading]}>
          Your Fitness Buddy.
        </ThemedText>
        <ThemedText color={COLORS.grey500} style={{ textAlign: "center" }}>
          A new and better way to stay fit. Set, track and share fitness goals
        </ThemedText>
      </ThemedView>
      <ThemedView style={[gStyles.flexCenter, gStyles.gap20]}>
        <ThemedButton
          title="I’M NEW HERE!"
          style={{ width: "100%" }}
          textStyle={styles.homeButtonText}
          isLink
          href="/signup"
        />
        <TouchableOpacity>
          <ThemedText color={COLORS.grey600}>
            I ALREADY HAVE AN ACCOUNT
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Index;
