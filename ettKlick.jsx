///////////////////////////////////////////////////////////////////////////////////////////////////
// ettKlick
// skript för att underlätta redigeringen på HSS Media
//
// author Markus Björklund
//
// version 1.01 
///////////////////////////////////////////////////////////////////////////////////////////////////

alert("Detta skript ändrar mejladresser på sidan automatiskt!")

//töm sök och ersätt innan skriptet kör
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

//stringa filnamnet på dokumentet
var filnamn = app.activeDocument.name;

//ändra mejladresser för vasabladet
if(filnamn.match("VBA")) {
    app.findGrepPreferences.findWhat = "@ot.fi";
    app.changeGrepPreferences.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@sydin.fi";
    app.changeGrepPreferences.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@hssmedia.fi";
    app.changeGrepPreferences.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();

    //ändra hänvisningar för vasabladet
    app.findGrepPreferences.findWhat = "VBL/ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT/VBL";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
 }

//ändra mejladresser för ot
else if(filnamn.match("OTA")) {
    app.findGrepPreferences.findWhat = "@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@sydin.fi";
    app.changeGrepPreferences.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@hssmedia.fi";
    app.changeGrepPreferences.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();

    //ändra hänvisningar för ot
    app.findGrepPreferences.findWhat = "VBL/ÖT";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT/VBL";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
 }

//ändra mejladresser för sydin
else if(filnamn.match("SYA")) {
    app.findGrepPreferences.findWhat = "@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@ot.fi";
    app.changeGrepPreferences.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@hssmedia.fi";
    app.changeGrepPreferences.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
}

//ändra mejladresser för bilagor
else if(filnamn.match = ("VBT") || ("OTT")) {
    app.findGrepPreferences.findWhat = "@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@ot.fi";
    app.changeGrepPreferences.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "@sydin.fi";
    app.changeGrepPreferences.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
}

//töm sök och ersätt innan skriptet avslutas
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

//sidnummer (för framtida behov)
//var sidnummer = app.activeWindow.activePage.name;

// FÖR TESTNING //
//alert(app.activeDocument.sections.length)
//alert(app.activeDocument.name)