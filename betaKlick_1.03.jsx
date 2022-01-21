///////////////////////////////////////////////////////////////////////////////////////////////////
// betaKlick
// skript för att underlätta redigeringen på HSS Media
// är ett "work in progress" och mer avancerade funktioner på kommande
// 
// author Markus Björklund
//
// version 1.03  
///////////////////////////////////////////////////////////////////////////////////////////////////

alert("Detta skript ändrar mejladresser, hänvisningar och telefonnummer på sidan automatiskt!")

// töm sök och ersätt innan skriptet kör
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// stringa filnamnet på dokumentet
var filnamn = app.activeDocument.name;

// ändra mejladresser för vasabladet
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
    
    // ändra avdelningsmejladresser för vasabladet
    app.findGrepPreferences.findWhat = "red@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "nyheter@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "sporten@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "sport@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "otkultur@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "kultur@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "otdebatt@vasabladet.fi";
    app.changeGrepPreferences.changeTo = "debatt@vasabladet.fi";
    app.activeDocument.changeGrep();
    
    // ändra telefonnummer för vasabladet
    app.findGrepPreferences.findWhat = "06-7848 803";
    app.changeGrepPreferences.changeTo = "06-7848 200";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 453";
    app.changeGrepPreferences.changeTo = "06-7848 293";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 545";
    app.changeGrepPreferences.changeTo = "06-7848 289";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 472";
    app.changeGrepPreferences.changeTo = "06-7848 204";
    app.activeDocument.changeGrep();

    // ändra hänvisningar för vasabladet
    app.findGrepPreferences.findWhat = "VBL/ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT/VBL";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT och VBL";
    app.changeGrepPreferences.changeTo = "VBL och ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT-VBL";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL-ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL&ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL & ÖT";
    app.changeGrepPreferences.changeTo = "VBL";
    app.activeDocument.changeGrep();
 }

// ändra mejladresser för ot
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
    
    // ändra avdelningsmejladresser för ot
    app.findGrepPreferences.findWhat = "nyheter@ot.fi";
    app.changeGrepPreferences.changeTo = "red@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "sport@ot.fi";
    app.changeGrepPreferences.changeTo = "sporten@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "kultur@ot.fi";
    app.changeGrepPreferences.changeTo = "otkultur@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "debatt@ot.fi";
    app.changeGrepPreferences.changeTo = "otdebatt@ot.fi";
    app.activeDocument.changeGrep();
    // take care of stupid
    app.findGrepPreferences.findWhat = "otot";
    app.changeGrepPreferences.changeTo = "ot";
    app.activeDocument.changeGrep();
    
    // ändra telefonnummer för ot
    app.findGrepPreferences.findWhat = "06-7848 200";
    app.changeGrepPreferences.changeTo = "06-7848 803";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 293";
    app.changeGrepPreferences.changeTo = "06-7848 453";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 289";
    app.changeGrepPreferences.changeTo = "06-7848 545";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "06-7848 204";
    app.changeGrepPreferences.changeTo = "06-7848 472";
    app.activeDocument.changeGrep();

    // ändra hänvisningar för ot
    app.findGrepPreferences.findWhat = "VBL/ÖT";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT/VBL";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL och ÖT";
    app.changeGrepPreferences.changeTo = "ÖT och VBL";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL-ÖT";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "ÖT-VBL";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL&ÖT";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
    app.findGrepPreferences.findWhat = "VBL & ÖT";
    app.changeGrepPreferences.changeTo = "ÖT";
    app.activeDocument.changeGrep();
 }

// ändra mejladresser för bilagor
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

// töm sök och ersätt innan skriptet avslutas
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

//sidnummer (för framtida behov)
//var sidnummer = app.activeWindow.activePage.name;

// FÖR TESTNING //
//alert(app.activeDocument.sections.length)
//alert(app.activeDocument.name)