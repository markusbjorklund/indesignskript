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


// main ();

// function main() {
// var grepQuery = "Alkohol.+$";

// alert(grepQuery);

// //Clear any existing Grep preferences
// app.findGrepPreferences = NothingEnum.nothing;
// app.changeGrepPreferences = NothingEnum.nothing;

// //Put the search term into the query
// app.findGrepPreferences.findWhat = grepQuery;

// //Put the first result of the find into a variable
// var found_txt = app.activeDocument.findGrep ()[0];
// //the find operation will return an Array of Text Objects.
// //by using Javascripts CONTENTS it takes the reult and converts it into a regular String rather than a Text Object.
// var firstResult = found_txt.contents;

// alert(firstResult);

// //clear the preferences
// app.findGrepPreferences = NothingEnum.nothing;
// app.changeGrepPreferences = NothingEnum.nothing;

// //For the lookahead to work it needs something in front of it so I have told it to look for the return.
// var newQuery = "\\r(?=" + firstResult + ")"
// app.findGrepPreferences.findWhat = newQuery;

// //Run the find\Change
// app.activeDocument.changeGrep ();

// //Clear Grep preferences
// app.findGrepPreferences = NothingEnum.nothing;
// app.changeGrepPreferences = NothingEnum.nothing;    

// alert("Finished");
// return;
// }


// var selectedStuff = app.findGrepPreferences.findWhat = "lite text".app.selection[0];


//app.selection[0];

// if (selectedStuff instanceof TextFrame) {
// app.selection = selectedStuff.texts;
// }
// app.copy();



// reset
// app.findGrepPreferences = NothingEnum.nothing;
// app.changeGrepPreferences = NothingEnum.nothing;

// app.findGrep.findWhat = "lite text";
// app.changeGrep.changeTo = "markör här";
// app.activeDocument.changeGrep();

// app.selection[0].contents 
// app.copy();

//app.pasteInPlace();

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

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<MATCHEN START>>(?s).*<<MATCHEN SLUT>>";
app.changeGrepPreferences.appliedParagraphStyle = "Gren/Matchvinjett";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<LAGEN START>>(?s).*<<LAGEN SLUT>>";
app.changeGrepPreferences.appliedParagraphStyle = "Gren/Matchvinjett lag";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "STATISTIK START(?s).*STATISTIK SLUT";
//app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "STATISTIK SLUT";
//app.changeGrepPreferences.appliedParagraphStyle = "Matchfakta";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

// fixa egen rad till periodsiffrorna
app.findGrepPreferences.findWhat = "\(\\d)( )\\((\\d)";
app.changeGrepPreferences.changeTo = "$1\\n($3";
app.activeDocument.changeGrep();

// fixa konsekvent e förl.
app.findGrepPreferences.findWhat = "e(\\.) förl.";
app.changeGrepPreferences.changeTo = "e förl.";
app.activeDocument.changeGrep();

// fixa konsekvent e förl.
app.findGrepPreferences.findWhat = "e(\\.) förl";
app.changeGrepPreferences.changeTo = "e förl.ööö";
app.activeDocument.changeGrep();

// fixa konsekvent e str.
app.findGrepPreferences.findWhat = "e(\\.) str.";
app.changeGrepPreferences.changeTo = "e str.";
app.activeDocument.changeGrep();

// fixa konsekvent e str.
app.findGrepPreferences.findWhat = "e(\\.) str";
app.changeGrepPreferences.changeTo = "e str.";
app.activeDocument.changeGrep();

// fixa egen rad till periodsiffrorna efter förl.
app.findGrepPreferences.findWhat = "\(\\.)( )\\((\\d)";
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

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<MATCHEN START>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<MATCHEN SLUT>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

//app.findGrepPreferences.findWhat = "<<STATISTIK SLUT>>\\\x{000D}";
app.findGrepPreferences.findWhat = "<<LAGEN START>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<LAGEN SLUT>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

app.findGrepPreferences.findWhat = "<<STATISTIK START>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

app.findGrepPreferences.findWhat = "<<STATISTIK SLUT>>";
app.changeGrepPreferences.changeTo = "";
app.activeDocument.changeGrep();

// reset
app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;

/*app.findGrepPreferences.findWhat = " \\\<\\\d";
app.changeGrepPreferences.changeTo = "första siffran";
app.activeDocument.changeGrep();
*/

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