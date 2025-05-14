import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, 
  },
});
