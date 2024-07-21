import React, { Dispatch, SetStateAction } from "react";
import { Image, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView, ThemedButton } from "@/components/reusables";
import { images, COLORS, gStyles } from "@/constants";
import { styles } from "../../app/(auth)/authStyles";

interface IProps {
  setPersonalizationProgress: Dispatch<SetStateAction<number>>;
}

const HomeScreen: React.FC<IProps> = ({ setPersonalizationProgress }) => {
  const sharedLayoutStyle = [gStyles.wFull, gStyles.flexCenter];

  const handleContinue = () => setPersonalizationProgress(2);

  return (
    <ThemedView style={{ flex: 1 }}>
      <Image
        source={images.onboardingImage}
        resizeMode="cover"
        style={styles.homeImage}
      />
      <ThemedView style={[...sharedLayoutStyle, gStyles.mT32, gStyles.mB100]}>
        <ThemedText style={gStyles.mB16} color={COLORS.grey500}>
          Welcome to Fitrackr,
        </ThemedText>
        <ThemedText type="title2" style={gStyles.mB10}>
          We’re glad to have you!
        </ThemedText>
        <ThemedText color={COLORS.grey500} style={gStyles.textCenter}>
          Before you complete your account creation process we’ll like to ask
          you a few questions to help us personalize your experience
        </ThemedText>
      </ThemedView>
      <ThemedView style={[...sharedLayoutStyle, gStyles.gap20]}>
        <ThemedButton
          title="GET STARTED"
          style={{ width: "100%" }}
          textStyle={styles.homeButtonText}
          onPress={handleContinue}
        />
        <TouchableOpacity>
          <ThemedText color={COLORS.grey600}>SKIP</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default HomeScreen;
