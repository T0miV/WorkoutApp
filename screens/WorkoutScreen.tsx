import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import styles from "../styles/WorkoutScreenStyles";

import workoutdata from "../workoutdata.json";

const workouts = workoutdata;

type WorkoutType = "Push" | "Pull" | "Legs";

type Props = NativeStackScreenProps<RootStackParamList, "Workout">;

export default function WorkoutScreen({ route, navigation }: Props) {
  const { type } = route.params as { type: WorkoutType };
  const data = workouts[type];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            
            <Text style={styles.itemTitle}>
            {item.name} - {item.weight}
            </Text>

            <Text style={styles.repsText}>{item.reps.join(", ")}</Text>
            <Button
              title="Muokkaa"
              onPress={() => navigation.navigate("Edit", { type, index })}
            />
          </View>
        )}
      />
    </View>
  );
}
