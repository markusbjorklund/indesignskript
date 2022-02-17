///////////////////////////////////////////////////////////////////////////////////////////////////
// betaTeeVee
//
// används till automontering av tv-sidor
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

monteraTV(app.activeDocument);

function monteraTV(doc) {
    var sidnummer = app.activeWindow.activePage.name;
    var sidnamn = app.activeDocument.name;

    var datumidag = new Date();
    var dagens_tv = new Date(datumidag);

    dagens_tv.setDate(dagens_tv.getDate() + 1);

    var day = ("0" + dagens_tv.getDate()).slice(-2);
    var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
    var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);

    dagens_tv = year + month + day;

    var servermapp = "//server.adress.domain/Diverse/PRINTEN/auto/tv/";
    var filnamn = dagens_tv;

    // jämnt sidnummer
    if (sidnummer % 2 == 0 && sidnamn.match("OTA")) {
        var tv_print = doc.rectangles.itemByID(52666);
        var tv_0_print = new File(servermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
        tv_print.place(tv_0_print);
    }

    else if (sidnummer % 2 == 0 && sidnamn.match("VBA")) {
        var tv_print = doc.rectangles.itemByID(51147);
        var tv_0_print = new File(servermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
        tv_print.place(tv_0_print);
    }

    // ojämnt sidnummer
    if (sidnummer % 2 != 0 && sidnamn.match("OTA")) {
        var tv_print = doc.rectangles.itemByID(52437);
        var tv_1_print = new File(servermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
        tv_print.place(tv_1_print);
    }

    else if (sidnummer % 2 != 0 && sidnamn.match("VBA")) {
        var tv_print = doc.rectangles.itemByID(51203);
        var tv_1_print = new File(servermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
        tv_print.place(tv_1_print);
    }

    var tvdatum = new Date();
    var idag = new Date(tvdatum);
    var idag1 = new Date(tvdatum);
    var idag2 = new Date(tvdatum);

    idag.setDate(idag.getDate() + 1);
    idag1.setDate(idag1.getDate() + 2);
    idag2.setDate(idag2.getDate() + 3);

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
    var month1 = idag1.getMonth();
    var month2 = idag2.getMonth();

    idag = dayNames[day] + ' ' + idag.getDate() + ' ' + monthNames[month];
    idag1 = dayNames[day1] + ' ' + idag1.getDate() + ' ' + monthNames[month1];
    idag2 = dayNames[day2] + ' ' + idag2.getDate() + ' ' + monthNames[month2];

    // töm sök och ersätt
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

    // ersätt 
    app.findGrepPreferences.findWhat = "XXXXX ZZZZZ";
    app.changeGrepPreferences.changeTo = idag + '\n' + idag1 + '\n' + idag2;
    app.activeDocument.changeGrep();

    // töm sök och ersätt innan skriptet avslutas
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
}