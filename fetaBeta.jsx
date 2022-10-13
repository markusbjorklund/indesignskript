//////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// detta skript används för testning av ny eller added code innan de kopieras till ett fungerande skript
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

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

app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;