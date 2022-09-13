///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera börsspalten
//
// author Markus Björklund and the internet
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// filmappning
var servermapp = "//npfileserver.tidningen.fi/";
var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/borsen/";

var borsspalten = app.activeDocument.links.itemByName("Borsen_Dummy.pdf.jpg").parent;
var borsspalten_strip = new File(servermapp + foldermapp + "Vasabladet.pdf");
borsspalten.place(borsspalten_strip);