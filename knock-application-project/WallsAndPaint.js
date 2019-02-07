// placeholder file
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const wallCondition = {
    Excellent: 'Excellent',
    Good: 'Good',
    Average: 'Average',
    Poor: 'Poor',
    Fix: 'Fix'
}

export const WallsAndPaint = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='wall_condition_excellent' onPress={() => onPress(wallCondition.Excellent)}>
            <Text style={styles.button_text}>(wallCondition.Excellent)</Text>
            </TouchableOpacity>
        </View>
    )
};
