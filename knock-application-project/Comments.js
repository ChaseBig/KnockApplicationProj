// placeholder file
import React from 'react';
import { Text, View } from 'react-native';


export const Comments = ({onPress})=> {
    return (
        <View>
            <TouchableOpacity testID='add_comments_btn' onPress={() => onPress(buttonType.addComments)}>
            <Text style={styles.button_text}>(buttonType.addComments)</Text>
        </TouchableOpacity>
            <TouchableOpacity testID='comments_launcher_icon' onPress={() => onPress(buttonType.launchCommentModal)}>
                <Text style={styles.button_text}>(buttonType.launchCommentModal)</Text>
            </TouchableOpacity>
        </View>
    )
};