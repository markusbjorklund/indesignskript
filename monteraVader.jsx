///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera vädret på printsidor
//
// author Markus Björklund and the internet
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// sidinformation
var sidnamn = app.activeDocument.name;

// filmappning
var servermapp = "//npfileserver.tidningen.fi/";
var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/vader/";

// datum för vädret
var dagens_vader = new Date();

dagens_vader.setDate(dagens_vader.getDate() + 1);
var day = ("0" + dagens_vader.getDate()).slice(-2);
var month = ("0" + (dagens_vader.getMonth() + 1)).slice(-2);
dagens_vader = day + month;
var filnamn = dagens_vader;

// vbl och öt
if (sidnamn.match("VBA") || sidnamn.match("OTA")) {
    var vader = app.activeDocument.links.itemByName("vader_Dummy_.jpg").parent;
    var vader_pdf = new File(servermapp + foldermapp + filnamn + "VasaBladet14.pdf");
    vader.place(vader_pdf);
}

// sydin
else if (sidnamn.match("SYA")) {
    var vader = app.activeDocument.links.itemByName("fmisy_Dummy.pdf.jpg").parent;
    var vader_pdf = new File(servermapp + foldermapp + filnamn + "Syd-Osterbotten14.pdf");
    vader.place(vader_pdf);
}