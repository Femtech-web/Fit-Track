import { TouchableOpacity, type TouchableOpacityProps } from "react-native";

export type IconContainerProps = TouchableOpacityProps & {
  backgroundColor?: string;
  size?: number;
};

export function IconContainer({
  style,
  size = 40,
  backgroundColor,
  ...otherProps
}: IconContainerProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          width: size,
          height: size,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size / 2,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
