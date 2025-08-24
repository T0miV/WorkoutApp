import React from "react";
import { View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import styles from "../styles/HomeScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Push" onPress={() => navigation.navigate("Workout", { type: "Push" })} />
      </View>
      <View style={styles.button}>
        <Button title="Pull" onPress={() => navigation.navigate("Workout", { type: "Pull" })} />
      </View>
      <View style={styles.button}>
        <Button title="Legs" onPress={() => navigation.navigate("Workout", { type: "Legs" })} />
      </View>
    </View>
  );
}
