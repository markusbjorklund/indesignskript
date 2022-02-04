///////////////////////////////////////////////////////////////////////////////////////////////////
// betaSerier
// skript för att automatiskt montera serier på printsidor
//
// helge, nemi och zits är olika i vbl och öt. skiljer cirka ett år kronologiskt
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

bytSeriestrip(app.activeDocument);

function bytSeriestrip(doc) {
  var sidnummer = app.activeWindow.activePage.name;
  var sidnamn = app.activeDocument.name;
  var servermapp = "~/Desktop/serier/";
  var filnamn = "ankeborg";

  // ID är aldrig lika på vänster eller höger sida. ¯\_(ツ)_/¯

  // vänster sida, jämnt sidnummer
  // ÖT:s strippar
  if (sidnummer % 2 == 0 && sidnamn.match("OTA")) {

    // alert(sidnummer + " är jämnt.");

    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".jpg");
    ankeborg.place(ankeborg_strip);

    var dragos = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "dragos/" + filnamn + ".jpg");
    dragos.place(dragos_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".jpg");
    helge.place(helge_strip);

    var medel = doc.rectangles.itemByID(52290);
    var medel_strip = new File(servermapp + "medel/" + filnamn + ".jpg");
    medel.place(medel_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".jpg");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".jpg");
    zits.place(zits_strip);
  }

  // VBL:s strippar
  else if (sidnummer % 2 == 0 && sidnamn.match("VBA")) {
    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".jpg");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".jpg");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".jpg");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(52290);
    var morrgan_strip = new File(servermapp + "morrgan/" + filnamn + ".jpg");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".jpg");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".jpg");
    zits.place(zits_strip);
  }

  // höger sida, ojämnt sidnummer
  // ÖT:s strippar
  else if (sidnummer % 3 == 0 && sidnamn.match("OTA")) {

    // alert(sidnummer + " är ojämnt.");

    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".jpg");
    ankeborg.place(ankeborg_strip);

    var dragos = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "dragos/" + filnamn + ".jpg");
    dragos.place(dragos_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".jpg");
    helge.place(helge_strip);

    var medel = doc.rectangles.itemByID(52290);
    var medel_strip = new File(servermapp + "medel/" + filnamn + ".jpg");
    medel.place(medel_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".jpg");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".jpg");
    zits.place(zits_strip);
  }

  // VBL:s strippar
  else if (sidnummer % 3 == 0 && sidnamn.match("VBA")) {
    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".jpg");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".jpg");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge/" + filnamn + ".jpg");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(52290);
    var morrgan_strip = new File(servermapp + "morrgan/" + filnamn + ".jpg");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi/" + filnamn + ".jpg");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits/" + filnamn + ".jpg");
    zits.place(zits_strip);
  }

  // varning om allt skiter sig
  else {
    alert("Nånting gick fel. Prova igen eller montera serierna manuellt!");
  }
}