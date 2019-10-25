import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    description={item.releaseYear}
                    image_url='https://cdn4.iconfinder.com/data/icons/movies-1-solid/60/009_-_Camera-512.png'
                />}
            />

    </View>
);

export default CustomListview;