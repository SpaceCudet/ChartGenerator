
var getFrance;

scripts.push("france/weaponschart.js");
scripts.push("france/horsedrawn.js");
scripts.push("france/softskins.js");
scripts.push("france/transport.js");
scripts.push("france/spg.js");
scripts.push("france/tanks.js");
scripts.push("france/artillery.js");
scripts.push("france/personnel.js");
scripts.push("france/aircraft.js");

getFrance = function () {
	return {
    "name": "France",
	"weaponData": fr_weaponsChartData,
    "standTypes": [
      fr_horseDrawn,
	  fr_softSkins,
	  fr_transports,
	  fr_spgs,
	  fr_tanks,
	  fr_artillery,
	  fr_personnel
    ],
	"aircraft" : fr_aircraft
  };
};

console.log("France loaded");