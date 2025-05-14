import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#555",
  },
  elipse: {
    width: 70,
    height: 70,
  },
  row: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    width: '100%'
  },
  category: {
    width: 70,
    height: 100,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  productImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
  infoImage: {
    width: 30,
    height: 30,
  },
  infoTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 11,
  },
  info: {
    width: 94,
    height: 68,
    gap: 8,
    alignItems: "center",
  },
  cardHeader:{
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 16
  },
  combineIcon:{
    width:60,
    height:50
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  combineImage:{
     width: 300,
    height: 123,
  },
  serviceIcon:{
    width: 60,
    height: 60
  },
  serviceImage:{
    width: 215,
    height: 123,
    borderRadius: 15
  }
});
