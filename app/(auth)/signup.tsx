import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "./authStyles";
import {
  ThemedText,
  ThemedButton,
  ThemedView,
  ThemedTextInput,
} from "@/components/reusables";
import { images, COLORS, SIZES, gStyles } from "@/constants";

const Signup = () => {
  return (
    <SafeAreaView style={[gStyles.container, gStyles.pH24, gStyles.pT130]}>
      <ThemedView>
        <ThemedText type="title" style={gStyles.mB26}>
          The first step to success
        </ThemedText>
        <ThemedView style={[gStyles.gap18, gStyles.wFull, gStyles.mB30]}>
          <ThemedTextInput placeholder="Email" value="" />
          <ThemedTextInput placeholder="Password" value="" />
        </ThemedView>
        <ThemedButton
          title="CONTINUE"
          style={gStyles.wFull}
          textStyle={styles.buttonText}
          isLink
          href="/personalization"
        />
        <ThemedView style={styles.separatorContainer}>
          <View style={styles.separator} />
          <ThemedText color={COLORS.grey300}>OR</ThemedText>
          <View style={styles.separator} />
        </ThemedView>
        <ThemedView style={[gStyles.mT16, gStyles.mB40, gStyles.gap22]}>
          <ThemedButton
            title="CONTINUE WITH GOOGLE"
            style={gStyles.wFull}
            textStyle={{ color: COLORS.black2, fontSize: SIZES.small }}
            type="outline"
            icon={images.googleIcon}
            iconStyle={styles.icon}
          />
          <ThemedButton
            title="CONTINUE WITH APPLE"
            style={gStyles.wFull}
            textStyle={{ fontSize: SIZES.small, color: COLORS.white }}
            type="black"
            icon={images.appleIcon}
            iconStyle={styles.icon}
          />
        </ThemedView>
        <ThemedView style={styles.switchContainer}>
          <ThemedText style={styles.switchText}>
            ALREADY HAVE AN ACCOUNT?
          </ThemedText>
          <Link href="/signin" style={{ color: COLORS.green800 }}>
            LOGIN
          </Link>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Signup;
