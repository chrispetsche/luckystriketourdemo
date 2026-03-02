// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
                // !!!!!!!!!!!!!! ************* Fixed Thumbnail Class : Below ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //

// !! ***** 
class galleryThumbnail{
    constructor(isAGalleryDefaultThumbnail, thumbnailID, galleryDisplayID, thumbnailImgID, selectedThumbnail, thumbnailPrimaryImgScr, imgCaptionID, primaryImgCaption, galleryImgDescriptionID, imgDescription, gallerySlideCounterID, totalNumOfSlides, currSlide, thumbnailSecondImgScr, secondImgCaption, thumbnailThirdImgScr, thirdImgCaption, thumbnailForthImgScr, forthImgCaption, thumbnailFifthImgScr, fifthImgCaption, thumbnailSixthImgScr, sixthImgCaption, gallerySubTitleID, gallerySubTitleText){
        this.isAGalleryDefaultThumbnail = isAGalleryDefaultThumbnail; // 1
        this.thumbnailID = thumbnailID; // 2
        this.galleryDisplayID = galleryDisplayID; // 3
        this.thumbnailImgID = thumbnailImgID; // 4
        this.selectedThumbnail = selectedThumbnail; // 5
        this.thumbnailPrimaryImgScr = thumbnailPrimaryImgScr; // 6
        this.imgCaptionID = imgCaptionID; // 7
        this.primaryImgCaption = primaryImgCaption; // 8
        this.galleryImgDescriptionID = galleryImgDescriptionID; // 9
        this.imgDescription = imgDescription; // 10
        this.gallerySlideCounterID = gallerySlideCounterID; // 11
        this.totalNumOfSlides = totalNumOfSlides; // 12
        this.currSlide = currSlide; // 13
        this.thumbnailSecondImgScr = thumbnailSecondImgScr; // 14
        this.secondImgCaption = secondImgCaption; // 15
        this.thumbnailThirdImgScr = thumbnailThirdImgScr; // 16
        this.thirdImgCaption = thirdImgCaption; // 17
        this.thumbnailForthImgScr = thumbnailForthImgScr; // 18
        this.forthImgCaption = forthImgCaption; // 19
        this.thumbnailFifthImgScr = thumbnailFifthImgScr; // 20
        this.fifthImgCaption = fifthImgCaption; // 21
        this.thumbnailSixthImgScr = thumbnailSixthImgScr; // 22
        this.sixthImgCaption = sixthImgCaption; // 23
        this.gallerySubTitleID = gallerySubTitleID; // 24
        this.gallerySubTitleText = gallerySubTitleText; // 25
    }
}

// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
                // !!!!!!!!!!!!!! ************* Fixed Thumbnail Classes : Above ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //

// !! ***** Array each instance will be assigned to and called from.
var pageGalleryThumbnailArray = [];

// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
            // !!!!!!!!!!!!!! ************* Grouped Unique Thumbnail Instances : Below ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //

// !!!!! **************************************** !!!!! //
    // !!! Test Thumbnail Instances : Below !!! //
// !! ***** Create a new instance for each thumbnail in each gallery based on the type of gallery, basic or detailed, and the number 
// !! ***** of slides the thumbnail will display. Basic thumbnails contain 7 arguments. 

//let luckyGallery_Thumbnail1 = new galleryThumbnail('true', '#luckyGallery_Thumbnail1', 'gallery-display-detailedCenter', '_thumbnailImg1', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', '-gallery-text-detailedCenter', 'Test Thumbnail 1 - Slide 1 of', '-gallery-image-description-detailedCenter', 'new desc text 1', '-thumbnail-slide-number', 7, 1, 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 1 - Slide 2 of', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', 'Test Thumbnail 1 - Slide 3 of', 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 1 - Slide 4 of', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', 'Test Thumbnail 1 - Slide 5 of', 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 1 - Slide 6 of', '-gallery-image-description-detailedCenter-contribution-piece-title', 'subtitle 1');
//pageGalleryThumbnailArray[0] = luckyGallery_Thumbnail1; // !! ***** Assign the thumbnail in the next slot of the gallery array

