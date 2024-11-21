// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ menuItems }) => {
  const calculateAverage = (course) => {
    const items = menuItems.filter((item) => item.course === course);
    if (items.length === 0) return 0;
    const total = items.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (total / items.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text>Starters Average Price: R{calculateAverage('Starter')}</Text>
      <Text>Main Courses Average Price: R{calculateAverage('Main')}</Text>
      <Text>Desserts Average Price: R{calculateAverage('Dessert')}</Text>
      <Text style={styles.total}>Total Menu Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  total: {
    fontSize: 18,
    marginVertical: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default HomeScreen;
