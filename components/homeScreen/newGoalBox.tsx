import { TouchableOpacity, Image } from "react-native";
import { ThemedView, ThemedText } from "@/components/reusables";
import { COLORS, gStyles, icons, images } from "@/constants";
import { styles } from "./homeStyles";
import { Link } from "expo-router";

const NewGoalBox = () => {
  return (
    <ThemedView
      style={{
        ...styles.displayBox,
        height: 270,
        backgroundColor: COLORS.green50,
      }}
    >
      <ThemedView style={[gStyles.flexRowSpace, gStyles.mB20]}>
        <ThemedText type="defaultSemiBold" color={COLORS.black}>
          You don’t have an active streak
        </ThemedText>
        <TouchableOpacity>
          <icons.shareIcon />
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={gStyles.gap14}>
        <ThemedText type="small">
          But, you don’t have to worry cos that’s easy to fix. Adding a goal is
          the first step to streak city, you should do that.
        </ThemedText>
        <Link href="/addGoal" asChild style={[gStyles.flexRow, gStyles.gap6]}>
          <TouchableOpacity>
            <ThemedText type="title" color={COLORS.green800}>
              +
            </ThemedText>
            <ThemedText type="smallBold" color={COLORS.green800}>
              CREATE NEW GOAL
            </ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>
      <ThemedView>
        <Image
          source={images.waterBottleImage}
          resizeMode="contain"
          style={{ position: "absolute", right: -20, bottom: -119 }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default NewGoalBox;
