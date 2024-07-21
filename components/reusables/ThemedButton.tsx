import React, { ComponentProps } from "react";
import { Link } from "expo-router";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TextProps,
  type TouchableOpacityProps,
  TextStyle,
  ImageStyle,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { SIZES, FONT, COLORS } from "@/constants";

export type ThemedButtonProps = Omit<ComponentProps<typeof Link>, "href"> & {
  title: string;
  textStyle?: TextStyle;
  isLink?: boolean;
  href?: string;
  color?: string;
  backgroundColor?: string;
  type?: "default" | "primary" | "secondary" | "black" | "outline" | "link";
  textProps?: TextProps;
  icon?: ImageSourcePropType;
  iconText?: string;
  iconTextStyle?: TextStyle;
  iconStyle?: ImageStyle;
};

export function ThemedButton({
  title,
  color,
  isLink,
  href,
  backgroundColor,
  type = "default",
  style,
  textStyle,
  textProps,
  icon,
  iconText,
  iconStyle,
  iconTextStyle,
  ...rest
}: ThemedButtonProps) {
  const ButtonContent = (
    <View style={styles.content}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      {iconText && <Text style={[styles.icon, iconTextStyle]}>{iconText}</Text>}
      <Text
        style={[
          type === "link" ? styles.linkText : undefined,
          color ? { color } : undefined,
          textStyle,
        ]}
        {...textProps}
      >
        {title}
      </Text>
    </View>
  );

  if (isLink) {
    return (
      <Link
        href={href ? href : ""}
        asChild
        style={[
          styles.base,
          type === "default" ? styles.default : undefined,
          type === "primary" ? styles.primary : undefined,
          type === "secondary" ? styles.secondary : undefined,
          type === "outline" ? styles.outline : undefined,
          type === "black" ? styles.black : undefined,
          type === "link" ? styles.link : undefined,
          backgroundColor ? { backgroundColor } : undefined,
          style,
        ]}
        {...rest}
      >
        <TouchableOpacity>{ButtonContent}</TouchableOpacity>
      </Link>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.base,
          type === "default" ? styles.default : undefined,
          type === "primary" ? styles.primary : undefined,
          type === "secondary" ? styles.secondary : undefined,
          type === "outline" ? styles.outline : undefined,
          type === "black" ? styles.black : undefined,
          type === "link" ? styles.link : undefined,
          backgroundColor ? { backgroundColor } : undefined,
          style,
        ]}
        {...rest}
      >
        {ButtonContent}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    borderRadius: SIZES.small,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: SIZES.small,
  },
  default: {
    backgroundColor: COLORS.green800,
  },
  black: {
    backgroundColor: COLORS.black,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.green800,
  },
  link: {
    backgroundColor: "transparent",
  },
  linkText: {
    color: COLORS.red400,
    textDecorationLine: "underline",
  },
});

export default ThemedButton;
