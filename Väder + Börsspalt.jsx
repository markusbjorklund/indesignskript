///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera vädret och börsspalten på printsidor
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

// sidinformation
var sidnamn = app.activeDocument.name;

// filmappning
var serveradress = "//serveradressen hit/";
var filmapp = "Diverse/EXTERNT MATERIAL/PRINTEN/";

// datum för vädret
var dagens_vader = new Date();

dagens_vader.setDate(dagens_vader.getDate() + 1);
var day = ("0" + dagens_vader.getDate()).slice(-2);
var month = ("0" + (dagens_vader.getMonth() + 1)).slice(-2);
dagens_vader = day + month;
var filnamn = dagens_vader;

if (app.documents[0].pageItems.itemByName("borsen").isValid) {
    try {
        // kör in fyra börsspalter så finns det på alla mallar i paletten sidor
        for (i = 0; i < 4; i++) {
            var borsspalten = app.activeDocument.links.itemByName("borsen_Dummy.jpg").parent;
            var borsspalten_pdf = new File(serveradress + filmapp + "borsen/" + "Vasabladet.pdf");
            borsspalten.place(borsspalten_pdf);
        }
    }
    catch (e) {
        alert("Börsspalten har inte kommit ännu eller så är det problem med FTP-överföringen. Vänligen prova igen om en stund eller montera manuellt.");
    }
}

else if (app.documents[0].pageItems.itemByName("vader").isValid) {
    var vader = app.activeDocument.links.itemByName("vader_Dummy_.jpg").parent;
    var vader_pdf = new File(serveradress + filmapp + "vader/" + filnamn + "VasaBladet14.pdf");

    try {
        vader.place(vader_pdf);
    }
    catch (e) {
        alert("Vädret har inte kommit ännu eller så är det problem med FTP-överföringen. Vänligen prova igen om en stund eller montera manuellt.");
    }
}

else if (app.documents[0].pageItems.itemByName("sydinvader").isValid) {
    var sydinvader = app.activeDocument.links.itemByName("fmisy_Dummy.pdf.jpg").parent;
    var sydinvader_pdf = new File(serveradress + filmapp + "vader/" + filnamn + "Syd-Osterbotten14.pdf");

    try {
        sydinvader.place(sydinvader_pdf);
    }
    catch (e) {
        alert("Vädret har inte kommit ännu eller så är det problem med FTP-överföringen. Vänligen prova igen om en stund eller montera manuellt.");
    }
}

else {
    alert("Det finns inga giltiga objekt för automatisk montering.");
}