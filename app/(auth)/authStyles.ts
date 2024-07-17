import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "@/constants";

export const styles = StyleSheet.create({
  buttonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white,
    fontWeight: 600,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
  },
  separator: {
    width: "44%",
    height: 2,
    marginVertical: 8,
    borderBottomColor: COLORS.grey400,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  switchText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
