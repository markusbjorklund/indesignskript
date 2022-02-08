///////////////////////////////////////////////////////////////////////////////////////////////////
// autoMarginaler
// skript för att automatiskt byta marginaler på sidor som flyttas om i planen
// 
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

autoMarginaler(app.activeDocument);

function autoMarginaler(doc) {
  doc.layers.everyItem().locked = false;

  var sidnummer = app.activeWindow.activePage.name;

  var sidMaterial = new Array;
  sidMaterial = app.activeWindow.activePage.pageItems;
  app.activeWindow.activePage.groups.add(sidMaterial);
  app.activeWindow.activeSpread.groups.item(0).select();

  var flyttaMaterial = app.activeDocument.selection[0];

  if (sidnummer % 2 == 0) {
    flyttaMaterial.move([14.5, 35.0])
    flyttaMaterial.ungroup();
  }
  else {
    flyttaMaterial.move([11.5, 35.0])
    flyttaMaterial.ungroup();
  }
}