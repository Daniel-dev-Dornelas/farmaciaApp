import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { images } from "../../../assets/img";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.option}>
        <Image source={images.home} style={styles.optionIcon} />
        <Text style={styles.optionText}>Home</Text>
      </View>
      <View style={styles.option}>
        <Image source={images.box} style={styles.optionIcon} />
        <Text style={styles.optionText}>Pedidos</Text>
      </View>
      <View style={styles.option}>
        <Image source={images.loyalty} style={styles.optionIcon} />
        <Text style={styles.optionText}>Ofertas</Text>
      </View>
      <View style={styles.option}>
        <Image source={images.service} style={styles.optionIcon} />
        <Text style={styles.optionText}>Serviços</Text>
      </View>
      <View style={styles.option}>
        <Image source={images.profile} style={styles.optionIcon} />
        <Text style={styles.optionText}>Perfil</Text>
      </View>
    </View>
  );
}
