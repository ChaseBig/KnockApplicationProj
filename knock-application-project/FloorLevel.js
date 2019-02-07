// placeholder file
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';


export const FloorLevel = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='floor_level_lower' onPress={() => onPress(floorLevel.Lower)}>
            <Text style={styles.button_text}>(floorLevel.Lower)</Text>
            </TouchableOpacity>
        </View>
    )
};