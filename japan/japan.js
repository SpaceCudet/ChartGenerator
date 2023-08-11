
function getJapan() {
	return {
    "name": "Japan",
	"weaponData": jp_weaponsChartData,
    "standTypes": [
      jp_horseDrawn,
	  jp_softSkins,
	  jp_transports,
	  jp_spgs,
	  jp_tanks,
	  jp_artillery,
	  jp_personnel
    ],
	"aircraft" : jp_aircraft
  };
}

scripts.push("japan/weaponschart.js");
scripts.push("japan/horsedrawn.js");
scripts.push("japan/softskins.js");
scripts.push("japan/transports.js");
scripts.push("japan/spgs.js");
scripts.push("japan/tanks.js");
scripts.push("japan/artillery.js");
scripts.push("japan/personnel.js");
scripts.push("japan/aircraft.js");

console.log("US loaded");