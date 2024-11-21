// screens/ManageMenuScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ManageMenuScreen = ({ menuItems, setMenuItems }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const addItem = () => {
    if (name && description && price && course) {
      setMenuItems([
        ...menuItems,
        { dishName: name, description, price, course },
      ]);
      setName('');
      setDescription('');
      setPrice('');
      setCourse('');
    }
  };

  const removeItem = (index) => {
    const updatedMenu = [...menuItems];
    updatedMenu.splice(index, 1);
    setMenuItems(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <TextInput placeholder="Course" value={course} onChangeText={setCourse} />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.dishName}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
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
});

export default ManageMenuScreen;
