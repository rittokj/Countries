import { StyleSheet } from "react-native";

const styles = (ios) =>
  StyleSheet.compose({
    container: {
      backgroundColor: ios ? "black" : "cyan",
    },
    imageStyles: {
      width: 200,
      height: 200,
    },
  });

export default styles;
