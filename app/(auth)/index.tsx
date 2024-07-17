import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView, ThemedButton } from "@/components/reusables";
import { images, COLORS, FONT, SIZES, gStyles } from "@/constants";

const Index = () => {
  const containerView = [
    gStyles.wFull,
    gStyles.flexRowCenterJustify,
    gStyles.mV32,
    gStyles.spacer24,
  ];

  return (
    <SafeAreaView style={gStyles.container}>
      <Image
        source={images.welcomeImage}
        resizeMode="cover"
        style={styles.image}
      />
      <ThemedView style={containerView}>
        <ThemedText
          type="title3"
          color={COLORS.green400}
          style={gStyles.space4}
        >
          FITTRACK
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={[gStyles.flexCenter, gStyles.pH24, { marginBottom: 70 }]}
      >
        <ThemedText
          color={COLORS.grey500}
          style={[gStyles.mB8, styles.heading]}
        >
          Your Fitness Buddy.
        </ThemedText>
        <ThemedText color={COLORS.grey500} style={{ textAlign: "center" }}>
          A new and better way to stay fit. Set, track and share fitness goals
        </ThemedText>
      </ThemedView>
      <ThemedView style={[gStyles.flexCenter, gStyles.pH24, gStyles.gap20]}>
        <ThemedButton
          title="I’M NEW HERE!"
          style={{ width: "100%" }}
          textStyle={styles.buttonText}
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

const styles = StyleSheet.create({
  heading: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge,
  },
  image: {
    width: "100%",
    height: "48%",
  },
  buttonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: 600,
  },
});

export default Index;
