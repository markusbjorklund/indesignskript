/*

        ██████      ██      ██  ██        ██  
          ██      ██  ██  ██  ██  ██    ██  ██
          ██      ██████  ██      ██    ██████
        ██████    ██  ██  ██      ██    ██  ██
                                              
                                              
              ░░░░▒▒░░░░░░▒▒                  
            ░░▒▒░░░░▒▒▒▒▒▒▒▒▒▒                
          ░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒              
          ▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            
        ░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            
        ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
        ░░████▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
      ░░██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
      ░░▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
      ▒▒▒▒▒▒██▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
    ▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
    ░░░░▒▒▒▒████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
    ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒▒▒        
    ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▓▓▒▒        
    ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒        
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒        
    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▓▓        
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒        
      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▒▒▒▒        
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒        
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒        
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓          
          ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒          
            ▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒            
              ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██            
                ▒▒▒▒▒▒▓▓▒▒▒▒    ██            
                    ██          ██            
                    ██          ██            
                  ████        ████            
                                                                                         
                                              
████      ██    ██████    ██    ██████    ██  
██  ██  ██  ██    ██    ██  ██    ██    ██  ██
████    ██  ██    ██    ██████    ██    ██  ██
██        ██      ██    ██  ██    ██      ██  
                 
*/

// ------------------------------------ 
// this shit is for testing purposes.
// author Markus Björklund
// ------------------------------------

app.findGrepPreferences.findWhat = "Läs också:";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har länkade artiklar på webbben. Infoga dessa som hyperlänkar i en webbhänvisning eller ta bort följande stycke.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "LÄS OCKSÅ:";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har länkade artiklar på webbben. Infoga dessa som hyperlänkar i en webbhänvisning eller ta bort följande stycke.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "Artikeln uppdaterad";
app.changeGrepPreferences.appliedCharacterStyle = "Bildingress ingång";
app.changeGrepPreferences.changeTo = "Artikeln har uppdaterats på webben. Kolla så den fortfarande funkar i print.\\\x{D}";
app.activeDocument.changeGrep();

app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// fixa byline byrå på artiklar från TT
app.findGrepPreferences.findWhat = "\\\x{0028}TT\\\x{0029}";
app.changeGrepPreferences.changeTo = "TT";
app.changeGrepPreferences.appliedCharacterStyle = "Byline byrå";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{0028}TT-AFP\\\x{0029}";
app.changeGrepPreferences.changeTo = "TT-AFP";
app.changeGrepPreferences.appliedCharacterStyle = "Byline byrå";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{0028}TT-AP\\\x{0029}";
app.changeGrepPreferences.changeTo = "TT-AP";
app.changeGrepPreferences.appliedCharacterStyle = "Byline byrå";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "\\\x{0028}TT-NTB\\\x{0029}";
app.changeGrepPreferences.changeTo = "TT-NTB";
app.changeGrepPreferences.appliedCharacterStyle = "Byline byrå";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "är är";
app.changeGrepPreferences.changeTo = "är";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "för för";
app.changeGrepPreferences.changeTo = "för";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// (?<=“).*?(?=“)

app.findGrepPreferences.findWhat = "<<STATISTIK START>>(?s).*<<STATISTIK SLUT>>";
app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<STATISTIK START>>\\\x{000D}";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<STATISTIK SLUT>>\\\x{000D}";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = " \\\<\\\d";
app.changeGrepPreferences.changeTo = "första siffran";
app.activeDocument.changeGrep();

//~ app.findGrepPreferences.findWhat = "<<GREN/DIVISION>>(?s).*<<LAGEN>>";
//~ app.changeGrepPreferences.appliedParagraphStyle = "Matchvinjett";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "<<GREN/DIVISION>>\\\x{000D}";
//~ app.changeGrepPreferences.changeTo = "";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "<<LAGEN>>(?s).*<<PERIODSIFFROR>>";
//~ app.changeGrepPreferences.appliedParagraphStyle = "Matchvinjett lag";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "<<LAGEN>>\\\x{000D}";
//~ app.changeGrepPreferences.changeTo = "";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "<<SLUTRESULTAT>>\\\x{000D}";
//~ app.changeGrepPreferences.changeTo = "\\\x{0008}";
//~ app.activeDocument.changeGrep();

//~ app.findGrepPreferences.findWhat = "(?<=start).*";
//~ app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
//~ app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\<STATISTIK SLUT";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}I:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} I:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} I:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}I:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}II:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} II:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} II:";
// app.changeGrepPreferences.changeTo = "II:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}III:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} III:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} III:";
// app.changeGrepPreferences.changeTo = "III:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}Mv:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} Mv:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} Mv:";
// app.changeGrepPreferences.changeTo = "Mv:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}Utv:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} Utv:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} Utv:";
// app.changeGrepPreferences.changeTo = "Utv:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D}Publik:";
// app.changeGrepPreferences.changeTo = "\\\x{000D}\\\x{000D} Publik:";
// app.activeDocument.changeGrep();

// app.findGrepPreferences.findWhat = "\\\x{000D} Publik:";
// app.changeGrepPreferences.changeTo = "Publik:";
// app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
// app.activeDocument.changeGrep();

//~ app.findGrepPreferences.findWhat = "\\\x{0029}$";
//~ app.changeGrepPreferences.changeTo = "";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "TT-byt stil";
//~ app.changeGrepPreferences.appliedParagraphStyle = "Byline namn liten";
//~ app.activeDocument.changeGrep();

//~ // reset
//~ app.findGrepPreferences = NothingEnum.nothing;
//~ app.changeGrepPreferences = NothingEnum.nothing;

//~ app.findGrepPreferences.findWhat = "\\\x{D}\\\x{D}";
//~ app.changeGrepPreferences.changeTo = " ";
//~ app.activeDocument.changeGrep();

//app.findGrepPreferences.findWhat = "\\\x{0029}";
//app.changeGrepPreferences.changeTo = "\\\x{D}\\\x{D}TT ENDS";
//app.changeGrepPreferences.appliedParagraphStyle = "Byline namn liten";
//app.activeDocument.changeGrep();