// ***** !! Detailed thumbnails contain up to 24 arguments. 
//let luckyGallery_Thumbnail2 = new galleryThumbnail('false', '#luckyGallery_Thumbnail4', 'gallery-display-detailedCenter', '_thumbnailImg4', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', '-gallery-text-detailedCenter', 'Test Thumbnail 4 - Slide 1 of', '-gallery-image-description-detailedCenter', 'new desc text 4', '-thumbnail-slide-number', 4, 1, 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 4 - Slide 2 of', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', 'Test Thumbnail 4 - Slide 3 of', 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 4 - Slide 4 of', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png', 'Test Thumbnail 4 - Slide 5 of', 'img/Projects/HorizontalImageDisplay_Template.png', 'Test Thumbnail 4 - Slide 6 of', '-gallery-image-description-detailedCenter-contribution-piece-title', 'subtitle 4');
//pageGalleryThumbnailArray[1] = luckyGallery_Thumbnail2;

//constructor(isAGalleryDefaultThumbnail, thumbnailID, galleryDisplayID, thumbnailImgID, selectedThumbnail, thumbnailPrimaryImgScr, imgCaptionID, primaryImgCaption, galleryImgDescriptionID, imgDescription, gallerySlideCounterID, totalNumOfSlides, currSlide, thumbnailSecondImgScr, secondImgCaption, thumbnailThirdImgScr, thirdImgCaption, thumbnailForthImgScr, forthImgCaption, thumbnailFifthImgScr, fifthImgCaption, thumbnailSixthImgScr, sixthImgCaption, gallerySubTitleID, gallerySubTitleText)

            // !!!!!!!!!!!!!! ************* Lucky Gallery 1 ************* !!!!!!!!!!!!!! //

