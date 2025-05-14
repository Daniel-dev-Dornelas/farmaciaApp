import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../../../assets/img";

export default function HomeHeader() {
  return (
    <ImageBackground
      source={images.plano_de_fundo_drogaria}
      style={styles.header}
      imageStyle={styles.image}
    >
      <LinearGradient
        colors={["transparent", "#00ADEF"]}
        style={styles.gradient}
        locations={[0.6, 1]}
      />
      <View style={styles.box}>
        <View style={styles.nav}>
          <Image source={images.bell} style={styles.icon} />
          <Image source={images.shopping_cart} style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.searchbar}>
          <TextInput placeholder="O que está buscando?" />
          <Image source={images.search} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
