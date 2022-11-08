///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// skript för att automatiskt montera TV-tablåerna på printsidor
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

dialogWRadio("Montera TV-tablåer", true);

function dialogWRadio(dlgName, cancelIt) {
    //gör dialogruta
    var dlgRef = app.dialogs.add({ name: dlgName, canCancel: cancelIt });
    //fixa kolumn
    var dlgColumn = dlgRef.dialogColumns.add();
    //sätt till rader
    var dlgRow = dlgColumn.dialogRows.add();
    //sätt till radioknappar
    var rGroup = dlgRow.radiobuttonGroups.add();

    rGroup.radiobuttonControls.add({ staticLabel: "I morgon", checkedState: true });
    rGroup.radiobuttonControls.add({ staticLabel: "Söndag" });
    rGroup.radiobuttonControls.add({ staticLabel: "Måndag" });
    rGroup.radiobuttonControls.add({ staticLabel: "Tisdag" });
    rGroup.radiobuttonControls.add({ staticLabel: "Play (Fredag)" });

    // filmappning
    var servermapp = "//serveradressen kommer hit/";
    var foldermapp = "Diverse/EXTERNT MATERIAL/PRINTEN/tv/";

    if (dlgRef.show() == true) {
        var radioValue = rGroup.selectedButton;

        // datum för tv-tablåerna
        var dagens_tv = new Date();

        // automatik för datumraden på tv-sidan
        var datumrad = new Date();
        var dayNames = [
            "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"
        ];
        var monthNames = [
            "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
        ];

        // håll koll på om båda pdf:erna ska monteras
        var antalSidor = app.activeDocument.pages.length;

        // tv-tablåer för morgondagen
        if (radioValue == 0) {
            dagens_tv.setDate(dagens_tv.getDate() + 1);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            if (antalSidor > 1) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            else if (app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").isValid) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
            }

            else if (app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").isValid) {
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            datumrad.setDate(datumrad.getDate() + 1);
            var day = datumrad.getDay();
            var month = datumrad.getMonth();
            datumrad = dayNames[day] + ' ' + datumrad.getDate() + ' ' + monthNames[month];

            // töm sök och ersätt
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;

            // ersätt placeholder med datum
            app.findGrepPreferences.findWhat = "XXXXX ZZZZZ";
            app.changeGrepPreferences.changeTo = datumrad;
            app.activeDocument.changeGrep();

            // töm sök och ersätt innan skriptet avslutas
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;
        }

        // tv-tablåer för söndag
        else if (radioValue == 1) {
            dagens_tv.setDate(dagens_tv.getDate() + 2);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            if (antalSidor > 1) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            else if (app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").isValid) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
            }

            else if (app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").isValid) {
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            datumrad.setDate(datumrad.getDate() + 2);
            var day = datumrad.getDay();
            var month = datumrad.getMonth();
            datumrad = dayNames[day] + ' ' + datumrad.getDate() + ' ' + monthNames[month];

            // töm sök och ersätt
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;

            // ersätt placeholder med datum
            app.findGrepPreferences.findWhat = "XXXXX ZZZZZ";
            app.changeGrepPreferences.changeTo = datumrad;
            app.activeDocument.changeGrep();

            // töm sök och ersätt innan skriptet avslutas
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;
        }

        // tv-tablåer för måndag
        else if (radioValue == 2) {
            dagens_tv.setDate(dagens_tv.getDate() + 3);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            if (antalSidor > 1) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            else if (app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").isValid) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
            }

            else if (app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").isValid) {
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            datumrad.setDate(datumrad.getDate() + 3);
            var day = datumrad.getDay();
            var month = datumrad.getMonth();
            datumrad = dayNames[day] + ' ' + datumrad.getDate() + ' ' + monthNames[month];

            // töm sök och ersätt
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;

            // ersätt placeholder med datum
            app.findGrepPreferences.findWhat = "XXXXX ZZZZZ";
            app.changeGrepPreferences.changeTo = datumrad;
            app.activeDocument.changeGrep();

            // töm sök och ersätt innan skriptet avslutas
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;
        }

        // tv-tablåer för tisdagar
        else if (radioValue == 3) {
            dagens_tv.setDate(dagens_tv.getDate() + 4);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            if (antalSidor > 1) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
                var tv_h_print = app.activeDocument.links.itemByName("tv-h_Dummy_.jpg").parent;
                var tv_1_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-1-print" + ".pdf");
                tv_h_print.place(tv_1_print);
            }

            else if (app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").isValid) {
                var tv_print = app.activeDocument.links.itemByName("tv-v_Dummy_.jpg").parent;
                var tv_0_print = new File(servermapp + foldermapp + filnamn + "-TVRDAG-TSV-0-0-print" + ".pdf");
                tv_print.place(tv_0_print);
            }

            datumrad.setDate(datumrad.getDate() + 4);
            var day = datumrad.getDay();
            var month = datumrad.getMonth();
            datumrad = dayNames[day] + ' ' + datumrad.getDate() + ' ' + monthNames[month];

            // töm sök och ersätt
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;

            // ersätt placeholder med datum
            app.findGrepPreferences.findWhat = "XXXXX ZZZZZ";
            app.changeGrepPreferences.changeTo = datumrad;
            app.activeDocument.changeGrep();

            // töm sök och ersätt innan skriptet avslutas
            app.findGrepPreferences = NothingEnum.nothing;
            app.changeGrepPreferences = NothingEnum.nothing;
        }
        // tv-tablå för Play
        else if (radioValue == 4) {
            dagens_tv.setDate(dagens_tv.getDate() + 1);
            var day = ("0" + dagens_tv.getDate()).slice(-2);
            var month = ("0" + (dagens_tv.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_tv.getFullYear() + 0)).slice(-2);
            dagens_tv = year + month + day;
            var filnamn = dagens_tv;

            var play = app.activeDocument.links.itemByName("play_Dummy.jpg").parent;
            var play_pdf = new File(servermapp + foldermapp + filnamn + "-TVRVKO-PLAY-0-0-print.pdf");

            try {
                play.place(play_pdf);
            }
            catch (e) {
                alert("Play-tablån har inte kommit ännu eller så är det problem med FTP-överföringen. Prova igen om en stund eller montera manuellt.");
            }
        }
    }
}