let LSVirtualTour_PreDev_Gallery1_Left1 = new galleryThumbnail('true', '#LSVirtualTour_PreDev_Gallery1_Left1_ThumbnailID', 'LSVirtualTour_PreDev_Gallery1-DisplayID', 'LSVirtualTour_PreDev_Gallery1_thumbnailImg1', '#LSVirtualTour_PreDev_Gallery1_Left1_ThumbnailID', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_MainEntrance_Fitted.png', 'LSVirtualTour_PreDev_Gallery1-Text', 'measurement maps of dining room and main entrance, including carousel door', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[0] = LSVirtualTour_PreDev_Gallery1_Left1; 
let LSVirtualTour_PreDev_Gallery1_Left2 = new galleryThumbnail('false', '#LSVirtualTour_PreDev_Gallery1_Left2_ThumbnailID', 'LSVirtualTour_PreDev_Gallery1-DisplayID', 'LSVirtualTour_PreDev_Gallery1_thumbnailImg2', '#LSVirtualTour_PreDev_Gallery1_Left1_ThumbnailID', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_StructuralAssets_Fitted.png', 'LSVirtualTour_PreDev_Gallery1-Text', 'mix of measurements that include main lane, private room and backend floor maps, as well as window measurements', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[1] = LSVirtualTour_PreDev_Gallery1_Left2;
let LSVirtualTour_PreDev_Gallery1_Left3 = new galleryThumbnail('false', '#LSVirtualTour_PreDev_Gallery1_Left3_ThumbnailID', 'LSVirtualTour_PreDev_Gallery1-DisplayID', 'LSVirtualTour_PreDev_Gallery1_thumbnailImg3', '#LSVirtualTour_PreDev_Gallery1_Left1_ThumbnailID', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_LargeAsset_Fitted.png', 'LSVirtualTour_PreDev_Gallery1-Text', 'measurement maps for control desk, main bar and lane couches', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[2] = LSVirtualTour_PreDev_Gallery1_Left3;

            // !!!!!!!!!!!!!! ************* Lucky Gallery 2 ************* !!!!!!!!!!!!!! //

let LSVirtualTour_PreDev_Gallery2_Right1 = new galleryThumbnail('true', '#LSVirtualTour_PreDev_Gallery2_Right1', 'LSVirtualTour_PreDev_Gallery2-Display', 'LSVirtualTour_PreDev_Gallery2_thumbnailImg1', '#LSVirtualTour_PreDev_Gallery2_Right1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_BallReturnAndGamePedestal_Fitted.png', 'LSVirtualTour_PreDev_Gallery2-Text', 'ball return measurement maps', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[3] = LSVirtualTour_PreDev_Gallery2_Right1;
let LSVirtualTour_PreDev_Gallery2_Right2 = new galleryThumbnail('false', '#LSVirtualTour_PreDev_Gallery2_Right2', 'LSVirtualTour_PreDev_Gallery2-Display', 'LSVirtualTour_PreDev_Gallery2_thumbnailImg2', '#LSVirtualTour_PreDev_Gallery2_Right1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_MainGames_Fitted.png', 'LSVirtualTour_PreDev_Gallery2-Text', 'measurement maps for photobooth, trivia machine and 4 player pac-man', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[4] = LSVirtualTour_PreDev_Gallery2_Right2;
let LSVirtualTour_PreDev_Gallery2_Right3 = new galleryThumbnail('false', '#LSVirtualTour_PreDev_Gallery2_Right3', 'LSVirtualTour_PreDev_Gallery2-Display', 'LSVirtualTour_PreDev_Gallery2_thumbnailImg3', '#LSVirtualTour_PreDev_Gallery2_Right1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_GamesAndAssets1_Fitted.png', 'LSVirtualTour_PreDev_Gallery2-Text', 'measurement maps for crane machine, pool tables, bowling pins and various other assets', null, null, '', 1, 1, '', '', '', '', '', '', '', '', '', '', null, null);
pageGalleryThumbnailArray[5] = LSVirtualTour_PreDev_Gallery2_Right3;

            // !!!!!!!!!!!!!! ************* Lucky Gallery 3 ************* !!!!!!!!!!!!!! //

// !! ***** Array of descriptions to make writing them out easier than directly inputing to each class. Add new slot above thumbnail
// !! ***** intended to effect.
var luckyGallery3_descArray = [];
luckyGallery3_descArray[0] = 'The real world version of the large Lucky Strike sign hangs at the back of the bowling alley between lanes 10 and 11, and took a while to measure out and model out in Maya. The poly count is almost as minimal as possible to shape the letters to match the real world version, with the exception of maybe a small few minor tweaks. Once I was satisfied with the shape of the model, it was surprisingly simple to UV and paint. The final result came out nicely and added alot to the look of the project.';
let luckyGallery_Thumbnail1 = new galleryThumbnail('true', '#luckyGallery_Thumbnail1', 'gallery-display-detailedCenter', '_thumbnailImg1', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_LaneSign_Slide1_Fitted.png', '-gallery-text-detailedCenter', 'real world and in-engine large lane sign', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[0], '-thumbnail-slide-number', 4, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_LaneSign_Slide2_Fitted.png', 'lane sign wireframes', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_LaneSign_Slide3_Fitted.png', 'lane sign uv map', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_LaneSign_Slide4_Fitted.png', 'lane sign color map', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Lanes: Lucky Strike Sign');
pageGalleryThumbnailArray[6] = luckyGallery_Thumbnail1;
luckyGallery3_descArray[1] = 'As one of the more detailed assets that was created, the sushi lamp was a piece that I really enjoyed working on. It presented a slight challenge when it came to the UVs and painting, after measuring out every part in detail and modeling it out. It does have a slightly high poly count, but is also one that stands out throughout most of the tour. So it is 1 of only a few that does not have a low poly version.';
let luckyGallery_Thumbnail2 = new galleryThumbnail('false', '#luckyGallery_Thumbnail2', 'gallery-display-detailedCenter', '_thumbnailImg2', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SushiLamp_Slide1_Fitted.png', '-gallery-text-detailedCenter', 'real world and in-engine sushi lamp ', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[1], '-thumbnail-slide-number', 4, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SushiLamp_Slide2_Fitted.png', 'sushi lamp wireframes', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SushiLamp_Slide3_Fitted.png', 'sushi lamp uv map', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SushiLamp_Slide4_Fitted.png', 'sushi lamp color map', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Einstein Room: Sushi Lamp');
pageGalleryThumbnailArray[7] = luckyGallery_Thumbnail2;
luckyGallery3_descArray[2] = 'Like several of the models, it is made up of many smaller models. It has a detailed up-close high poly version as seen in the images above, and a reduced poly version that changes out the panels around the base of the bar. Minimizing them to a total of 5 polys each. Its texture and color were created simple phong, blinn or lambert shaders in Mayas Hypershade. The in-engine lighting was done using Unitys bloom post-processing effects.';
let luckyGallery_Thumbnail3 = new galleryThumbnail('false', '#luckyGallery_Thumbnail3', 'gallery-display-detailedCenter', '_thumbnailImg3', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_EinsteinBar_Slide2_Fitted.png', '-gallery-text-detailedCenter', 'real world and in-engine einstein bar', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[2], '-thumbnail-slide-number', 3, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_EinsteinBar_Slide1_Fitted.png', 'einstein bar in Maya', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_EinsteinBar_Slide3_Fitted.png', 'einstein bar wireframes', '', '', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Einstein Room: Einstein Bar');
pageGalleryThumbnailArray[8] = luckyGallery_Thumbnail3;
luckyGallery3_descArray[3] = 'The idea behind this model was a special request by one of the greatest bosses in the world. It is a custom piece he thought would really add to the Einstein Room and overall look of the venue. I drew up a rough sketch to work out its basic dimensions and modeled it out using Maya. Then imported to the Unity project for the color and lighting. At one point the real world light was supposed be created. But it unfortunately never came to be.';
let luckyGallery_Thumbnail4 = new galleryThumbnail('false', '#luckyGallery_Thumbnail4', 'gallery-display-detailedCenter', '_thumbnailImg4', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_EinsteinBarSign_Slide1_Fitted.png', '-gallery-text-detailedCenter', 'einstein bar sign in-engine at top and left, maya at right', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[3], '-thumbnail-slide-number', 2, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_EinsteinBarSign_Slide2_Fitted.png', 'einstein bar sign wireframes', '', '', '', '', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Einstein Room: Einstein Bar Sign');
pageGalleryThumbnailArray[9] = luckyGallery_Thumbnail4;
luckyGallery3_descArray[4] = 'Getting the pattern of the lights just right was pretty challenging on this one. As it hung over the Control Desk, climbing up to measure the real world version was tricky without losing balance and almost falling constantly. But, worth it as the finished product turned out quite well. Again modeled in Maya, it has a high poly version as seen here, and a low that is roughly 1/3 fewer faces. The color and lighting was done using Unity materials and bloom post-processing effects.';
let luckyGallery_Thumbnail5 = new galleryThumbnail('false', '#luckyGallery_Thumbnail5', 'gallery-display-detailedCenter', '_thumbnailImg5', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SputnikLight_Slide1_Fitted.png', '-gallery-text-detailedCenter', 'real world and in-engine sputnik light', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[4], '-thumbnail-slide-number', 2, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_SputnikLight_Slide2_Fitted.png', 'sputnik light wireframes', '', '', '', '', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Control Desk: Sputnik Light');
pageGalleryThumbnailArray[10] = luckyGallery_Thumbnail5;
luckyGallery3_descArray[5] = 'Located on pillars throughout the bowling lanes, the blue stars were one of the simpliest assets to model, color and light. There is only a single version of it that has 2 parts. Exported from Maya to Unity where the color was applied the main model, and the lighting is projected from a second smaller 20 faced flattened version that just covers the backside, and points at the wall the star hangs from with a bloom effect. The second, since its effects are baked in, is also coded to be removed from the scene when the experience starts up to reduce the live poly count.';
let luckyGallery_Thumbnail6 = new galleryThumbnail('false', '#luckyGallery_Thumbnail6', 'gallery-display-detailedCenter', '_thumbnailImg6', '#luckyGallery_Thumbnail1', 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_BlueLaneStar_Slide1_Fitted.png', '-gallery-text-detailedCenter', 'real world and in-engine blue lane stars', '-gallery-image-description-detailedCenter', luckyGallery3_descArray[5], '-thumbnail-slide-number', 2, 1, 'img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_3DModelSlides_BlueLaneStar_Slide2_Fitted.png', 'blue lane star wireframes', '', '', '', '', '', '', '', '', '-gallery-image-description-detailedCenter-contribution-piece-title', 'Bowling Lanes: Blue Star');
pageGalleryThumbnailArray[11] = luckyGallery_Thumbnail6;

// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
            // !!!!!!!!!!!!!! ************* Grouped Unique Thumbnail Instances : Above ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //