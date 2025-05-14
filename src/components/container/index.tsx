import React from "react";
import { View } from "react-native";
import { styles } from "./styles";


type ContainerProps = {
  variant?: "card" | "main" | "mainBlue";
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  variant,
  children,
}) => {
  const containerStyle = [
    styles.container,
    variant === "card" && styles.card,
    variant === "main" && styles.main,
    variant === "mainBlue" && styles.mainBlue,
  ];

  return <View style={containerStyle}>{children}</View>;
};



export default Container;
