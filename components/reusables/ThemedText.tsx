import { Text, type TextProps, StyleSheet } from "react-native";
import { SIZES, FONT, COLORS } from "@/constants";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?:
    | "default"
    | "defaultBig"
    | "title"
    | "title2"
    | "title3"
    | "title4"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small"
    | "smallMedium"
    | "smallBold"
    | "smaller"
    | "smallest";
};

export function ThemedText({
  style,
  color = COLORS.grey500,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "defaultBig" ? styles.defaultBig : undefined,
        type === "title" ? styles.title : undefined,
        type === "title2" ? styles.title2 : undefined,
        type === "title3" ? styles.title3 : undefined,
        type === "title4" ? styles.title4 : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "small" ? styles.small : undefined,
        type === "smallMedium" ? styles.smallMedium : undefined,
        type === "smallBold" ? styles.smallBold : undefined,
        type === "smaller" ? styles.smaller : undefined,
        type === "smallest" ? styles.smallest : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large,
  },
  defaultBig: {
    fontFamily: FONT.regular,
    fontSize: 18,
    lineHeight: SIZES.large,
  },
  defaultSemiBold: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    lineHeight: SIZES.large,
  },
  title2: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge,
  },
  title3: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    lineHeight: SIZES.xxLarge,
  },
  title4: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    lineHeight: SIZES.xxxLarge,
  },
  subtitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
  link: {
    fontFamily: FONT.regular,
    lineHeight: SIZES.xxLarge,
    fontSize: SIZES.medium,
    color: "#0a7ea4",
  },
  small: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
  smallMedium: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
  },
  smallBold: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small2,
  },
  smaller: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xSmall,
  },
  smallest: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxSmall,
  },
});
