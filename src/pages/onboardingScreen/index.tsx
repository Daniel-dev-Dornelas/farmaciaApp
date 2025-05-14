import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { images } from "../../../assets/img";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Container, OnboardingHeader } from "../../components";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingScreen"
>;

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Container>
      <OnboardingHeader />

      <Container variant="main">
        <View style={styles.box}>
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
        </View>
      </Container>
    </Container>
  );
};

export default OnboardingScreen;
