import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    position: "absolute",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    fontSize: 31,
    fontWeight: "300",
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 54,
    marginTop: 400,
  },

  button: {
    width: "75%",
    height: 60,
    backgroundColor: "#7d0000",
    borderRadius: 50,
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 21,
    color: "#ffffff",
  },

  circle: {
    backgroundColor: "#ffffff",
    height: 10,
    width: 10,
    borderRadius: 50,
    marginHorizontal: 5,
    marginTop: 30,
  },

  circlesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
