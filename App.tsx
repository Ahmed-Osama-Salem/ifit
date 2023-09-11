import { StatusBar } from "expo-status-bar";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const ref = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    setTimeout(() => ref.current?.play());

    return () => {
      ref.current?.reset();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          ref={ref}
          autoPlay
          source={require("./assets/logo.json")}
          loop
          style={{
            width: "100%",
            height: "auto",
          }}
          autoSize
          resizeMode="cover"
          speed={0.9}
        />
        <Text
          style={{
            fontSize: 24,
            color: "#231A16",
            fontWeight: "500",
          }}
        >
          IFit
        </Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E117",
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
