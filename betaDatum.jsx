///////////////////////////////////////////////////////////////////////////////////////////////////
// betaDatum
// ÅrMånadDag
//
// används till filnamnen för serierna
//
// author Markus Björklund
//
///////////////////////////////////////////////////////////////////////////////////////////////////

var datumidag = new Date();
var dagens_serier = new Date(datumidag);

dagens_serier.setDate(dagens_serier.getDate() +1);

var day = ("0" + dagens_serier.getDate()).slice(-2);
var month = ("0" + (dagens_serier.getMonth() +1)).slice(-2);
var year = dagens_serier.getFullYear();

dagens_serier = year + month + day;