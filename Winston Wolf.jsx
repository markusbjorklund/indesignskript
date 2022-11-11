/*
                               __
                             .d$$b
                           .' TO$;\
                          /  : TP._;
                         / _.;  :Tb|
                        /   /   ;j$j
                    _.-"       d$$$$
                  .' ..       d$$$$;
                 /  /P'      d$$$$P. |\
                /   "      .d$$$P' |\^"l
              .'           `T$P^"""""  :
          ._.'      _.'                ;
       `-.-".-'-' ._.       _.-"    .-"
     `.-" _____  ._              .-"
    -(.g$$$$$$$b.              .'
      ""^^T$$$P^)            .(:
        _/  -"  /.'         /:/;
     ._.'-'`-'  ")/         /;/;
  `-.-"..--""   " /         /  ;
 .-" ..--""        -'          :
 ..--""--.-"         (\      .-(\
   ..--""              `-\(\/;`
     _.                      :
                             ;`-
                            :\
                            ;
                            
// --- Winston Wolf aka The Wolf --- //

Winston Wolf, also known as "The Wolf", is a supporting character in Quentin Tarantino's second film, Pulp Fiction.
He is a cleaner working for Marsellus Wallace and was portrayed by Harvey Keitel.

Call "The Wolf" by pressing F12.

script author Markus Bjorklund
*/

