import React from "react";
import { View } from "react-native";
import { styles } from "./styles";


type ContainerProps = {
  variant?: "header" | "main";
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  variant = "main",
  children,
}) => {
  const containerStyle = [
    styles.container,
    variant === "header" && styles.header,
    variant === "main" && styles.main,
  ];

  return <View style={containerStyle}>{children}</View>;
};



export default Container;
