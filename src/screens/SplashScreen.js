import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace("Home");
    }, 5000);
  }, []);

  return (
    <View style={{height: '100%', alignItems: 'center', justifyContent: 'center', gap: 10, }}>
      <Image source={require("../../assets/wave-sound.png")} style={{ width: 200, height: 200, alignItems: 'center', tintColor: 'green'}} />
      <Text style={{ fontSize: 36, fontWeight: 'bold',}}>Welcome</Text>
    </View>
  );
};

export default SplashScreen;
