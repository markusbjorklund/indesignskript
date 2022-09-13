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

// kör in fyra börsspalter så finns det på alla mallar i paletten sidor
var borsspalten = app.activeDocument.links.itemByName("borsen_Dummy.jpg").parent;
var borsspalten_pdf = new File(servermapp + foldermapp + "Vasabladet.pdf");
borsspalten.place(borsspalten_pdf);

var borsspalten = app.activeDocument.links.itemByName("borsen_Dummy.jpg").parent;
var borsspalten_pdf = new File(servermapp + foldermapp + "Vasabladet.pdf");
borsspalten.place(borsspalten_pdf);

var borsspalten = app.activeDocument.links.itemByName("borsen_Dummy.jpg").parent;
var borsspalten_pdf = new File(servermapp + foldermapp + "Vasabladet.pdf");
borsspalten.place(borsspalten_pdf);

var borsspalten = app.activeDocument.links.itemByName("borsen_Dummy.jpg").parent;
var borsspalten_pdf = new File(servermapp + foldermapp + "Vasabladet.pdf");
borsspalten.place(borsspalten_pdf);