/**********************************************************

Mikko Aaltonen
Copyright 2014
No Rights Reserved 

*********************************************************/

/**********************************************************
 
roundTransforms.jsx

DESCRIPTION

Round object transforms to nearest unit.
 
**********************************************************/

if (documents.length > 0) {

    var sourceDoc = activeDocument;
    var items = selection;
    var i = 0;

    function move() {

        for (i = 0; i < items.length; i++) {
            // round items position to nearest unit
            items[i].left = Math.round(items[i].left);
            items[i].top = Math.round(items[i].top);
        }

    }


    function roundDimensions() {

        for (i = 0; i < items.length; i++) {

            // round items dimension to nearest unit
            items[i].width = Math.round(items[i].width);
            items[i].height = Math.round(items[i].height);
        }
    }

    if (items.length == 0) {

        alert("Select at least one item first");


    } else {

        for (i = 0; i < items.length; i++) {
            // if object is not a text
            if (items[i].typename !== "TextFrame") {
                roundDimensions();
            }
            move();

        }
        redraw();
    }



} else {

    alert("Create something first");

}