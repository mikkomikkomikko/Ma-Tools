﻿// Duplicates any selected items from// the active document into a new document.var newItem;var docSelected = app.activeDocument.selection;if ( docSelected.length > 0 ) {// Create a new document and move the selected items to it.var newDoc = app.documents.add(DocumentColorSpace.RGB);if ( docSelected.length > 0 ) {for ( i = 0; i < docSelected.length; i++ ) {docSelected[i].selected = false;newItem = docSelected[i].duplicate( newDoc,ElementPlacement.PLACEATEND );} }else {docSelected.selected = false;newItem = docSelected.parent.duplicate( newDoc,ElementPlacement.PLACEATEND );}}else {alert( "Please select one or more art objects" );}//fitArtboardToSelectedArt app.activeDocument.artboards[0].artboardRect = app.activeDocument.visibleBounds;   app.redraw(); 