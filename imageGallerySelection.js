// When the webpage opens up this function is called to set anything
// that needs to be done right at start.
function InitializeFunctionsAndInteractions()
{
    initializePageGalleries();
}

// Variable to select content for html document.
var rootVariables = document.querySelector(':root');

// Runs all timing of site.
var SiteOneSecondTimer = setInterval(function()
{
    
    
},1000);


// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
// Use this function to test thumbnails from html
function thumbnailCallCheck (iD)
{
    for (let i = 0; i < pageGalleryThumbnailArray.length; i++) {
        if(iD == pageGalleryThumbnailArray[i].thumbnailID){
            alert(pageGalleryThumbnailArray[i].thumbnailID);
        }
    }
}

// Will be called when page opens to set all galleries in page
function initializePageGalleries()
{
    //alert('Initializing page galleries!!!');
    for (let i = 0; i < pageGalleryThumbnailArray.length; i++) {
        if(pageGalleryThumbnailArray[i].isAGalleryDefaultThumbnail == 'true'){
            //alert(pageGalleryThumbnailArray[i].thumbnailID);
            changeGalleryThumbnail(pageGalleryThumbnailArray[i].thumbnailID);
        }
    }

    for (let j = 0; j < pageGalleryThumbnailArray.length; j++) {
        //alert('Img ID = ' + pageGalleryThumbnailArray[j].thumbnailImgID + ', Src = ' + pageGalleryThumbnailArray[j].thumbnailPrimaryImgScr);
        changeGalleryImageDisplay(pageGalleryThumbnailArray[j].thumbnailImgID, pageGalleryThumbnailArray[j].thumbnailPrimaryImgScr);
    }
}

// Called to change which thumbnail is being displayed
function changeGalleryThumbnail(iD)
{
    // Run through all thumbnail IDs in the array of thumbnails on the page
    for (let i = 0; i < pageGalleryThumbnailArray.length; i++) {
        // If a thumbnail ID is equal to the ID being passed in...
        if(pageGalleryThumbnailArray[i].thumbnailID == iD){
            //alert(pageGalleryThumbnailArray[i].thumbnailID);

            // First, change the highlights from the previous selected thumbnail to the new
            changeHighlightedThumbnail(pageGalleryThumbnailArray[i].selectedThumbnail, iD);
            // Next, change the image being displayed
            changeGalleryImageDisplay(pageGalleryThumbnailArray[i].galleryDisplayID, pageGalleryThumbnailArray[i].thumbnailPrimaryImgScr);
            // And its caption beneath it
            changeGalleryInnerHTML(pageGalleryThumbnailArray[i].imgCaptionID, pageGalleryThumbnailArray[i].primaryImgCaption);

            //alert('Img Display and Caption changed!!');

            // Then check to see if there is more than 1 slide, and if there is...
            if(pageGalleryThumbnailArray[i].totalNumOfSlides >= 2)
            {
                //alert(pageGalleryThumbnailArray[i].totalNumOfSlides);
                
                // Update the image slide counter on screen to show that image 1 of the thumbnail is being displayed along with the total amount it holds
                changeSlideCounter(pageGalleryThumbnailArray[i].gallerySlideCounterID, 1, pageGalleryThumbnailArray[i].totalNumOfSlides);
                // And update all the current slide count on all sibling thumbnails to 1
                for (let j = 0; j < pageGalleryThumbnailArray.length; j++) {
                    pageGalleryThumbnailArray[j].currSlide = 1;
                }
            }

            // If there is an image description ID and an image description...
            if(pageGalleryThumbnailArray[i].galleryImgDescriptionID !== null && pageGalleryThumbnailArray[i].imgDescription !== null)
            {
                // Call to update the description on screen
                changeGalleryInnerHTML(pageGalleryThumbnailArray[i].galleryImgDescriptionID, pageGalleryThumbnailArray[i].imgDescription);
            }

            // If there is an image sub-title ID and an image sub-title...
            if(pageGalleryThumbnailArray[i].gallerySubTitleID !== null && pageGalleryThumbnailArray[i].gallerySubTitleText !== null)
            {
                // Call to update the sub-title on screen
                changeGalleryInnerHTML(pageGalleryThumbnailArray[i].gallerySubTitleID, pageGalleryThumbnailArray[i].gallerySubTitleText);
            }
        }
    }
}

