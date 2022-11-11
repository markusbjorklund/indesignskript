//DESCRIPTION:Create a hyperlink to the URL on the clipboard for the selected text

// Modified 2021-03-24
// Keith Gilbert, Gilbert Consulting
// www.gilbertconsulting.com

Pre();
  
function Pre () {  
	if (app.documents.length < 1) {
		alert("No InDesign documents are open. Please open a document and try again.");
		return;
	}
	if (locateCharacterStyle("Hyperlink") == "not found") {
		alert("This script requires a character style named 'Hyperlink'. Please create a character style named 'Hyperlink' and try again.");
		return;
	}
	if(app.selection.length != 1) {
		alert("Please select some text to which you want to add a hyperlink and try again.");
		return;
	}
	switch(app.selection[0].constructor.name){
		case "Character":
		case "Word":
		case "TextStyleRange":
		case "Line":
		case "Paragraph":
		case "TextColumn":
		case "Text":
			// Main();            
			app.doScript(Main, undefined, undefined, UndoModes.ENTIRE_SCRIPT,"Run Script");
			break;
        case "TextFrame":
		case "TextBox":
		case "Rectangle":
		case "Oval":
		case "Polygon":
		case "GraphicLine":
		case "Image":
		case "PDF":
		case "EPS":
		case "Character":
		case "Word":
		case "TextStyleRange":
		case "Line":
		case "Paragraph":
		case "TextColumn":
		case "Text":
		case "Table":
		case "Cell":
		default:
			alert("Please select some text and try again.");
			break;
	}  
}  

function Main() {
	var myDoc = app.activeDocument;
	var myText = app.selection[0];
    // Create a temporary layer and text frame to retrieve the clipboard contents
    var myTempLayer = myDoc.layers.add();
    var myTempTextFrame = myDoc.textFrames.add(myTempLayer);
    myTempTextFrame.insertionPoints[-1].select();
    app.paste();
    var myURL = myTempTextFrame.parentStory.contents;
    myTempTextFrame.remove();
    myTempLayer.remove();
	// If the selection already contains a hyperlink, remove it
	myRemoveHyperlink(myDoc, myText);
    // Create the hyperlink
    var mySource = myDoc.hyperlinkTextSources.add(myText);
    var myDestination = myDoc.hyperlinkURLDestinations.add(myURL, {hidden:true});
    var myHyperLink = myDoc.hyperlinks.add(mySource,myDestination);
    try {
        myHyperLink.name = myText.contents;
    }
    catch (myError) {
        var n=1;
        while (myHyperLink.name == "Hyperlink") {
            try {
                myHyperLink.name = myText.contents+" "+String(n);
            }
            catch (myError2) {
                n++;	
            }
        }
    }
    myText.appliedCharacterStyle = myDoc.characterStyles.itemByID(locateCharacterStyle("Hyperlink"));
}
// Find a character style possibly contained inside a style group. Return id of the character style.
function locateCharacterStyle(styleNameToLocate, pathSeparator) {
	var myDoc = app.activeDocument;
    var rootPath = "";
    if (pathSeparator !== undefined) {
        rootPath = pathSeparator;
    }
	var retVal = locateCharacterStyleRecursive(myDoc, styleNameToLocate, pathSeparator, rootPath);
	if (! retVal) {
		return "not found";
	}
	return retVal.id;
}
// Find character styles that are in style groups. Returns the character style or null if not found.
function locateCharacterStyleRecursive(characterStyleContainer, styleNameToLocate, pathSeparator, parentPath) {
	var retVal = null;
	do { 
		try {
			var characterStyles = characterStyleContainer.characterStyles;
			var numCharacterStyles = characterStyles.length; 
			for (
				var characterStyleIdx = 0; 
				retVal == null && characterStyleIdx < numCharacterStyles;
				characterStyleIdx++) {
				var characterStyle = characterStyles.item(characterStyleIdx);
				if (characterStyle.isValid) {
					var characterStyleName = characterStyle.name;
                      if (pathSeparator) {
                          characterStyleName = parentPath + characterStyleName;
                      }
					if (characterStyleName == styleNameToLocate) {
						retVal = characterStyle;
					}
				}
			}
			if (retVal) {
				break;
			}
			var characterStyleGroups = characterStyleContainer.characterStyleGroups;
			var numCharacterStyleGroups = characterStyleGroups.length;
			for (
				var characterStyleGroupIdx = 0; 
				retVal == null && characterStyleGroupIdx < numCharacterStyleGroups;
				characterStyleGroupIdx++) {

				var characterStyleGroup = characterStyleGroups.item(characterStyleGroupIdx);
				if (characterStyleGroup.isValid) {
					var path = parentPath;
                      if (pathSeparator) {
                          var characterStyleGroupName = characterStyleGroup.name;
                          path += characterStyleGroupName + pathSeparator;
                      }
					retVal = locateCharacterStyleRecursive(characterStyleGroup, styleNameToLocate, pathSeparator, path);
				}
			}
		}
		catch (err) {
		}
	}
	while (false);
	return retVal;
}
// Remove the hyperlink whose source is the specified text
function myRemoveHyperlink(myDoc,myText) {
	for (var j = myDoc.hyperlinks.length-1; j >= 0; j--) {
		var mySourceBegin = myDoc.hyperlinks[j].source.sourceText.insertionPoints[0].index;
		var mySourceEnd = myDoc.hyperlinks[j].source.sourceText.insertionPoints[-1].index;
		var myTextBegin = myText.insertionPoints[0].index;
		var myTextEnd = myText.insertionPoints[-1].index;
		if ((myDoc.hyperlinks[j].source.sourceText.parent == myText.parent) &&
			(((myTextBegin >= mySourceBegin) && (myTextBegin <= mySourceEnd)) || ((myTextEnd >= mySourceBegin) && (myTextEnd <= mySourceEnd)))) {
			myDoc.hyperlinks[j].source.appliedCharacterStyle = myDoc.characterStyles.item("[None]");
			myDoc.hyperlinks[j].source.remove();
		}
	}
}