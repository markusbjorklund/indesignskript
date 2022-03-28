///////////////////////////////////////////////////////////////////////////////////////////////////
// 
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

PapperPuttePaska(app.activeDocument);

function PapperPuttePaska(doc) {
  app.activeDocument.save();  
  doc.layers.everyItem().locked = false;
  var sidMaterial = new Array;
  sidMaterial = app.activeWindow.activePage.pageItems;
  app.activeWindow.activePage.groups.add(sidMaterial);
  app.activeWindow.activeSpread.groups.item(0).select();
  app.copy();
  app.activeDocument.close(SaveOptions.no);
}