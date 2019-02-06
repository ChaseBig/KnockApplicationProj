import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import KnockKitchenDetail from '../knock-kitchen-detail';
import { Flooring } from '../Flooring';
import { SavedPhotos } from '../SavedPhotos';
import { CameraLauncher } from '../CameraLauncher';
import { Comments } from '../Comments';
import { FloorLevel } from '../FloorLevel';
import { WallsAndPaint } from '../WallsAndPaint';

describe('KnockKitchenDetail view suite', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should render Kitchen view correctly', () => {
        const tree = renderer.create(
            <KnockKitchenDetail />
        ).toJSON()

        expect( tree ).toMatchSnapshot();
    });

    it('should show info text for what to do in Room Layout container', () => {
        // Info text visible
        const wrapper = mount(<KnockKitchenDetail />);

        expect(wrapper.find({testID:'kitchen_info_text'}).text()).toBe('Take photos from opposite corners of the room');
    });

    it('tapping saved photos should launch saved photos pane when >1 photos exist',async () => {
        // Select the saved photos button
        const launchSavedPhotosViewer = jest.fn();
        const wrapper = mount(<SavedPhotos />);
        wrapper.setProps({ photoNumber: 2})
        wrapper.find({testID: '{photoNumber}_of_photos'}).simulate('press');
        expect(launchSavedPhotosViewer).toHaveBeenCalledTimes(1);
    });

    it('should launch the camera when no photos have been saved yet', () => {
        // Select the saved photos button
        const launchCamera = jest.fn();
        const wrapper = mount(<SavedPhotos />);
        wrapper.setProps({ photoNumber: 0})
        wrapper.find({testID: '{photoNumber}_of_photos'}).simulate('press');
        expect(launchCamera).toHaveBeenCalled();
    });

    it('should launch the camera when any camera icon is selected', () => {
        // Finds, selects, and launches native camera
        const launchNativeCamera = jest.fn();
        const wrapper = mount(<CameraLauncher />);
        wrapper.find({testID: 'camera_launcher'}).simulate('press');
        expect(launchNativeCamera).toHaveBeenCalled();
    });

    it('should launch the comment modal when any comment icon is selected', () => {
        // Find and select a comment icon button
        const launchCommentModal = jest.fn();
        const wrapper = mount(<Comments />);
        wrapper.find({testID: 'comments_launcher_icon'}).simulate('press');
        expect(launchCommentModal).toHaveBeenCalled();
    });

    it('should launch the comment modal when add comments button is pressed', () => {
        // Find and press the add comments button
        const launchAddCommentModal = jest.fn();
        const wrapper = mount(<Comments />);
        wrapper.find({testID: 'add_comments_btn'}).simulate('press');
        expect(launchAddCommentModal).toHaveBeenCalled();
    });

    it('should allow user to select a floor level', () => {
        // selects the floor level
        const selectFloorLevel = jest.fn();
        const wrapper = mount(<FloorLevel onPress={selectFloorLevel} />);
        wrapper.find({testID: 'floor_level_lower'}).simulate('press')
        expect(selectFloorLevel).toHaveBeenCalledWith('Lower')
    });

    it('should show changed state of the floor level', () => {
        // checks that the floor level state has changed
        const wrapper = mount(<KnockKitchenDetail />);
        const text = wrapper.find({testID: 'selectedFloorLevel'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('floorLevel')).toBe(null);

        wrapper.find({testID: 'floor_level_lower'}).simulate('press');
        expect(wrapper.find({testID:'selectedFloorLevel'}).text()).toBe('Lower');
        expect(wrapper.state('floorLevel')).toBe('Lower');
    });

    it('should allow user to select a condition for the walls and paint', () => {
        // selects the condition of the walls and paint
        const selectWallCondition = jest.fn();
        const wrapper = mount(<WallsAndPaint onPress={selectWallCondition} />);
        wrapper.find({testID: 'wall_condition_excellent'}).simulate('press')
        expect(selectWallCondition).toHaveBeenCalledWith('Excellent')
    });

    it('should show changed state of the selected wall condition', () => {
        // checks that the wall condition state has changed
        const wrapper = mount(<KnockKitchenDetail />);
        const text = wrapper.find({testID: 'selectedWallCondition'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('wallCondition')).toBe(null);

        wrapper.find({testID: 'wall_condition_excellent'}).simulate('press');
        expect(wrapper.find({testID:'selectedWallCondition'}).text()).toBe('Excellent');
        expect(wrapper.state('wallCondition')).toBe('Excellent');
    });

    it('should allow user to select a type of ceiling', () => {
        // selects the type of ceiling
        const selectCeilingType = jest.fn();
        const wrapper = mount(<Ceiling onPress={selectCeilingType} />);
        wrapper.find({testID: 'ceiling_type_spackled'}).simulate('press')
        expect(selectCeilingType).toHaveBeenCalledWith('Spackled')
    });

    it('should show changed state of the selected ceiling type', () => {
        // checks that the ceiling type state has changed
        const wrapper = mount(<KnockKitchenDetail />);
        const text = wrapper.find({testID: 'selectedCeilingType'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('ceiling')).toBe(null);

        wrapper.find({testID: 'ceiling_type_spackled'}).simulate('press');
        expect(wrapper.find({testID:'selectedCeilingType'}).text()).toBe('Spackled');
        expect(wrapper.state('ceiling')).toBe('Spackled');
    });

    it('should allow user to select a ceiling condition', () => {
        // selects the condition of the ceiling
        const selectCeilingCondition = jest.fn();
        const wrapper = mount(<Ceiling onPress={selectCeilingCondition} />);
        wrapper.find({testID: 'ceiling_condition_good'}).simulate('press')
        expect(selectCeilingCondition).toHaveBeenCalledWith('Good')
    });

    it('should show changed state of the selected ceiling condition', () => {
        // checks that the ceiling condition state has changed
        const wrapper = mount(<KnockKitchenDetail />);
        const text = wrapper.find({testID: 'selectedCeilingCondition'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('ceilingCondition')).toBe(null);

        wrapper.find({testID: 'ceiling_condition_good'}).simulate('press');
        expect(wrapper.find({testID:'selectedCeilingCondition'}).text()).toBe('Good');
        expect(wrapper.state('ceilingCondition')).toBe('Good');
    });

    it('should allow user to select a type of flooring', () => {
        // selects the type of flooring
        const selectFloorType = jest.fn();
        const wrapper = mount(<Flooring onPress={selectFloorType} />);
        wrapper.find({testID: 'flooring_type_tile'}).simulate('press')
        expect(selectFloorType).toHaveBeenCalledWith('Tile')
    });

    it('should show changed state of the selected flooring type', () => {
        // checks that the flooring type state has changed
        const wrapper = mount(<KnockKitchenDetail />);
        const text = wrapper.find({testID: 'selectedFlooringType'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('floor')).toBe(null);

        wrapper.find({testID: 'flooring_type_tile'}).simulate('press');
        expect(wrapper.find({testID:'selectedFlooringType'}).text()).toBe('Tile');
        expect(wrapper.state('floor')).toBe('Tile');
    });
});
