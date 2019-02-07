// generic example react app file
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Flooring } from '../Flooring';
import { SavedPhotos } from '../SavedPhotos';
import { CameraLauncher } from '../CameraLauncher';
import { Comments } from '../Comments';
import { FloorLevel } from '../FloorLevel';
import { WallsAndPaint } from '../WallsAndPaint';


export default class KnockKitchenDetail extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
        this.state = {
            text: '',
            floor: null,
            floorLevel: null,
            numberPhotos: null,
            ceiling: null,
            ceilingCondition: null,
            wallCondition: null,
            addComments: null,
            cameraLauncher: null
        }
    }


    render() {
        return (
            <View style={styles.container} >
                <Text testID="room_layout_text" style={styles.text}>
                    {this.state.text('Room Layout')}
                </Text>
                <Text testID="kitchen_info_text" style={styles.text}>
                    {this.state.text('Take photos from opposite corners of the room')}
                </Text>
                <Text testID="savedPhotos" style={styles.text}>
                    {this.state.numberPhotos.savedPhotos}
                </Text>
                <CameraLauncher onPress={this.onButtonPress} selectedType={this.state.numberPhotos.savedPhotos} />
                <Text testID="addCommentsBtn" style={styles.text}>
                    {this.state.addComments}
                </Text>
                <Comments onPress={this.onButtonPress} selectedType={this.state.addComments} />
                <Text testID="floorLevelText" style={styles.text}>
                    {this.state.text('Floor Level')}
                </Text>
                    <Text testID="selectedFloorLevel" style={styles.text}>
                         {this.state.floorLevel}
                    </Text>
                    <FloorLevel onPress={this.onButtonPress} selectedType={this.state.floorLevel} />
                <Text testID="wallConditionText" style={styles.text}>
                    {this.state.text('Walls / Paint')}
                </Text>
                    <Text testID="selectedWallCondition" style={styles.text}>
                        {this.state.wallCondition}
                    </Text>
                    <WallsAndPaint onPress={this.onButtonPress} selectedType={this.state.wallCondition} />
                    <Text testID="ceilingText" style={styles.text}>
                    {this.state.text('Ceiling')}
                </Text>
                    <Text testID="selectedCeilingType" style={styles.text}>
                        {this.state.ceiling}
                    </Text>
                    <Ceiling onPress={this.onButtonPress} selectedType={this.state.ceiling} />
                    <Text testID="selectedCeilingCondition" style={styles.text}>
                        {this.state.ceilingCondition}
                    </Text>
                    <Ceiling onPress={this.onButtonPress} selectedType={this.state.ceilingCondition} />
                <Text testID="flooringText" style={styles.text}>
                    {this.state.text('Flooring')}
                </Text>
                    <Text testID="selectedFlooringType" style={styles.text}>
                        {this.state.floor}
                    </Text>
                <Flooring onPress={this.onButtonPress} selectedType={this.state.floor} />
            </View>
        );
    }

    onButtonPress(savedPhotos){
        this.setState({
            savedPhotos
        });
    }

    onButtonPress(cameraLauncher){
        this.setState({
            cameraLauncher
        });
    }

    onButtonPress(addComment){
        this.setState({
            addComment
        });
    }

    onButtonPress(floorLevel){
        this.setState({
            floorLevel
        });
    }

    onButtonPress(wallCondition){
        this.setState({
            wallCondition
        });
    }

    onButtonPress(ceiling){
        this.setState({
            ceiling
        });
    }

    onButtonPress(ceilingCondition){
        this.setState({
            ceilingCondition
        });
    }

    onButtonPress(floor){
        this.setState({
            floor
        });
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        marginBottom: 30
    },
    button_text: {
        color: 'blue',
        marginBottom: 20
    }
});