import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  firstText: {
    fontSize: 21,
    color: "#ffffff",
    textAlign: "center",
  },

  superheroName: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
  },

  lastText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },

  textContainer: {
    backgroundColor: "#d50000",
    padding: 30,
  },

  icon: {
    color: "#ffffff",
    fontSize: 30,
    width: 40,
    height: 40,
  },

  buttonContainer: {
    position: "absolute",
    top: 30,
    left: 30,
    zIndex: 10,
  },
});
