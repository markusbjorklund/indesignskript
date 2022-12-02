/*
script author Markus Bjorklund
*/

Putsa();

function Putsa() {
  if (app.documents.length < 1) {
    alert("För att köra skriptet måste du ha en sida öppen.");
    return;
  }
  else {
    // sidnamn för e-post mm.
    var sidnamn = app.activeDocument.name;

    // töm sök och ersätt innan skriptet kör
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

    // fixa korrekt pratminus
    app.findGrepPreferences.findWhat = "\\\x{D}- ";
    app.changeGrepPreferences.changeTo = "\\\x{D}– ";
    app.activeDocument.changeGrep();

    // fixa till korrekt blanksteg efter pratminus
    app.findGrepPreferences.findWhat = "– ";
    app.changeGrepPreferences.changeTo = "–\\\x{2009}";
    app.activeDocument.changeGrep();

    // fixa stupid
    app.findGrepPreferences.findWhat = " –\\\x{2009}";
    app.changeGrepPreferences.changeTo = " – ";
    app.activeDocument.changeGrep();

    // fixa mellanslaget efter Ortnamn i text, direkt efter import från mananger
    app.findGrepPreferences.findWhat = " \\\x{002E} ";
    app.changeGrepPreferences.changeTo = "\\\x{002E}";
    app.activeDocument.changeGrep();

    // fixa mellanslaget efter Ortnamn i text, för artikel som finns i systemet och får ändrad layout
    app.findGrepPreferences.findWhat = "\\\x{002E}  ";
    app.changeGrepPreferences.changeTo = "\\\x{002E} ";
    app.activeDocument.changeGrep();

    // fixa dubbla rader på citatrutorna
    app.findGrepPreferences.findWhat = "\\\x{A}              \\\x{D}";
    app.changeGrepPreferences.changeTo = "";
    app.activeDocument.changeGrep();

    // fixa onödigt radbyte på tidningsbylinen – åtgärdar bugg som finns i nya NP
    app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}Vbl";
    app.changeGrepPreferences.changeTo = " VBL";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}VBL";
    app.changeGrepPreferences.changeTo = " VBL";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}Öt";
    app.changeGrepPreferences.changeTo = " ÖT";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "\\\x{D}\\\x{0020}ÖT";
    app.changeGrepPreferences.changeTo = " ÖT";
    app.activeDocument.changeGrep();

    // rödflagga webbspecifika element i artikeln som kommer från managern
    app.findGrepPreferences.findWhat = "Läs också:";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har länkat material på webben.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "LÄS OCKSÅ:";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har länkat material på webben.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Artikeln uppdaterad";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Artikeln är uppdaterad";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad klockan";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad kl";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad kl.";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad (\\d)(\\d).(\\d)(\\d)";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad (\\d).(\\d)(\\d)";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad (\\d)(\\d).(\\d)";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = "Uppdaterad (\\d).(\\d)";
    app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
    app.changeGrepPreferences.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
    app.activeDocument.changeGrep();

    // töm sök och ersätt
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

    // fixa vanliga upprepningar
    app.findGrepPreferences.findWhat = " en en ";
    app.changeGrepPreferences.changeTo = " en ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " ett ett ";
    app.changeGrepPreferences.changeTo = " ett ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " är är ";
    app.changeGrepPreferences.changeTo = " är ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " för för ";
    app.changeGrepPreferences.changeTo = " för ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " har har ";
    app.changeGrepPreferences.changeTo = " har ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " att att ";
    app.changeGrepPreferences.changeTo = " att ";
    app.activeDocument.changeGrep();

    app.findGrepPreferences.findWhat = " det det ";
    app.changeGrepPreferences.changeTo = " det ";
    app.activeDocument.changeGrep();

    // töm sök och ersätt
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;

    // ändra mejladresser för vasabladet
    if (sidnamn.match("VB-") || sidnamn.match("VBA")) {
      app.findGrepPreferences.findWhat = "@ot.fi";
      app.changeGrepPreferences.changeTo = "@vasabladet.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@sydin.fi";
      app.changeGrepPreferences.changeTo = "@vasabladet.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@hssmedia.fi";
      app.changeGrepPreferences.changeTo = "@vasabladet.fi";
      app.activeDocument.changeGrep();

      // ändra avdelningsmejladresser för vasabladet
      app.findGrepPreferences.findWhat = "red@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "nyheter@vasabladet.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "sporten@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "sport@vasabladet.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "otkultur@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "kultur@vasabladet.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "otdebatt@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "debatt@vasabladet.fi";
      app.activeDocument.changeGrep();

      // ändra telefonnummer för vasabladet
      app.findGrepPreferences.findWhat = "06-7848 803";
      app.changeGrepPreferences.changeTo = "06-7848 200";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 453";
      app.changeGrepPreferences.changeTo = "06-7848 293";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 545";
      app.changeGrepPreferences.changeTo = "06-7848 289";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 472";
      app.changeGrepPreferences.changeTo = "06-7848 204";
      app.activeDocument.changeGrep();
    }

    // ändra mejladresser för ot
    else if (sidnamn.match("OT-") || sidnamn.match("OTA")) {
      app.findGrepPreferences.findWhat = "@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "@ot.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@sydin.fi";
      app.changeGrepPreferences.changeTo = "@ot.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@hssmedia.fi";
      app.changeGrepPreferences.changeTo = "@ot.fi";
      app.activeDocument.changeGrep();

      // ändra avdelningsmejladresser för ot
      app.findGrepPreferences.findWhat = "nyheter@ot.fi";
      app.changeGrepPreferences.changeTo = "red@ot.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "sport@ot.fi";
      app.changeGrepPreferences.changeTo = "sporten@ot.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "kultur@ot.fi";
      app.changeGrepPreferences.changeTo = "otkultur@ot.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "debatt@ot.fi";
      app.changeGrepPreferences.changeTo = "otdebatt@ot.fi";
      app.activeDocument.changeGrep();
      // take care of stupid
      app.findGrepPreferences.findWhat = "otot";
      app.changeGrepPreferences.changeTo = "ot";
      app.activeDocument.changeGrep();

      // ändra telefonnummer för ot
      app.findGrepPreferences.findWhat = "06-7848 200";
      app.changeGrepPreferences.changeTo = "06-7848 803";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 293";
      app.changeGrepPreferences.changeTo = "06-7848 453";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 289";
      app.changeGrepPreferences.changeTo = "06-7848 545";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "06-7848 204";
      app.changeGrepPreferences.changeTo = "06-7848 472";
      app.activeDocument.changeGrep();
    }

    // ändra mejladresser för sydin
    else if (sidnamn.match("SY-") || sidnamn.match("SYA")) {
      app.findGrepPreferences.findWhat = "@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "@sydin.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@ot.fi";
      app.changeGrepPreferences.changeTo = "@sydin.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@hssmedia.fi";
      app.changeGrepPreferences.changeTo = "@sydin.fi";
      app.activeDocument.changeGrep();
    }

    // ändra mejladresser för bilagor
    else if (sidnamn.match("VBT1-") || sidnamn.match("OTT1-") || sidnamn.match("SYTT1-")) {
      app.findGrepPreferences.findWhat = "@vasabladet.fi";
      app.changeGrepPreferences.changeTo = "@hssmedia.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@ot.fi";
      app.changeGrepPreferences.changeTo = "@hssmedia.fi";
      app.activeDocument.changeGrep();
      app.findGrepPreferences.findWhat = "@sydin.fi";
      app.changeGrepPreferences.changeTo = "@hssmedia.fi";
      app.activeDocument.changeGrep();
    }

    // töm sök och ersätt
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
  }

  // MATCHVINJETTER START
  // fixa rätt streck mellan resultaten
  app.findGrepPreferences.findWhat = "(\\d)(\\d)-(\\d)(\\d)";
  app.changeGrepPreferences.changeTo = "$1$2–$3$4";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "(\\d)(\\d)-(\\d)";
  app.changeGrepPreferences.changeTo = "$1$2–$3";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "(\\d)-(\\d)(\\d)";
  app.changeGrepPreferences.changeTo = "$1–$2$3";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "(\\d)-(\\d)";
  app.changeGrepPreferences.changeTo = "$1–$2";
  app.activeDocument.changeGrep();

  // fixa strecket rätt för telefonnummern efter matchvinjettautmatiken
  app.findGrepPreferences.findWhat = "(\\d)(\\d)-(\\d)(\\d)(\\d)(\\d)( )(\\d)(\\d)(\\d)";
  app.changeGrepPreferences.changeTo = "$1$2-$3$4$5$6 $7$8$9";
  app.activeDocument.changeGrep();

  // ta bort statisktiken
  app.findGrepPreferences.findWhat = "STATISTIK START(?s).*STATISTIK SLUT";
  app.changeGrepPreferences.changeTo = "";
  app.activeDocument.changeGrep();

  // ta bort end-taggen
  app.findGrepPreferences.findWhat = "STATISTIK SLUT";
  app.changeGrepPreferences.changeTo = "";
  app.activeDocument.changeGrep();

  // fixa egen rad till periodsiffrorna
  app.findGrepPreferences.findWhat = "\(\\d)( )\\((\\d)";
  app.changeGrepPreferences.changeTo = "$1\\n($3";
  app.activeDocument.changeGrep();

  // fixa konsekvent e förl.
  app.findGrepPreferences.findWhat = "e(\\.) förl.";
  app.changeGrepPreferences.changeTo = "e förl.";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "e(\\.) förl";
  app.changeGrepPreferences.changeTo = "e förl.";
  app.activeDocument.changeGrep();

  // fixa konsekvent e str.
  app.findGrepPreferences.findWhat = "e(\\.) str.";
  app.changeGrepPreferences.changeTo = "e str.";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "e(\\.) str";
  app.changeGrepPreferences.changeTo = "e str.";
  app.activeDocument.changeGrep();

  // fixa egen rad till periodsiffrorna efter förl.
  app.findGrepPreferences.findWhat = "\(\\.)( )\\((\\d)";
  app.changeGrepPreferences.changeTo = "$1\\n($3";
  app.activeDocument.changeGrep();

  app.findGrepPreferences.findWhat = "\(\\.)()\\((\\d)";
  app.changeGrepPreferences.changeTo = "$1\\n($3";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-x
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d)(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-x
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d)(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-xx
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d)(\\d)(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4$5\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-xx
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d)(\\d)(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3$4\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-x förl.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d) e förl.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3 e förl.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-x förl.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d) e förl.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4 e förl.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-xx förl.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d)(\\d) e förl.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4$5 e förl.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-xx förl.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d)(\\d) e förl.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3$4 e förl.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-x str.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d) e str.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4 e str.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-x str.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d) e str.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3 e str.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben xx-xx str.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)(\\d)–(\\d)(\\d) e str.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2$3–$4$5 e str.\n";
  app.activeDocument.changeGrep();

  // fixa shift-tabben x-xx str.
  app.findGrepPreferences.findWhat = "(\\w) (\\d)–(\\d)(\\d) e str.(\\n)";
  app.changeGrepPreferences.changeTo = "$1\\\x{0008}$2–$3$4 e str.\n";
  app.activeDocument.changeGrep();
  // MATCHVINJETTER SLUT

  // töm grep innan skriptet avslutas
  app.findGrepPreferences = NothingEnum.nothing;
  app.changeGrepPreferences = NothingEnum.nothing;
}