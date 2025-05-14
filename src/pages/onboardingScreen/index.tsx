import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { images } from "../../../assets/img";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { LinearGradient } from "expo-linear-gradient";
import { Container } from "../../components";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingScreen"
>;

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={images.plano_de_fundo_drogaria} style={styles.image} />
        <LinearGradient
          colors={["transparent", "#ffffff"]}
          style={styles.gradient}
          locations={[0.6, 1]}
        />
      </View>

      <Container variant="main">
        <View style={styles.centerImageContainer}>
          <Image
            source={images.compre_online} // Substitua pelo nome da sua segunda imagem
            style={styles.centerImage}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Compre online e{"\n"}receba onde quiser
          </Text>
          <Text style={styles.subtitleText}>
            seja no conforto da sua casa, ou retirando na loja, seu pedido
            chegará até você.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Comece a usar</Text>
        </TouchableOpacity>
      </Container>
    </View>
  );
};

export default OnboardingScreen;
