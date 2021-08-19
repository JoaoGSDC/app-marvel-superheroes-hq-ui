import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    marginBottom: -40,
  },

  textContainer: {
    display: "flex",
    height: "100%",
    marginBottom: -30,
  },

  title: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "700",
    color: "#212121",
  },

  price: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "500",
    color: "#212121",
  },
});
