import { TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  ThemedView,
  ThemedText,
  IconContainer,
  ThemedButton,
} from "@/components/reusables";
import { COLORS, gStyles, icons, images } from "@/constants";
import { styles as homeStyles } from "./homeStyles";

const UpcomingChallenge = () => {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={gStyles.flexRowSpace}>
        <ThemedText type="defaultSemiBold" color={COLORS.black}>
          Upcoming Challenges
        </ThemedText>
        <ThemedText
          type="defaultSemiBold"
          color={COLORS.black}
          style={{ marginBottom: -8 }}
        >
          &gt;
        </ThemedText>
      </TouchableOpacity>
      <ThemedView style={[{ ...homeStyles.displayBox }, styles.boxContainer]}>
        <ThemedView style={[gStyles.flexRow, gStyles.gap14]}>
          <IconContainer size={46} backgroundColor={COLORS.brown}>
            <Image
              source={images.weightLifting}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </IconContainer>
          <ThemedView style={gStyles.wFull}>
            <ThemedView style={gStyles.mB14}>
              <ThemedText type="smallBold" color={COLORS.black}>
                Road to 80KG
              </ThemedText>
              <ThemedText type="small">80kg weightlifting challenge</ThemedText>
            </ThemedView>
            <ThemedView style={[gStyles.wFull, gStyles.gap6]}>
              <ThemedView style={styles.progressBar} />
              <ThemedView
                style={[gStyles.flexRowCenterAlign, gStyles.gap8, gStyles.mB10]}
              >
                <ThemedText type="small">1 Day Left</ThemedText>
                <ThemedView style={styles.dot} />
                <ThemedText type="small">Badge available</ThemedText>
              </ThemedView>
              <ThemedView>
                <TouchableOpacity style={styles.joinBtn}>
                  <ThemedText color={COLORS.white}>Join</ThemedText>
                </TouchableOpacity>
              </ThemedView>
              <ThemedView style={gStyles.wFull}>
                <Image
                  source={images.person}
                  resizeMode="contain"
                  style={styles.imgOne}
                />
                <Image
                  source={images.person}
                  resizeMode="contain"
                  style={styles.imgTwo}
                />
                <Image
                  source={images.avatarPlus}
                  resizeMode="contain"
                  style={styles.imgThree}
                />
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { height: 230, gap: 25 },
  boxContainer: { height: 180, backgroundColor: COLORS.grey75 },
  progressBar: {
    width: "75%",
    backgroundColor: COLORS.grey300,
    height: 8,
    borderRadius: 10,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.grey500,
    borderRadius: 7 / 2,
  },
  joinBtn: {
    backgroundColor: COLORS.green800,
    width: 100,
    height: 30,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  imgOne: {
    position: "absolute",
    width: 32,
    height: 32,
    right: 80,
    bottom: -12,
    zIndex: -1,
  },
  imgTwo: {
    position: "absolute",
    width: 32,
    height: 32,
    right: 100,
    bottom: -12,
    zIndex: 1,
  },
  imgThree: {
    position: "absolute",
    width: 32,
    height: 32,
    right: 60,
    bottom: -12,
    zIndex: 6,
  },
});

export default UpcomingChallenge;
