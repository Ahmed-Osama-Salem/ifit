import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("./assets/22.json")}
          autoPlay
          loop
          style={{
            width: 500,
            height: "auto",
          }}
        />
        <Text>Welcome to I-Fit</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
