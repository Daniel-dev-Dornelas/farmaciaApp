import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 135,
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
  box: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    bottom: 0,
    position: "absolute",
  },
  nav: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFFFFFCC",
    flexDirection: "row",
    borderRadius: 15,
    alignSelf: "flex-start",
    marginBottom: 5,
    gap: 10
  },
  searchbar: {
    backgroundColor: "#FFFFFFCC",
    borderColor: "#00ADEF",
    borderWidth: 1,
    width: "100%",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