try {
  // variabel för filnamnet på dokumentet – används för automejl(vbl, öt, sydin och bilagor) och sidlappar (vbl och öt)
  var sidnamn = app.activeDocument.name;

  // töm sök och ersätt innan skriptet kör
  app.findGrepPreferences = NothingEnum.nothing;
  app.changeGrepPreferences = NothingEnum.nothing;

  // fixa korrekt pratminus
  app.findGrep.findWhat = "\\\x{D}- ";
  app.changeGrep.changeTo = "\\\x{D}– ";
  app.activeDocument.changeGrep();

  // fixa till korrekt blanksteg efter pratminus
  app.findGrep.findWhat = "– ";
  app.changeGrep.changeTo = "–\\\x{2009}";
  app.activeDocument.changeGrep();

  // fixa stupid
  app.findGrep.findWhat = " –\\\x{2009}";
  app.changeGrep.changeTo = " – ";
  app.activeDocument.changeGrep();

  // fixa mellanslaget efter Ortnamn i text, direkt efter import från mananger
  app.findGrep.findWhat = " \\\x{002E} ";
  app.changeGrep.changeTo = "\\\x{002E}";
  app.activeDocument.changeGrep();

  // fixa mellanslaget efter Ortnamn i text, för artikel som finns i systemet och får ändrad layout
  app.findGrep.findWhat = "\\\x{002E}  ";
  app.changeGrep.changeTo = "\\\x{002E} ";
  app.activeDocument.changeGrep();

  // fixa dubbla rader på citatrutorna
  app.findGrep.findWhat = "\\\x{A}              \\\x{D}";
  app.changeGrep.changeTo = "";
  app.activeDocument.changeGrep();

  // fixa onödigt radbyte på tidningsbylinen – åtgärdar bugg som finns i nya NP
  app.findGrep.findWhat = "\\\x{D}\\\x{0020}Vbl";
  app.changeGrep.changeTo = " VBL";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "\\\x{D}\\\x{0020}VBL";
  app.changeGrep.changeTo = " VBL";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "\\\x{D}\\\x{0020}Öt";
  app.changeGrep.changeTo = " ÖT";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "\\\x{D}\\\x{0020}ÖT";
  app.changeGrep.changeTo = " ÖT";
  app.activeDocument.changeGrep();

  // rödflagga webbspecifika element i artikeln som kommer från managern
  app.findGrep.findWhat = "Läs också:";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har länkat material på webben.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "LÄS OCKSÅ:";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har länkat material på webben.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "Artikeln uppdaterad";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "Artikeln är uppdaterad";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "Uppdaterad klockan";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "Uppdaterad kl";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
  app.activeDocument.changeGrep();

  app.findGrep.findWhat = "Uppdaterad kl.";
  app.changeGrep.appliedCharacterStyle = "Bildingress ingång";
  app.changeGrep.changeTo = "\\\x{D}Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
  app.activeDocument.changeGrep();

  // töm sök och ersätt
  app.findGrepPreferences = NothingEnum.nothing;
  app.changeGrepPreferences = NothingEnum.nothing;

  // ändra mejladresser för vasabladet
  if (sidnamn.match("VB-") || sidnamn.match("VBA")) {
    app.findGrep.findWhat = "@ot.fi";
    app.changeGrep.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@sydin.fi";
    app.changeGrep.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@hssmedia.fi";
    app.changeGrep.changeTo = "@vasabladet.fi";
    app.activeDocument.changeGrep();

    // ändra avdelningsmejladresser för vasabladet
    app.findGrep.findWhat = "red@vasabladet.fi";
    app.changeGrep.changeTo = "nyheter@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "sporten@vasabladet.fi";
    app.changeGrep.changeTo = "sport@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "otkultur@vasabladet.fi";
    app.changeGrep.changeTo = "kultur@vasabladet.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "otdebatt@vasabladet.fi";
    app.changeGrep.changeTo = "debatt@vasabladet.fi";
    app.activeDocument.changeGrep();

    // ändra telefonnummer för vasabladet
    app.findGrep.findWhat = "06-7848 803";
    app.changeGrep.changeTo = "06-7848 200";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 453";
    app.changeGrep.changeTo = "06-7848 293";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 545";
    app.changeGrep.changeTo = "06-7848 289";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 472";
    app.changeGrep.changeTo = "06-7848 204";
    app.activeDocument.changeGrep();
  }

  // ändra mejladresser för ot
  else if (sidnamn.match("OT-") || sidnamn.match("OTA")) {
    app.findGrep.findWhat = "@vasabladet.fi";
    app.changeGrep.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@sydin.fi";
    app.changeGrep.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@hssmedia.fi";
    app.changeGrep.changeTo = "@ot.fi";
    app.activeDocument.changeGrep();

    // ändra avdelningsmejladresser för ot
    app.findGrep.findWhat = "nyheter@ot.fi";
    app.changeGrep.changeTo = "red@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "sport@ot.fi";
    app.changeGrep.changeTo = "sporten@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "kultur@ot.fi";
    app.changeGrep.changeTo = "otkultur@ot.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "debatt@ot.fi";
    app.changeGrep.changeTo = "otdebatt@ot.fi";
    app.activeDocument.changeGrep();
    // take care of stupid
    app.findGrep.findWhat = "otot";
    app.changeGrep.changeTo = "ot";
    app.activeDocument.changeGrep();

    // ändra telefonnummer för ot
    app.findGrep.findWhat = "06-7848 200";
    app.changeGrep.changeTo = "06-7848 803";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 293";
    app.changeGrep.changeTo = "06-7848 453";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 289";
    app.changeGrep.changeTo = "06-7848 545";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "06-7848 204";
    app.changeGrep.changeTo = "06-7848 472";
    app.activeDocument.changeGrep();
  }

  // ändra mejladresser för sydin
  else if (sidnamn.match("SY-") || sidnamn.match("SYA")) {
    app.findGrep.findWhat = "@vasabladet.fi";
    app.changeGrep.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@ot.fi";
    app.changeGrep.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@hssmedia.fi";
    app.changeGrep.changeTo = "@sydin.fi";
    app.activeDocument.changeGrep();
  }

  // ändra mejladresser för bilagor
  else if (sidnamn.match("VBT1-") || sidnamn.match("OTT1-") || sidnamn.match("SYTT1-")) {
    app.findGrep.findWhat = "@vasabladet.fi";
    app.changeGrep.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@ot.fi";
    app.changeGrep.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
    app.findGrep.findWhat = "@sydin.fi";
    app.changeGrep.changeTo = "@hssmedia.fi";
    app.activeDocument.changeGrep();
  }

  // töm sök och ersätt innan skriptet avslutas
  app.findGrepPreferences = NothingEnum.nothing;
  app.changeGrepPreferences = NothingEnum.nothing;
}
catch (e) {
  alert("För att köra skriptet måste du ha en sida öppen.");
}