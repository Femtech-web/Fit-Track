import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: COLORS.green50,
    minHeight: 55,
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  progressBar: {
    width: "100%",
    backgroundColor: COLORS.green500,
    height: 8,
    borderRadius: 10,
  },
  displayBox: {
    height: 180,
    backgroundColor: COLORS.green200,
    borderRadius: 12,
    alignItems: "center",
  },
  btn: { position: "absolute", bottom: 20, width: "100%" },
});