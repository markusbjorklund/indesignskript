/*
script author Markus Bjorklund
*/

dialogWRadio("Montera serier", true);

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

    // sidinformation
    var sidnamn = app.activeDocument.name;
    
    // filmappning
    var serveradress = "//serveradressen kommer hit/";
    var filmapp = "Diverse/EXTERNT MATERIAL/PRINTEN/serier/";

    if (dlgRef.show() == true) {
        var radioValue = rGroup.selectedButton;

        // datum för serierna
        var dagens_serie = new Date();

        // vbl:s strippar för i dag
        if (radioValue == 0 && sidnamn.match("VB")) {
            dagens_serie.setDate(dagens_serie.getDate() + 1);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var hagbard = app.activeDocument.links.itemByName("HAG_Dummy.pdf.jpg").parent;
            var hagbard_strip = new File(serveradress + filmapp + "vbl/hagbard/HAG_" + filnamn + ".tif");
            hagbard.place(hagbard_strip);
        
            var helge = app.activeDocument.links.itemByName("HEVBL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "vbl/helge/HEVBL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var morrgan = app.activeDocument.links.itemByName("MUT_Dummy.tif.jpg").parent;
            var morrgan_strip = new File(serveradress + filmapp + "vbl/mutts/MUT_" + filnamn + ".pdf");
            morrgan.place(morrgan_strip);
        
            var nemi = app.activeDocument.links.itemByName("NM_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "vbl/nemi/NM_" + filnamn + ".tif");
            nemi.place(nemi_strip);
            
            var zits = app.activeDocument.links.itemByName("ZIVBL_Dummy.tif.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "vbl/zits/ZIVBL_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // öt:s strippar för i dag
        else if (radioValue == 0 && sidnamn.match("OT")) {
            dagens_serie.setDate(dagens_serie.getDate() + 1);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var dragos = app.activeDocument.links.itemByName("DRA_Dummy.pdf.jpg").parent;
            var dragos_strip = new File(serveradress + filmapp + "ot/dragos/DRA_" + filnamn + ".pdf");
            dragos.place(dragos_strip);
        
            var helge = app.activeDocument.links.itemByName("HÄL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "ot/helge/HÄL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var medel = app.activeDocument.links.itemByName("MED_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "ot/medel/MED_" + filnamn + ".tif");
            medel.place(medel_strip);
            
            var nemi = app.activeDocument.links.itemByName("NEMOT_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "ot/nemi/NEMOT_" + filnamn + ".tif");
            nemi.place(nemi_strip);
        
            var zits = app.activeDocument.links.itemByName("ZIT_Dummy.pdf.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "ot/zits/ZIT_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // sydins strippar för i dag
        else if (radioValue == 0 && sidnamn.match("SY")) {
            dagens_serie.setDate(dagens_serie.getDate() + 1);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var zits = app.activeDocument.links.itemByName("ZTSyd_Dummy.TIF.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "sydin/zits/ZTSyd_" + filnamn + ".tif");
            zits.place(zits_strip);

            var helge = app.activeDocument.links.itemByName("HESY_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "sydin/helge/HESY_" + filnamn + ".tif");
            helge.place(helge_strip);

            var medel = app.activeDocument.links.itemByName("MEDSY_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "sydin/medel/MEDSY_" + filnamn + ".tif");
            medel.place(medel_strip);
        }

        // vbl:s strippar för i morgon
        else if (radioValue == 1 && sidnamn.match("VB")) {
            dagens_serie.setDate(dagens_serie.getDate() + 2);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var hagbard = app.activeDocument.links.itemByName("HAG_Dummy.pdf.jpg").parent;
            var hagbard_strip = new File(serveradress + filmapp + "vbl/hagbard/HAG_" + filnamn + ".tif");
            hagbard.place(hagbard_strip);
        
            var helge = app.activeDocument.links.itemByName("HEVBL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "vbl/helge/HEVBL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var morrgan = app.activeDocument.links.itemByName("MUT_Dummy.tif.jpg").parent;
            var morrgan_strip = new File(serveradress + filmapp + "vbl/mutts/MUT_" + filnamn + ".pdf");
            morrgan.place(morrgan_strip);
        
            var nemi = app.activeDocument.links.itemByName("NM_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "vbl/nemi/NM_" + filnamn + ".tif");
            nemi.place(nemi_strip);
            
            var zits = app.activeDocument.links.itemByName("ZIVBL_Dummy.tif.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "vbl/zits/ZIVBL_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // öt:s strippar för i morgon
        else if (radioValue == 1 && sidnamn.match("OT")) {
            dagens_serie.setDate(dagens_serie.getDate() + 2);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var dragos = app.activeDocument.links.itemByName("DRA_Dummy.pdf.jpg").parent;
            var dragos_strip = new File(serveradress + filmapp + "ot/dragos/DRA_" + filnamn + ".pdf");
            dragos.place(dragos_strip);
        
            var helge = app.activeDocument.links.itemByName("HÄL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "ot/helge/HÄL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var medel = app.activeDocument.links.itemByName("MED_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "ot/medel/MED_" + filnamn + ".tif");
            medel.place(medel_strip);
            
            var nemi = app.activeDocument.links.itemByName("NEMOT_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "ot/nemi/NEMOT_" + filnamn + ".tif");
            nemi.place(nemi_strip);
        
            var zits = app.activeDocument.links.itemByName("ZIT_Dummy.pdf.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "ot/zits/ZIT_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // sydins strippar för i morgon
        else if (radioValue == 1 && sidnamn.match("SY")) {
            dagens_serie.setDate(dagens_serie.getDate() + 2);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var zits = app.activeDocument.links.itemByName("ZTSyd_Dummy.TIF.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "sydin/zits/ZTSyd_" + filnamn + ".tif");
            zits.place(zits_strip);

            var helge = app.activeDocument.links.itemByName("HESY_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "sydin/helge/HESY_" + filnamn + ".tif");
            helge.place(helge_strip);

            var medel = app.activeDocument.links.itemByName("MEDSY_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "sydin/medel/MEDSY_" + filnamn + ".tif");
            medel.place(medel_strip);
        }

        // vbl:s strippar för i övermorgon
        else if (radioValue == 2 && sidnamn.match("VB")) {
            dagens_serie.setDate(dagens_serie.getDate() + 3);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var hagbard = app.activeDocument.links.itemByName("HAG_Dummy.pdf.jpg").parent;
            var hagbard_strip = new File(serveradress + filmapp + "vbl/hagbard/HAG_" + filnamn + ".tif");
            hagbard.place(hagbard_strip);
        
            var helge = app.activeDocument.links.itemByName("HEVBL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "vbl/helge/HEVBL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var morrgan = app.activeDocument.links.itemByName("MUT_Dummy.tif.jpg").parent;
            var morrgan_strip = new File(serveradress + filmapp + "vbl/mutts/MUT_" + filnamn + ".pdf");
            morrgan.place(morrgan_strip);
        
            var nemi = app.activeDocument.links.itemByName("NM_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "vbl/nemi/NM_" + filnamn + ".tif");
            nemi.place(nemi_strip);
            
            var zits = app.activeDocument.links.itemByName("ZIVBL_Dummy.tif.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "vbl/zits/ZIVBL_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // öt:s strippar för i övermorgon
        else if (radioValue == 2 && sidnamn.match("OT")) {
            dagens_serie.setDate(dagens_serie.getDate() + 3);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var ankeborg = app.activeDocument.links.itemByName("ANK_Dummy.pdf.jpg").parent;
            var ankeborg_strip = new File(serveradress + filmapp + "ot/ankeborg/ANK_" + filnamn + ".pdf"); // samma i både vbl och öt kronologiskt
            ankeborg.place(ankeborg_strip);

            var dragos = app.activeDocument.links.itemByName("DRA_Dummy.pdf.jpg").parent;
            var dragos_strip = new File(serveradress + filmapp + "ot/dragos/DRA_" + filnamn + ".pdf");
            dragos.place(dragos_strip);
        
            var helge = app.activeDocument.links.itemByName("HÄL_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "ot/helge/HÄL_" + filnamn + ".tif");
            helge.place(helge_strip);
        
            var medel = app.activeDocument.links.itemByName("MED_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "ot/medel/MED_" + filnamn + ".tif");
            medel.place(medel_strip);
            
            var nemi = app.activeDocument.links.itemByName("NEMOT_Dummy.tif.jpg").parent;
            var nemi_strip = new File(serveradress + filmapp + "ot/nemi/NEMOT_" + filnamn + ".tif");
            nemi.place(nemi_strip);
        
            var zits = app.activeDocument.links.itemByName("ZIT_Dummy.pdf.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "ot/zits/ZIT_" + filnamn + ".pdf");
            zits.place(zits_strip);
        }

        // sydins strippar för i övermorgon
        else if (radioValue == 2 && sidnamn.match("SY")) {
            dagens_serie.setDate(dagens_serie.getDate() + 3);
            var day = ("0" + dagens_serie.getDate()).slice(-2);
            var month = ("0" + (dagens_serie.getMonth() + 1)).slice(-2);
            var year = dagens_serie.getFullYear();
            dagens_serie = year + month + day;
            var filnamn = dagens_serie;

            var zits = app.activeDocument.links.itemByName("ZTSyd_Dummy.TIF.jpg").parent;
            var zits_strip = new File(serveradress + filmapp + "sydin/zits/ZTSyd_" + filnamn + ".tif");
            zits.place(zits_strip);

            var helge = app.activeDocument.links.itemByName("HESY_Dummy.tif.jpg").parent;
            var helge_strip = new File(serveradress + filmapp + "sydin/helge/HESY_" + filnamn + ".tif");
            helge.place(helge_strip);

            var medel = app.activeDocument.links.itemByName("MEDSY_Dummy.tif.jpg").parent;
            var medel_strip = new File(serveradress + filmapp + "sydin/medel/MEDSY_" + filnamn + ".tif");
            medel.place(medel_strip);
        }
    }
}