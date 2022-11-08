///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera vädret på printsidor
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// sidinformation
var sidnamn = app.activeDocument.name;

// filmappning
var servermapp = "//serveradressen kommer hit/";
var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/vader/";

// datum för vädret
var dagens_vader = new Date();

dagens_vader.setDate(dagens_vader.getDate() + 1);
var day = ("0" + dagens_vader.getDate()).slice(-2);
var month = ("0" + (dagens_vader.getMonth() + 1)).slice(-2);
dagens_vader = day + month;
var filnamn = dagens_vader;

// vbl och öt
if (sidnamn.match("VB") || sidnamn.match("OT")) {
    var vader = app.activeDocument.links.itemByName("vader_Dummy_.jpg").parent;
    var vader_pdf = new File(servermapp + foldermapp + filnamn + "VasaBladet14.pdf");

    try {
        vader.place(vader_pdf);
    }
    catch (e) {
        alert("Filen finns inte! \n\nLadda upp den manuellt i mappen EXTERNT MATERIAL/PRINTEN/vader eller montera den direkt från skrivbordet och bädda in länken.");
    }
}

// sydin
else if (sidnamn.match("SY")) {
    var vader = app.activeDocument.links.itemByName("fmisy_Dummy.pdf.jpg").parent;
    var vader_pdf = new File(servermapp + foldermapp + filnamn + "Syd-Osterbotten14.pdf");

    try { 
        vader.place(vader_pdf);
    }
    catch (e) {
        alert("Filen finns inte! \n\nLadda upp den manuellt i mappen EXTERNT MATERIAL/PRINTEN/vader eller montera den direkt från skrivbordet och bädda in länken.");
    }
}