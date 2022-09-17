///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera sporten TV-tablåer på printsidor
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

dialogWRadio("Montera sportens TV-tablå", true);

function dialogWRadio(dlgName, cancelIt) {
    //gör dialogruta
    var dlgRef = app.dialogs.add({ name: dlgName, canCancel: cancelIt });
    //fixa kolumn
    var dlgColumn = dlgRef.dialogColumns.add();
    //sätt till rader
    var dlgRow = dlgColumn.dialogRows.add();
    //sätt till radioknappar
    var rGroup = dlgRow.radiobuttonGroups.add();

    rGroup.radiobuttonControls.add({ staticLabel: "Vardag", checkedState: true });
    rGroup.radiobuttonControls.add({ staticLabel: "2 dagar" });
    rGroup.radiobuttonControls.add({ staticLabel: "3 dagar" });

    // filmappning
    var servermapp = "//serveradressen kommer hit/";
    var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/tv/";

    if (dlgRef.show() == true) {
        var radioValue = rGroup.selectedButton;

        // datum för tv-tablåerna
        var dagens_tv = new Date();

        // automatik för utskriven dag på vinjetten
        var datumrad = new Date();
        var dayNames = [
            "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
        ];

        // tv-tablå för vardag
        if (radioValue == 0) {
            dagens_tv.setDate(dagens_tv.getDate() + 1);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            var tv_print = app.activeDocument.links.itemByName("sport_Dummy_vardag.jpg").parent;
            var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRSPT-SPT-0-0-print" + ".pdf");
            tv_print.place(tv_0_print);
        }

        datumrad.setDate(datumrad.getDate() + 1);
        var day = datumrad.getDay();
        datumrad = dayNames[day];

        // töm sök och ersätt
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        // ersätt placeholder med datum
        app.findGrepPreferences.findWhat = "TABLA_1";
        app.changeGrepPreferences.changeTo = datumrad;
        app.activeDocument.changeGrep();

        // töm sök och ersätt innan skriptet avslutas
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

    // tv-tablåer för 2 dagar
    else if (radioValue == 1) {
            dagens_tv.setDate(dagens_tv.getDate() + 1);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            morgondagens_tv.setDate(morgondagens_tv.getDate() + 2);
            var day = ("0" + morgondagens_tv.getDate()).slice(-2);
            var month = ("0" + (morgondagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (morgondagens_tv.getFullYear() + 0)).slice(-2);
            morgondagens_tv = year + month + day;
            var filnamn1 = morgondagens_tv;

            var tv_print = app.activeDocument.links.itemByName("sport_Dummy_vardag.jpg").parent;
            var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRSPT-SPT-0-0-print" + ".pdf");
            tv_print.place(tv_0_print);

            var tv_1_print = app.activeDocument.links.itemByName("sport_Dummy_helg1.jpg").parent;
            var tv_1_print = new File(servermapp + foldermapp + filnamn1 + "-TVRSPT-SPT-0-0-print" + ".pdf");
            tv_1_print.place(tv_1_print);
        }

        datumrad.setDate(datumrad.getDate() + 1);
        var day = datumrad.getDay();
        datumrad = dayNames[day];

        // töm sök och ersätt
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        // ersätt placeholder med datum
        app.findGrepPreferences.findWhat = "TABLA_1";
        app.changeGrepPreferences.changeTo = datumrad;
        app.activeDocument.changeGrep();

        // töm sök och ersätt innan skriptet avslutas
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        datumrad.setDate(datumrad.getDate() + 2);
        var day = datumrad.getDay();
        datumrad = dayNames[day];

        // töm sök och ersätt
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        // ersätt placeholder med datum
        app.findGrepPreferences.findWhat = "TABLA_2";
        app.changeGrepPreferences.changeTo = datumrad;
        app.activeDocument.changeGrep();

        // töm sök och ersätt innan skriptet avslutas
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

    // tv-tablåer för 3 dagar
    else if (radioValue == 2) {
            dagens_tv.setDate(dagens_tv.getDate() + 1);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            morgondagens_tv.setDate(morgondagens_tv.getDate() + 2);
            var day = ("0" + morgondagens_tv.getDate()).slice(-2);
            var month = ("0" + (morgondagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (morgondagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn1 = morgondagens_tv;

            var tv_print = app.activeDocument.links.itemByName("sport_Dummy_vardag.jpg").parent;
            var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRSPT-SPT-0-0-print" + ".pdf");
            tv_print.place(tv_0_print);

            var tv_1_print = app.activeDocument.links.itemByName("sport_Dummy_helg1.jpg").parent;
            var tv_1_print = new File(servermapp + foldermapp + filnamn1 + "-TVRSPT-SPT-0-0-print" + ".pdf");
            tv_1_print.place(tv_1_print);
        }

        datumrad.setDate(datumrad.getDate() + 1);
        var day = datumrad.getDay();
        datumrad = dayNames[day];

        // töm sök och ersätt
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        // ersätt placeholder med datum
        app.findGrepPreferences.findWhat = "TABLA_1";
        app.changeGrepPreferences.changeTo = datumrad;
        app.activeDocument.changeGrep();

        // töm sök och ersätt innan skriptet avslutas
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        datumrad.setDate(datumrad.getDate() + 2);
        var day = datumrad.getDay();
        datumrad = dayNames[day];

        // töm sök och ersätt
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;

        // ersätt placeholder med datum
        app.findGrepPreferences.findWhat = "TABLA_2";
        app.changeGrepPreferences.changeTo = datumrad;
        app.activeDocument.changeGrep();

        // töm sök och ersätt innan skriptet avslutas
        app.findGrepPreferences = NothingEnum.nothing;
        app.changeGrepPreferences = NothingEnum.nothing;
    }
}