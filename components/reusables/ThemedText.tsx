import { Text, type TextProps, StyleSheet } from "react-native";
import { SIZES, FONT } from "@/constants";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?:
    | "default"
    | "title"
    | "title2"
    | "title3"
    | "title4"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
};

export function ThemedText({
  style,
  color,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "title2" ? styles.title2 : undefined,
        type === "title3" ? styles.title3 : undefined,
        type === "title4" ? styles.title4 : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
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
});
