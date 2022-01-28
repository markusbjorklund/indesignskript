///////////////////////////////////////////////////////////////////////////////////////////////////
// autoTV
// skript för att automatiskt montera TV-sidor (på kommande)
// 
// ersätter #tvdatum med morgondagens datum + 2 dagar till
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

alert("Observera att skriptet baseras på dagens datum, inte utgivningsdag!")

var tvdatum = new Date();
var idag = new Date(tvdatum);
var idag1 = new Date(tvdatum);
var idag2 = new Date(tvdatum);

idag.setDate(tvdatum.getDate() + 1);
idag1.setDate(tvdatum.getDate() + 2);
idag2.setDate(tvdatum.getDate() + 3);

const dayNames = [
  "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
];

const monthNames = [
  "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
];

var day = idag.getDay();
var day1 = idag1.getDay();
var day2 = idag2.getDay();
var month = idag.getMonth();

idag = dayNames[day] + ' ' + idag.getDate() + ' ' + monthNames[month];
idag1 = dayNames[day1] + ' ' + idag1.getDate() + ' ' + monthNames[month];
idag2 = dayNames[day2] + ' ' + idag2.getDate() + ' ' + monthNames[month];

// töm sök och ersätt
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// ersätt #tvdatum med datum
app.findGrepPreferences.findWhat = "#tvdatum";
app.changeGrepPreferences.changeTo = idag + '\n' + idag1 + '\n' + idag2;
app.activeDocument.changeGrep();

// töm sök och ersätt innan skriptet avslutas
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;