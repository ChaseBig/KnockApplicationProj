// placeholder file
import React from 'react';
import { Text, View } from 'react-native';


export const CameraLauncher = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='camera_launcher' onPress={() => onPress(buttonType.cameraLaunchIcon)}>
            <Text style={styles.button_text}>(buttonType.cameraLaunchIcon)</Text>
            </TouchableOpacity>
        </View>
    )
};