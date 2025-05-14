import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  option:{
    flexDirection: 'column',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionIcon: {
    width: 35,
    height: 35
  },
  optionText: {
    fontSize: 11,
    fontWeight: 'semibold'
  }
});
