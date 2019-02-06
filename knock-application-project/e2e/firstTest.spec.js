// detox text, can be run on iOS or Android

describe('Room Layout - Kitchen', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should render Kitchen view', async () => {
        await expect(element(by.id('styles.container'))).toBeVisible();
        await expect(element(by.text('Kitchen'))).toBeVisible();
        await expect(element(by.text('Room Layout'))).toBeVisible();
    });

    it('should show informative text upon load', async () => {
        await expect(element(by.text('Take photos from opposite corners of the room'))).toBeVisible();
    });

    it('should launch photo viewer when I tap the saved photos button', async () => {
        await element(by.id('{2}_of_photos')).tap();
        await expect(element(by.id('saved_photos_container'))).toBeVisible();
        await expect(element(by.text('2 Photos'))).toBeVisible();
    });

    it('should launch add comment modal when I tap the AddComments button', async () => {
        await element(by.id('add_comments_btn')).tap();
        await expect(element(by.id('add_comment_modal'))).toBeVisible();
    });

    it('should load Floor Level container and illuminate buttons', async () => {
        await expect(element(by.text('Floor Level'))).toBeVisible();
        await expect(element(by.id('floor_level_lower'))).toBeVisible();
        await expect(element(by.id('floor_level_Main'))).toBeVisible();
        await expect(element(by.id('floor_level_Upper'))).toBeVisible();
        await element(by.id('floor_level_Lower')).tap();
        await expect(element(by.id('emphasized.floor_level_lower'))).toBeVisible();
    });

    it('should load wall and paint condition icons and illuminate selections', async () => {
        await expect(element(by.text('Walls / Paint'))).toBeVisible();
        await expect(element(by.id('wall_condition_Fix'))).toBeVisible();
        await expect(element(by.id('wall_condition_Paintbrush'))).toBeVisible();
        await expect(element(by.id('wall_condition_Poor'))).toBeVisible();
        await expect(element(by.id('wall_condition_PoorFace'))).toBeVisible();
        await expect(element(by.id('wall_condition_Average'))).toBeVisible();
        await expect(element(by.id('wall_condition_AverageFace'))).toBeVisible();
        await expect(element(by.id('wall_condition_Good'))).toBeVisible();
        await expect(element(by.id('wall_condition_GoodFace'))).toBeVisible();
        await element(by.id('wall_condition_Excellent')).tap();
        await expect(element(by.id('emphasized.wall_condition_ExcellentFace'))).toBeVisible();
    });

    it('should load wall and paint condition icons and illuminate selections', async () => {
        // Comments and Camera launcher icons for Walls / Paint Section
        await expect(element(by.id('camera_launcher'))).toBeVisible();
        await expect(element(by.id('comments_launcher_icon'))).toBeVisible();
        // Comments and Camera launcher icons for Celing Section
        await expect(element(by.id('camera_launcher'))).toBeVisible();
        await expect(element(by.id('comments_launcher_icon'))).toBeVisible();
        await expect(element(by.text('1 photo'))).toBeVisible();
    });

    it('should load ceiling type, condition icons, illuminated selections', async () => {
        await expect(element(by.text('Ceiling'))).toBeVisible();
        await expect(element(by.id('ceiling_type_Flat'))).toBeVisible();
        await expect(element(by.id('ceiling_type_Popcorn'))).toBeVisible();
        await expect(element(by.id('ceiling_type_Other'))).toBeVisible();
        await element(by.id('ceiling_type_Spackled')).tap();
        await expect(element(by.id('emphasized.ceiling_type_Spackled'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_Fix'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_Paintbrush'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_Poor'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_PoorFace'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_Average'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_AverageFace'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_Excellent'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_ExcellentFace'))).toBeVisible();
        await expect(element(by.id('ceiling_condition_good'))).tap();
        await expect(element(by.id('emphasized.ceiling_condition_GoodFace'))).toBeVisible();
    });

    it('should load Floor Level container and illuminate buttons', async () => {
        await expect(element(by.text('Flooring'))).toBeVisible();
        await expect(element(by.id('floor_type_Hardwood'))).toBeVisible();
        await expect(element(by.id('floor_type_Tile'))).toBeVisible();
        await expect(element(by.id('floor_type_Carpet'))).toBeVisible();
        await expect(element(by.id('floor_type_Vinyl'))).toBeVisible();
        await expect(element(by.id('floor_type_Laminate'))).toBeVisible();
        await expect(element(by.id('floor_type_Other'))).toBeVisible();
        await element(by.id('floor_type_Tile')).tap();
        await expect(element(by.id('emphasized.floor_type_Tile'))).toBeVisible();
    });
});