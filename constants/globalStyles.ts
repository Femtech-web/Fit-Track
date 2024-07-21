import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { COLORS } from "./theme";

type GlobalStyles = {
  activeOpacity: number;
  container: ViewStyle;
  flexCenter: ViewStyle;
  flexRow: ViewStyle;
  flexRowCenterAlign: ViewStyle;
  flexRowCenterJustify: ViewStyle;
  flexRowCenter: ViewStyle;
  flexRowSpace: ViewStyle;
  flexRowSpaceStart: ViewStyle;
  flex1: ViewStyle;
  flex2: ViewStyle;
  flex3: ViewStyle;
  flex4: ViewStyle;
  flex5: ViewStyle;
  wFull: ViewStyle;
  spacer24: ViewStyle;
  spacer48: ViewStyle;
  spacer64: ViewStyle;
  spacer88: ViewStyle;
  spacer128: ViewStyle;
  space2: TextStyle;
  space4: TextStyle;
  space6: TextStyle;
  space8: TextStyle;
  gap2: TextStyle;
  gap4: TextStyle;
  gap6: TextStyle;
  gap8: TextStyle;
  gap10: TextStyle;
  gap12: TextStyle;
  gap14: TextStyle;
  gap16: TextStyle;
  gap18: TextStyle;
  gap20: TextStyle;
  gap22: TextStyle;
  gap24: TextStyle;
  gap30: TextStyle;
  gap36: TextStyle;
  gap40: TextStyle;
  mB8: ViewStyle;
  mB10: ViewStyle;
  mB14: ViewStyle;
  mB16: ViewStyle;
  mB20: ViewStyle;
  mB22: ViewStyle;
  mB26: ViewStyle;
  mB28: ViewStyle;
  mB30: ViewStyle;
  mB40: ViewStyle;
  mB50: ViewStyle;
  mB60: ViewStyle;
  mB70: ViewStyle;
  mB80: ViewStyle;
  mB100: ViewStyle;
  mB120: ViewStyle;
  mB130: ViewStyle;
  mB150: ViewStyle;
  mL8: ViewStyle;
  mL16: ViewStyle;
  mR8: ViewStyle;
  mR16: ViewStyle;
  mR24: ViewStyle;
  mR48: ViewStyle;
  mR64: ViewStyle;
  mT4: ViewStyle;
  mT8: ViewStyle;
  mT16: ViewStyle;
  mT32: ViewStyle;
  mH24: ViewStyle;
  mV16: ViewStyle;
  mV24: ViewStyle;
  mV32: ViewStyle;
  mT40: ViewStyle;
  mT50: ViewStyle;
  mT60: ViewStyle;
  mT70: ViewStyle;
  mT80: ViewStyle;
  mT100: ViewStyle;
  mT120: ViewStyle;
  mT130: ViewStyle;
  mT150: ViewStyle;
  p4: ViewStyle;
  p8: ViewStyle;
  p16: ViewStyle;
  p24: ViewStyle;
  pH4: ViewStyle;
  pH8: ViewStyle;
  pH16: ViewStyle;
  pH24: ViewStyle;
  pV4: ViewStyle;
  pV8: ViewStyle;
  pV16: ViewStyle;
  pV24: ViewStyle;
  pV32: ViewStyle;
  pT8: ViewStyle;
  pT16: ViewStyle;
  pT24: ViewStyle;
  pT32: ViewStyle;
  pT40: ViewStyle;
  pT50: ViewStyle;
  pT100: ViewStyle;
  pT120: ViewStyle,
  pT130: ViewStyle,
  pT150: ViewStyle;
  pT200: ViewStyle;
  textCenter: TextStyle;
  iconContainer: ViewStyle;
};

const gStyles: GlobalStyles = {
  activeOpacity: 0.7,
  container: {
    justifyContent: "flex-start",
    backgroundColor: COLORS.white,
    flex: 1
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: "row"
  },
  flexRowCenterAlign: {
    alignItems: "center",
    flexDirection: "row"
  },
  flexRowCenterJustify: {
    justifyContent: "center",
    flexDirection: "row"
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexRowSpaceStart: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  spacer24: { height: 24 },
  spacer48: { height: 48 },
  spacer64: { height: 64 },
  spacer88: { height: 88 },
  spacer128: { height: 128 },

  wFull: { width: "100%" },

  space2: { letterSpacing: 2 },
  space4: { letterSpacing: 4 },
  space6: { letterSpacing: 6 },
  space8: { letterSpacing: 8 },

  gap2: { gap: 2 },
  gap4: { gap: 4 },
  gap6: { gap: 6 },
  gap8: { gap: 8 },
  gap10: { gap: 10 },
  gap12: { gap: 12 },
  gap14: { gap: 14 },
  gap16: { gap: 16 },
  gap18: { gap: 18 },
  gap20: { gap: 20 },
  gap22: { gap: 22 },
  gap24: { gap: 24 },
  gap30: { gap: 30 },
  gap36: { gap: 36 },
  gap40: { gap: 40 },

  mB8: { marginBottom: 8 },
  mB10: { marginBottom: 10 },
  mB14: { marginBottom: 14 },
  mB16: { marginBottom: 16 },
  mB20: { marginBottom: 20 },
  mB22: { marginBottom: 22 },
  mB26: { marginBottom: 26 },
  mB28: { marginBottom: 28 },
  mB30: { marginBottom: 30 },
  mB40: { marginBottom: 40 },
  mB50: { marginBottom: 50 },
  mB60: { marginBottom: 60 },
  mB70: { marginBottom: 70 },
  mB80: { marginBottom: 80 },
  mB100: { marginBottom: 100 },
  mB120: { marginBottom: 120 },
  mB130: { marginBottom: 130 },
  mB150: { marginBottom: 150 },
  mL8: { marginLeft: 8 },
  mL16: { marginLeft: 16 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },
  mT4: { marginTop: 4 },
  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },
  mT32: { marginTop: 32 },
  mT40: { marginTop: 40 },
  mT50: { marginTop: 50 },
  mT60: { marginTop: 60 },
  mT70: { marginTop: 70 },
  mT80: { marginTop: 80 },
  mT100: { marginTop: 100 },
  mT120: { marginTop: 120 },
  mT130: { marginTop: 130 },
  mT150: { marginTop: 150 },

  mH24: { marginHorizontal: 24 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },
  pT8: { paddingTop: 8 },
  pT16: { paddingTop: 16 },
  pT24: { paddingTop: 24 },
  pT32: { paddingTop: 32 },
  pT40: { paddingTop: 40 },
  pT50: { paddingTop: 50 },
  pT100: { paddingTop: 100 },
  pT120: { paddingTop: 120 },
  pT130: { paddingTop: 130 },
  pT150: { paddingTop: 150 },
  pT200: { paddingTop: 200 },

  pV4: { paddingVertical: 4 },
  pV8: { paddingVertical: 8 },
  pV16: { paddingVertical: 16 },
  pV24: { paddingVertical: 24 },
  pV32: { paddingVertical: 32 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 },

  textCenter: { textAlign: "center" },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
};

export default gStyles;
