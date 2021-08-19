import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    width: "100%",
    maxHeight: 320,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
  },

  button: {
    height: 50,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 30,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    display: "flex",
    justifyContent: "center",
  },

  text: {
    fontSize: 21,
    color: "#d50000",
  },
});
