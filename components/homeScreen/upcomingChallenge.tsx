import { TouchableOpacity, Image, Button } from "react-native";
import {
  ThemedView,
  ThemedText,
  IconContainer,
  ThemedButton,
} from "@/components/reusables";
import { COLORS, gStyles, icons, images } from "@/constants";
import { styles } from "./homeStyles";

const UpcomingChallenge = () => {
  return (
    <ThemedView style={[{ height: 230, gap: 25 }]}>
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
      <ThemedView
        style={[
          { ...styles.displayBox },
          { height: 180, backgroundColor: COLORS.grey75 },
        ]}
      >
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
              <ThemedView
                style={{
                  width: "80%",
                  backgroundColor: COLORS.grey300,
                  height: 8,
                  borderRadius: 10,
                }}
              />
              <ThemedView
                style={[gStyles.flexRowCenterAlign, gStyles.gap8, gStyles.mB10]}
              >
                <ThemedText type="small">1 Day Left</ThemedText>
                <ThemedView
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: COLORS.grey500,
                    borderRadius: 7 / 2,
                  }}
                />
                <ThemedText type="small">Badge available</ThemedText>
              </ThemedView>
              <ThemedView>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.green800,
                    width: 100,
                    height: 30,
                    paddingVertical: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  }}
                >
                  <ThemedText color={COLORS.white}>Join</ThemedText>
                </TouchableOpacity>
              </ThemedView>
              <ThemedView style={gStyles.wFull}>
                <Image
                  source={images.person}
                  resizeMode="contain"
                  style={{
                    position: "absolute",
                    width: 32,
                    height: 32,
                    right: 80,
                    bottom: -12,
                    zIndex: -1,
                  }}
                />
                <Image
                  source={images.person}
                  resizeMode="contain"
                  style={{
                    position: "absolute",
                    width: 32,
                    height: 32,
                    right: 100,
                    bottom: -12,
                    zIndex: 1,
                  }}
                />
                <Image
                  source={images.avatarPlus}
                  resizeMode="contain"
                  style={{
                    position: "absolute",
                    width: 32,
                    height: 32,
                    right: 60,
                    bottom: -12,
                    zIndex: 6,
                  }}
                />
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default UpcomingChallenge;
