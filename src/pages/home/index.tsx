import React from "react";
import { View, Text } from "react-native";
import { BlueButton } from "../../components";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    console.log("Botão da Home pressionado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home</Text>
      <Text style={styles.description}>
        Esta é uma tela inicial simples em React Native.
      </Text>
      <BlueButton title="Toque aqui" onPress={handlePress} />
      <Button onPress={() => navigation.navigate("OnboardingScreen")}>
        Go to Onboarding
      </Button>
    </View>
  );
};

export default Home;
