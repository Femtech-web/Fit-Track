const COLORS = {
  primary: "#036B26",
  secondary: "#BFFD76",

  green50: "#E7F6EC",
  green200: "#F4FFF8",
  green300: "#40B869",
  green400: "#0F973D",
  green500: "#099137",
  green800: "#015B20",

  lightGreen: "#BFFD76",
  brown: "#FFDAA1",
  red400: "#D42620",

  grey50: "#F9FAFB",
  grey75: "#F7F9FC",
  grey100: "#F0F2F5",
  grey200: " #E4E7EC",
  grey300: "#D0D5DD",
  grey400: "#98A2B3",
  grey500: "#667185",
  grey600: "#475367",
  grey700: "#344054",
  grey900: "#101928",

  white: "#FFF",
  black: "#000",
  black2: "#292D32",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  small2: 14,
  medium: 16,
  large: 20,
  xLarge: 25,
  xxLarge: 32,
  xxxLarge: 64,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
