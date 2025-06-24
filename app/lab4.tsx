import vacationDestinations from "../lib/vacationDestinations";
import { VacationDestination } from "../lib/vacationDestinations";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
const VacationList: React.FC = () => {
  const [destinations] = useState<VacationDestination[]>(vacationDestinations);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacation Destinations</Text>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/vacation/${item.id}`)}>
            <Text style={styles.item}>{item.location}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    padding: 10,
    textTransform: "capitalize",
    color: "blue",
  },
});
export default VacationList;