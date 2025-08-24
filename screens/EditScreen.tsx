import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import styles from "../styles/EditScreenStyles";

import workoutdata from "../workoutdata.json";

export const workouts = workoutdata;

type WorkoutType = "Push" | "Pull" | "Legs";

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

export default function EditScreen({ route, navigation }: Props) {
  const { type, index } = route.params as { type: WorkoutType; index: number };
  const exercise = workouts[type][index];

  const [weight, setWeight] = useState(exercise.weight);
  const [reps, setReps] = useState(exercise.reps.join(", "));

  const saveChanges = () => {
    workouts[type][index].weight = weight;
    workouts[type][index].reps = reps.split(",").map((r: string) => r.trim());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{exercise.name}</Text>
    <TextInput
      value={weight}
      onChangeText={setWeight}
      style={styles.input}
    />
    <TextInput
      value={reps}
      onChangeText={setReps}
      style={styles.input}
    />
    <Button title="Tallenna" onPress={saveChanges} />
  </View>
  );
}
