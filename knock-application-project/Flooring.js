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
        </View>
    )
};
