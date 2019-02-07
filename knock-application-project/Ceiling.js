// placeholder file
import React from 'react';
import { Text, View } from 'react-native';

const ceilingType = {
    Flat: 'Flat',
    Spackled: 'Spackled',
    Popcorn: 'Popcorn',
    Other: 'Other'
};

export const Ceiling = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='ceiling_type_spackled' onPress={() => onPress(ceilingType.Spackled)}>
            <Text style={styles.button_text}>(ceilingType.Spackled)</Text>
            </TouchableOpacity>
        </View>
    )
}