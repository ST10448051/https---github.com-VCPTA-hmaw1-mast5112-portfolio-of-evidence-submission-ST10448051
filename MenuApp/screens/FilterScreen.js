// screens/FilterScreen.js
import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';

const FilterScreen = ({ menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filterMenu = (course) => menuItems.filter((item) => item.course === course);

  return (
    <View style={styles.container}>
      <Button title="Show Starters" onPress={() => setSelectedCourse('Starter')} />
      <Button title="Show Main Courses" onPress={() => setSelectedCourse('Main')} />
      <Button title="Show Desserts" onPress={() => setSelectedCourse('Dessert')} />
      <FlatList
        data={selectedCourse ? filterMenu(selectedCourse) : menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.dishName} - ${item.price}`}</Text>
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
});

export default FilterScreen;
