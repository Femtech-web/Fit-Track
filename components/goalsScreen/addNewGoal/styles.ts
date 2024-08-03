import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  customInputContainer: {
    backgroundColor: COLORS.grey75,
    borderRadius: 12,
    padding: 12,
    paddingBottom: 3,
    color: COLORS.black,
    zIndex: -1,
  },

  dropdownBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 0,
    paddingBottom: 8,
    marginTop: -6,
  },

  dropdownListContainer: {
    position: "absolute",
    width: "100%",
    top: "110%",
    backgroundColor: COLORS.grey100,
    borderRadius: 12,
    padding: 12,
    maxHeight: 200,
    zIndex: 10,
  },

  selectBoxContainer: {
    minHeight: 120,
    paddingHorizontal: 17,
  },

  outerCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: COLORS.green800,
  },

  checkboxDot: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.green800,
    borderRadius: 7 / 2,
  },
});
