import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const People = () => {
  return (
    <View style={styles.container}>
      {/* Card 1 */}
      <View style={styles.card}>
      <View style={styles.top}>
        <Text style={styles.cardText}>Card 1</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Card 1</Text>
      </View>
      </View>

      {/* Card 2 */}
      <View style={styles.secondcard}>
      <View style={styles.top}>
        <Text style={styles.cardText}>Card 1</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Card 1</Text>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCard: {
    backgroundColor: 'lightcoral',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default People;
