// placeholder file
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const photoNumber = number;



export const SavedPhotos = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='{photoNumber}_of_photos' onPress={() => onPress(savedPhotosBtn)}>
            <Text style={styles.button_text}>({photoNumber}_of_photos)</Text>
            </TouchableOpacity>
        </View>
    )
}