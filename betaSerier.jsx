///////////////////////////////////////////////////////////////////////////////////////////////////
// betaSerier
// skript för att automatiskt montera serier på printsidor
//
// helge, nemi och zits är olika i vbl och öt. skiljer cirka ett år kronologiskt
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

/*

.pdf - dragos, zits, mutts, ankeborg  
.tif - helge, medel, nemi, hagbard

ÖT
ankeborg, 52237, 52279 
dragos, 52246, 52282  
helge, 52252, 52286 
medel, 52260, 52290 
nemi, 52266, 52295
zits, 52273, 52298

VBL
ankeborg, 51088, 51081  
hagbard, 51092, 51098
helge, 51108, 51102
mutts, 51116, 51122
nemi, 51133, 51127
zits, 51149, 51154

*/

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
    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".tif");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge_vbl/" + filnamn + ".tif");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(52290);
    var morrgan_strip = new File(servermapp + "mutts/" + filnamn + ".pdf");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi_vbl/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits_vbl/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // höger sida, ojämnt sidnummer
  // ÖT:s strippar
  else if (sidnummer % 3 == 0 && sidnamn.match("OTA")) {

    // alert(sidnummer + " är ojämnt.");

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
  else if (sidnummer % 3 == 0 && sidnamn.match("VBA")) {
    var ankeborg = doc.rectangles.itemByID(52279);
    var ankeborg_strip = new File(servermapp + "ankeborg/" + filnamn + ".pdf");
    ankeborg.place(ankeborg_strip);

    var hagbard = doc.rectangles.itemByID(52282);
    var dragos_strip = new File(servermapp + "hagbard/" + filnamn + ".tif");
    hagbard.place(hagbard_strip);

    var helge = doc.rectangles.itemByID(52286);
    var helge_strip = new File(servermapp + "helge_vbl/" + filnamn + ".tif");
    helge.place(helge_strip);

    var morrgan = doc.rectangles.itemByID(52290);
    var morrgan_strip = new File(servermapp + "mutts/" + filnamn + ".pdf");
    morrgan.place(morrgan_strip);

    var nemi = doc.rectangles.itemByID(52295);
    var nemi_strip = new File(servermapp + "nemi_vbl/" + filnamn + ".tif");
    nemi.place(nemi_strip);

    var zits = doc.rectangles.itemByID(52298);
    var zits_strip = new File(servermapp + "zits_vbl/" + filnamn + ".pdf");
    zits.place(zits_strip);
  }

  // varning om allt skiter sig
  else {
    alert("Nånting gick fel. Montera serierna manuellt!");
  }
}