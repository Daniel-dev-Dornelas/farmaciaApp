import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../../../assets/img";

export default function OnboardingHeader() {
  return (
    <View style={styles.header}>
      <Image source={images.header} style={styles.image} />
      <LinearGradient
        colors={["transparent", "#ffffff"]}
        style={styles.gradient}
        locations={[0.6, 1]}
      />
    </View>
  );
};

