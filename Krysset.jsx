/*
script author Markus Bjorklund
*/

dialogWRadio("Montera korsordet", true);

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

    // filmappning
    var serveradress = "//serveradressen hit/";
    var filmapp = "Diverse/EXTERNT MATERIAL/PRINTEN/korsord/";

    if (dlgRef.show() == true) {
        var radioValue = rGroup.selectedButton;

        // datum för korsordet
        var dagens_kryss = new Date();

        // korsord för morgondagen
        if (radioValue == 0 && app.documents[0].pageItems.itemByName("kryss").isValid) {
            dagens_kryss.setDate(dagens_kryss.getDate() + 1);
            var day = ("0" + dagens_kryss.getDate()).slice(-2);
            var month = ("0" + (dagens_kryss.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_kryss.getFullYear() + 0)).slice(-2);
            dagens_kryss = year + month + day;
            var filnamn = dagens_kryss;
                        
            var krysset = app.activeDocument.links.itemByName("kryss_Dummy.jpg").parent;
            var kryss_pdf = new File(serveradress + filmapp + filnamn + "_Korsord.pdf");

            try {
                krysset.place(kryss_pdf);
            }
            catch (e) {
                alert("Krysset har inte kommit ännu eller så är det problem med FTP-överföringen. Prova igen om en stund eller montera manuellt.");
            }
        }

        // korsord för söndag
        else if (radioValue == 1 && app.documents[0].pageItems.itemByName("kryss").isValid) {
            dagens_kryss.setDate(dagens_kryss.getDate() + 2);
            var day = ("0" + dagens_kryss.getDate()).slice(-2);
            var month = ("0" + (dagens_kryss.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_kryss.getFullYear() + 0)).slice(-2);
            dagens_kryss = year + month + day;
            var filnamn = dagens_kryss;

            var krysset = app.activeDocument.links.itemByName("kryss_Dummy.jpg").parent;
            var kryss_pdf = new File(serveradress + filmapp + filnamn + "_Korsord.pdf");

            try {
                krysset.place(kryss_pdf);
            }
            catch (e) {
                alert("Krysset har inte kommit ännu eller så är det problem med FTP-överföringen. Prova igen om en stund eller montera manuellt.");
            }
        }

        // korsord för måndag
        else if (radioValue == 2 && app.documents[0].pageItems.itemByName("kryss").isValid) {
            dagens_kryss.setDate(dagens_kryss.getDate() + 3);
            var day = ("0" + dagens_kryss.getDate()).slice(-2);
            var month = ("0" + (dagens_kryss.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_kryss.getFullYear() + 0)).slice(-2);
            dagens_kryss = year + month + day;
            var filnamn = dagens_kryss;

            var krysset = app.activeDocument.links.itemByName("kryss_Dummy.jpg").parent;
            var kryss_pdf = new File(serveradress + filmapp + filnamn + "_Korsord.pdf");

            try {
                krysset.place(kryss_pdf);
            }
            catch (e) {
                alert("Krysset har inte kommit ännu eller så är det problem med FTP-överföringen. Prova igen om en stund eller montera manuellt.");
            }
        }
        
        // korsord för tisdagar
        else if (radioValue == 3 && app.documents[0].pageItems.itemByName("kryss").isValid) {
            dagens_kryss.setDate(dagens_kryss.getDate() + 4);
            var day = ("0" + dagens_kryss.getDate()).slice(-2);
            var month = ("0" + (dagens_kryss.getMonth() + 1)).slice(-2);
            var year = ("" + (dagens_kryss.getFullYear() + 0)).slice(-2);
            dagens_kryss = year + month + day;
            var filnamn = dagens_kryss;

            var krysset = app.activeDocument.links.itemByName("kryss_Dummy.jpg").parent;
            var kryss_pdf = new File(serveradress + filmapp + filnamn + "_Korsord.pdf");

            try {
                krysset.place(kryss_pdf);
            }
            catch (e) {
                alert("Krysset har inte kommit ännu eller så är det problem med FTP-överföringen. Prova igen om en stund eller montera manuellt.");
            }
        }
    }
    else {
        alert("Det finns inga giltiga objekt för automatisk montering.");
    }
}