//
function callTo_adjustSlideFor_currentDetailedGalleryThumbnail (gallery, dir)
{
    //alert('Calling to adjust slide!!!');

    var thumbnailUpdating;

    // Loop through Gallery Thumbnail Array and find those that match the gallery display ID passed in
    for (let i = 0; i < pageGalleryThumbnailArray.length; i++) {
        // And find those that match the gallery display ID passed in...
        if(pageGalleryThumbnailArray[i].galleryDisplayID == gallery){
            // Use the Selected Thumbnail value found to loop again and identify the ID of Gallery Thumbnail 
            // Instance to be used in gallery update
            for (let j = 0; j < pageGalleryThumbnailArray.length; j++) {
                // If a Thumbnail ID matches the Selected Thumbnail from the previous loop...
                if(pageGalleryThumbnailArray[j].thumbnailID == pageGalleryThumbnailArray[i].selectedThumbnail){
                    // Set thumbnail to work with
                    thumbnailUpdating = pageGalleryThumbnailArray[j];
                }
            }
        }
    }

    //alert('Thumbnail updating = ' + thumbnailUpdating);

    thumbnailUpdating.currSlide = checkDirectionOfDetailedGallerySlideSelection (dir, thumbnailUpdating.currSlide, thumbnailUpdating.totalNumOfSlides);

    //alert('Current slide changing to = ' + thumbnailUpdating.currSlide);
    //alert('New display = ' + newSlideImgSourceAndCaption(thumbnailUpdating, thumbnailUpdating.currSlide)[0] + ', and New caption = ' + newSlideImgSourceAndCaption(thumbnailUpdating, thumbnailUpdating.currSlide)[1]);
    
    //
    changeGalleryImageDisplay(thumbnailUpdating.galleryDisplayID, newSlideImgSourceAndCaption(thumbnailUpdating, thumbnailUpdating.currSlide)[0]);
    //
    changeGalleryInnerHTML(thumbnailUpdating.imgCaptionID, newSlideImgSourceAndCaption(thumbnailUpdating, thumbnailUpdating.currSlide)[1]);
    //
    changeSlideCounter(thumbnailUpdating.gallerySlideCounterID, thumbnailUpdating.currSlide, thumbnailUpdating.totalNumOfSlides);

}

//
function checkDirectionOfDetailedGallerySlideSelection (dir, curSlide, numOfSlides)
{
    //alert('Checking direction = ' + dir + ', current slide = ' + curSlide + ', total slides = ' + numOfSlides);

    if(dir == "up")
    {
        if(curSlide < numOfSlides)
        {
            curSlide++;
        }   

        else if(curSlide == numOfSlides)
        {
            curSlide = 1;
        }
    }
    
    else if(dir == "down")
    {
        if(curSlide > 1)
        {
            curSlide--;
        }   

        else if(curSlide <= 1)
        {
            curSlide = numOfSlides;
        }
    }

    return curSlide;
}

function newSlideImgSourceAndCaption(thumbnail, slideNum)
{
    let newDisplayPartsArray = [];

    switch(slideNum)
    {
        case 1:
            newDisplayPartsArray[0] = thumbnail.thumbnailPrimaryImgScr;
            newDisplayPartsArray[1] = thumbnail.primaryImgCaption;

            break;

        case 2:
            newDisplayPartsArray[0] = thumbnail.thumbnailSecondImgScr;
            newDisplayPartsArray[1] = thumbnail.secondImgCaption;

            break;

        case 3:
            newDisplayPartsArray[0] = thumbnail.thumbnailThirdImgScr;
            newDisplayPartsArray[1] = thumbnail.thirdImgCaption;

            break;

        case 4:
        newDisplayPartsArray[0] = thumbnail.thumbnailForthImgScr;
        newDisplayPartsArray[1] = thumbnail.forthImgCaption;

        break;

        case 5:
            newDisplayPartsArray[0] = thumbnail.thumbnailFifthImgScr;
            newDisplayPartsArray[1] = thumbnail.fifthImgCaption;

            break;

        case 6:
        newDisplayPartsArray[0] = thumbnail.thumbnailSixthImgScr;
        newDisplayPartsArray[1] = thumbnail.sixthImgCaption;

        break;
        
        default:
            alert("Something went wrong with setting newSlideImgSourceAndCaption()!");
    }

    return newDisplayPartsArray;
}

// Call to change which thumbnail is being highlighted for gallery
function changeHighlightedThumbnail(old, current)
{
    //alert('old = ' + old + ', and new = ' + current);

    // Remove highlights from previous selected thumbnail
    $(old).css({
        "border" : "none",
        "box-shadow" : "none"
    });
    // Apply highlights to current selected thumbnail
    $(current).css({
        "border" : "rgb(255, 0, 230) 1px solid",
        "box-shadow" : "inset 0 0 0.5em 0 var(--clr-exe-neon), 0 0 0.5em 0 var(--clr-exe-neon)"
    });
    // Set the previous selected thumbnail ID on all sibling thumbnails
    for (let i = 0; i < pageGalleryThumbnailArray.length; i++) {
        if(pageGalleryThumbnailArray[i].thumbnailID == current){
            //alert(pageGalleryArray[i].thumbnailImgScr);
            for (let j = 0; j < pageGalleryThumbnailArray.length; j++) {
                if(pageGalleryThumbnailArray[j].galleryDisplayID == pageGalleryThumbnailArray[i].galleryDisplayID){
                    //alert(pageGalleryArray[i].thumbnailImgScr);
                    pageGalleryThumbnailArray[j].selectedThumbnail = current;
                }
            }
        }
    }
}

// Call to change image display in gallery and its caption
function changeGalleryImageDisplay(displayID, newDisplaySrc)
{
    //alert('Entering img display and caption change!!');

    document.getElementById(displayID).src= newDisplaySrc;

    //alert('Display and caption changed!!');
}

// Call to change text for titles, descriptions and captions in current selected thumbnail
function changeGalleryInnerHTML(ID, newText)
{
    document.getElementById(ID).innerHTML = newText;
}

// Call to change slide counter for a multi-image thumbnail
function changeSlideCounter(slideCounterID, currSlide, totalNumSlides)
{
    //alert('ID = ' + slideCounterID + ', current slide = ' + currSlide + ', total slides = ' + totalNumSlides);

    document.getElementById(slideCounterID).innerHTML = currSlide + " of " + totalNumSlides;
}




