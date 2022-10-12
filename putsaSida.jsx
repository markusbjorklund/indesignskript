///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt byta till korrekt mejladress på printsidor och kör lite allmänt puts
// 
// telefonnummer byts automatiskt (på sidlappar och sånt)
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// variabel för filnamnet på dokumentet (används  för automejl och sidlappar)
var sidnamn = app.activeDocument.name;

// töm sök och ersätt innan skriptet kör
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// fixa till korrekt blanksteg efter pratminus
app.findGrepPreferences.findWhat = "– ";
app.changeGrepPreferences.changeTo = "–\\\x{2009}";
app.activeDocument.changeGrep();

// fixa stupid
app.findGrepPreferences.findWhat = " –\\\x{2009}";
app.changeGrepPreferences.changeTo = " – ";
app.activeDocument.changeGrep();

// fixa mellanslaget efter ortnamnet - TILLSATT 19.9.2022, ÄNDRAT 20.9.2022
app.findGrepPreferences.findWhat = " \\\x{002E} ";
app.changeGrepPreferences.changeTo = "\\\x{002E} ";
app.activeDocument.changeGrep();

// fixa dubbla rader på citatrutorna
app.findGrepPreferences.findWhat = "\\\x{A}              \\\x{D}";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// fixa onödigt radbyte på tidningsbylinen – TILLSATT 4.10.2022
app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}Vbl";
app.changeGrepPreferences.changeTo = " VBL";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}VBL";
app.changeGrepPreferences.changeTo = " VBL";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}Öt";
app.changeGrepPreferences.changeTo = " ÖT";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}ÖT";
app.changeGrepPreferences.changeTo = " ÖT";
app.activeDocument.changeGrep();

// flagga webbelement som finns inbakade i texten som kommer från managern
app.findGrepPreferences.findWhat = "Läs också:";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har länkade artiklar på webbben. Infoga dessa som hyperlänkar i en webbhänvisning eller ta bort följande stycke.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "LÄS OCKSÅ:";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har länkade artiklar på webbben. Infoga dessa som hyperlänkar i en webbhänvisning eller ta bort följande stycke.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "Artikeln uppdaterad";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "Artikeln är uppdaterad";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "Uppdaterad klockan";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
app.activeDocument.changeGrep();

// ändra mejladresser för vasabladet
if(sidnamn.match("VB-") || sidnamn.match("VBA")) {
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
 }

// ändra mejladresser för ot
else if(sidnamn.match("OT-") || sidnamn.match("OTA")) {
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
 }

 // ändra mejladresser för sydin
else if(sidnamn.match("SY-") || sidnamn.match("SYA")) {
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

// ändra mejladresser för bilagor
else if(sidnamn.match("VBT1-") || sidnamn.match("OTT1-") || sidnamn.match("SYTT1-")) {
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