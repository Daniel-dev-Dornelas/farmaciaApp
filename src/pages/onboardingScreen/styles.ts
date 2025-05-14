import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "flex-start",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, 
  },
   centerImageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  centerImage: {
    width: 300, // Ajuste o tamanho conforme necessário
    height: 300,
    resizeMode: "contain", // Ou "cover", dependendo de como você quer ajustar a imagem
  },
  textContainer: {
    padding: 30, // opcional para espaçamento interno
    gap: 16
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00ADEF",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#00ADEF",
    textAlign: "center",
    marginTop: 8, // espaçamento entre os textos
  },
  navigateButton: {
    backgroundColor: "transparent",
    borderColor: "#00ADEF",
    color: "#00ADEF",
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    marginBottom: 40
  },
  buttonText: {
    color: "#00ADEF",
    fontWeight: "bold",
    fontSize: 18
  }
});
