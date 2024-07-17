import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./authStyles";
import {
  ThemedText,
  ThemedButton,
  ThemedView,
  ThemedTextInput,
} from "@/components/reusables";
import { COLORS, gStyles } from "@/constants";
import { Link } from "expo-router";

const Signin = () => {
  return (
    <SafeAreaView style={[gStyles.container, gStyles.pH24, gStyles.pT130]}>
      <ThemedView>
        <ThemedText type="title" style={gStyles.mB26}>
          Welcome back Champ!
        </ThemedText>
        <ThemedView style={[gStyles.gap18, gStyles.wFull, gStyles.mB30]}>
          <ThemedTextInput placeholder="Email" value="" />
          <ThemedTextInput placeholder="Password" value="" />
        </ThemedView>
        <ThemedButton
          title="LOGIN"
          style={[gStyles.wFull, gStyles.mB40]}
          textStyle={styles.buttonText}
        />
        <ThemedView style={styles.switchContainer}>
          <ThemedText style={styles.switchText}>
            DON’T HAVE AN ACCOUNT? REGISTER
          </ThemedText>
          <Link href="/signin" style={{ color: COLORS.green800 }}>
            REGISTER
          </Link>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Signin;
