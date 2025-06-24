import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import vacationDestinations, { VacationDestination } from '../lib/vacationDestinations';

type WikiData = {
  extract: string;
  thumbnail?: {
    source: string;
  };
};

export default function Lab4() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [wikiData, setWikiData] = useState<WikiData | null>(null);
  const [loading, setLoading] = useState(false);

  const getCityName = (location: string) => {
    return location.split(',')[0].trim(); // e.g., "Paris, France" → "Paris"
  };

  const handleSelect = async (destination: VacationDestination) => {
    if (selectedId === destination.id) {
      setSelectedId(null);
      setWikiData(null);
      return;
    }

    setSelectedId(destination.id);
    setLoading(true);

    const city = getCityName(destination.location);

    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`);
      const data = await res.json();
      setWikiData(data);
    } catch (err) {
      setWikiData({ extract: 'Failed to load city info.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Vacation Destinations</Text>
      {vacationDestinations.map((destination) => (
        <View key={destination.id} style={styles.card}>
          <TouchableOpacity onPress={() => handleSelect(destination)}>
            <Text style={styles.city}>{destination.location}</Text>
          </TouchableOpacity>

          {selectedId === destination.id && (
            <View style={styles.details}>
              <Text>Price: ${destination.price}</Text>
              <Text>Avg Temp: {destination.averageYearlyTemperature}°C</Text>

              {loading ? (
                <ActivityIndicator size="small" />
              ) : wikiData ? (
                <>
                  {wikiData.thumbnail && (
                    <Image
                      source={{ uri: wikiData.thumbnail.source }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  )}
                  <Text style={styles.description}>{wikiData.extract}</Text>
                </>
              ) : null}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    marginBottom: 20,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9'
  },
  city: {
    fontSize: 18,
    color: '#0077cc',
    fontWeight: 'bold'
  },
  details: {
    marginTop: 10
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 10,
    borderRadius: 6
  },
  description: {
    marginTop: 10,
    fontSize: 14
  }
});
