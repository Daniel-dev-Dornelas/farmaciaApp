import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Container, Footer, HomeHeader } from "../../components";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { images } from "../../../assets/img";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Container>
      <HomeHeader />

      <Container variant="mainBlue">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
          <Container variant="card">
            <View style={styles.row}>
              <View style={styles.category}>
                <Image source={images.ellipse_1} style={styles.elipse} />
                <Text style={styles.categoryText}>Leve 3 Pague 2</Text>
              </View>
              <View style={styles.category}>
                <Image source={images.ellipse_2} style={styles.elipse} />
                <Text style={styles.categoryText}>Cosméticos</Text>
              </View>
              <View style={styles.category}>
                <Image source={images.ellipse_3} style={styles.elipse} />
                <Text style={styles.categoryText}>Cupom de Desconto</Text>
              </View>
              <View style={styles.category}>
                <Image source={images.ellipse_4} style={styles.elipse} />
                <Text style={styles.categoryText}>Oferta Relâmpago</Text>
              </View>
              <View style={styles.category}>
                <Image source={images.ellipse_5} style={styles.elipse} />
                <Text style={styles.categoryText}>Remédios</Text>
              </View>
            </View>
          </Container>

          <Container variant="card">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
            >
              <Image source={images.produto_dove} style={styles.productImage} />
              <Image source={images.produto_dove} style={styles.productImage} />
            </ScrollView>
          </Container>

          <Container variant="card">
            <View style={styles.row}>
              <View style={styles.info}>
                <Image source={images.truck} />
                <Text style={styles.infoTitle}>Frete Grátis</Text>
                <Text style={styles.infoText}>Acima de R$499</Text>
              </View>
              <View style={styles.info}>
                <Image source={images.fast} />
                <Text style={styles.infoTitle}>Entrega</Text>
                <Text style={styles.infoText}>Mais rápida</Text>
              </View>
              <View style={styles.info}>
                <Image source={images.credit_card} />
                <Text style={styles.infoTitle}>Parcele</Text>
                <Text style={styles.infoText}>Até 6x sem juros</Text>
              </View>
              <View style={styles.info}>
                <Image source={images.package} />
                <Text style={styles.infoTitle}>Retire</Text>
                <Text style={styles.infoText}>em qualquer loja</Text>
              </View>
            </View>
          </Container>

          <Container variant="card">
            <View style={styles.cardHeader}>
              <Image source={images.cupon} style={styles.combineIcon} />
              <Text style={styles.cardTitle}>Combine & Economize</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
            >
              <Image
                source={images.produto_fralda}
                style={styles.combineImage}
              />
              <Image
                source={images.produto_fralda}
                style={styles.combineImage}
              />
            </ScrollView>
          </Container>
          <Container variant="card">
            <View style={styles.cardHeader}>
              <Image source={images.health_metrics} style={styles.combineIcon} />
              <Text style={styles.cardTitle}>Serviços Gratuitos</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16 }}
            >
              <Image
                source={images.servico1}
                style={styles.serviceImage}
              />
              <Image
                source={images.servico2}
                style={styles.serviceImage}
              />
            </ScrollView>
          </Container>
        </ScrollView>
      </Container>

      <Footer />
    </Container>
  );
};

export default Home;
