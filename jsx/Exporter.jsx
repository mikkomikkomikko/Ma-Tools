// Exporter.jsx
// Version 0.1
// Copyright 2015 Mikko Aaltonen


if (documents.length > 0) {
	
    //var sourceDoc = activeDocument;
    var docRef = app.activeDocument;	
    var fileName = app.activeDocument.name;
    var items = selection;
    
    // Format specific functionality

    getPdfOptions = function ( transparency, scaling, embedImage, embedFont, trimEdges ) {
	   var options = new PDFSaveOptions();
	   options.compatibility = PDFCompatibility.ACROBAT5;
	   options.generateThumbnails = true;
	   options.preserveEditability = false;
	   return options;
    }

    // Format specific save functions

    function savePdf( doc, fileName, options, artboardIndex, artboardName ) {
        var destFile = new File( fileName + '.pdf' );   
        //options.artboardRange = (artboardIndex+1).toString();
        app.saveAs( fileName, options )
    }

	if ( items.length == 0 ) {
		
		alert( "Select at least one item before running this script.");
		
	} else {
		
		savePdf(fileName);
		
	}
	
} else {
	
	alert( "ouhh!" );
	
}