///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera play-tablån på printsidor
//
// author Markus Björklund and the internet
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// filmappning
var servermapp = "//serveradressen kommer hit/";
var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/play/";

// datum för play-tablån
var play_datum = new Date();

play_datum.setDate(play_datum.getDate() + 1);
var day = ("0" + play_datum.getDate()).slice(-2);
var month = ("0" + (play_datum.getMonth() + 1)).slice(-2);
var shortYear = ("0" + play_datum.getFullYear()).slice(-2);
play_datum = shortYear + month + day;
var filnamn = play_datum;

var play = app.activeDocument.links.itemByName("play_Dummy.jpg").parent;
var play_pdf = new File(servermapp + foldermapp + filnamn + "-TVRVKO-PLAY-0-0-print.pdf");
play.place(play_pdf);