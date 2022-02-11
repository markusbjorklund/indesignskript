///////////////////////////////////////////////////////////////////////////////////////////////////
// betaSerier, IN PROGRESS
// skript för att automatiskt montera serier på printsidor
//
// helge, nemi och zits är olika i vbl och öt. ¯\_(ツ)_/¯ (skiljer cirka ett år kronologiskt)
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

bytSeriestrip(app.activeDocument);

function bytSeriestrip(doc) {
  var sidnummer = app.activeWindow.activePage.name;
  var sidnamn = app.activeDocument.name;
  var servermapp = "~/Desktop/serier/"; // servern måste mappas så den får en drive bokstav
  var filnamn = "ankeborg"; // filnamn görs med betaDatum, stripparna namnges med Automator

  // vänster sida, jämnt sidnummer
  // ÖT:s strippar
  if (sidnummer % 2 == 0 && sidnamn.match("OTA")) {
    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var dragos = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "dragos/" + filnamn + ".pdf");
    dragos.place(dragos_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".tif");
    helge.place(helge_strip);

    var medel = doc.rectangles.itemByID(52290);
    var medel_strip = new File(servermapp + "medel/" + filnamn + ".tif");
    medel.place(medel_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // VBL:s strippar
  else if (sidnummer % 2 == 0 && sidnamn.match("VBA")) {
    var ankeborg = doc.rectangles.itemByID(51081);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(51098);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".tif");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(51102);
    var helge_strip = new File(servermapp + "helge_vbl/" + filnamn + ".tif");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(51122);
    var morrgan_strip = new File(servermapp + "mutts/" + filnamn + ".pdf");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(51127);
    var nemi_strip = new File(servermapp + "nemi_vbl/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(51154);
    var zits_strip = new File(servermapp + "zits_vbl/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // höger sida, ojämnt sidnummer
  // ÖT:s strippar
  else if (sidnummer % 2 != 0 && sidnamn.match("OTA")) {
    var ankeborg = doc.rectangles.itemByID(52237);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var dragos = doc.rectangles.itemByID(52246);
    var dragos_strip = new File(servermapp + "dragos/" + filnamn + ".pdf");
    dragos.place(dragos_strip);

    var helge = doc.rectangles.itemByID(52252);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".tif");
    helge.place(helge_strip);

    var medel = doc.rectangles.itemByID(52260);
    var medel_strip = new File(servermapp + "medel/" + filnamn + ".tif");
    medel.place(medel_strip);

    var nemi = doc.rectangles.itemByID(52266);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52273);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // VBL:s strippar
  else if (sidnummer % 2 != 0 && sidnamn.match("VBA")) {
    var ankeborg = doc.rectangles.itemByID(51088);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(51092);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".tif");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(51108);
    var helge_strip = new File(servermapp + "helge_vbl/" + filnamn + ".tif");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(51116);
    var morrgan_strip = new File(servermapp + "mutts/" + filnamn + ".pdf");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(51133);
    var nemi_strip = new File(servermapp + "nemi_vbl/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(51149);
    var zits_strip = new File(servermapp + "zits_vbl/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // varning om allt skiter sig
  else {
    alert("Datorn säger nej!");
  }
}
