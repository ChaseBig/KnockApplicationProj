//placeholder file
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const floorType = {
    Tile:'Tile',
    Hardwood:'Hardwood',
    Carpet: 'Carpet',
    Vinyl: 'Vinyl',
    Laminate: 'Laminate',
    Other: 'Other'
}

export const Flooring = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='floor_button_tile' onPress={() => onPress(floorType.Tile)}>
                <Text style={styles.button_text}>(floorType.Tile)</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='floor_button_hardwood' onPress={() => onPress(floorType.Hardwood)}>
                <Text style={styles.button_text}>(floorType.Hardwood)</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='floor_button_carpet' onPress={() => onPress(floorType.Carpet)}>
                <Text style={styles.button_text}>(floorType.Carpet)</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='floor_button_vinyl' onPress={() => onPress(floorType.Vinyl)}>
                <Text style={styles.button_text}>(floorType.Vinyl)</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='floor_button_laminate' onPress={() => onPress(floorType.Laminate)}>
                <Text style={styles.button_text}>(floorType.Laminate)</Text>
            </TouchableOpacity>
            <TouchableOpacity testID='floor_button_other' onPress={() => onPress(floorType.Other)}>
                <Text style={styles.button_text}>(floorType.Other)</Text>
            </TouchableOpacity>
        </View>
    )
};