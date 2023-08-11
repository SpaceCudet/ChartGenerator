
function getPoland() {
	return {
    "name": "Poland",
	"weaponData": pl_weaponsChartData,
    "standTypes": [
      pl_horseDrawn,
	  pl_softSkins,
	  pl_transports,
	  pl_spgs,
	  pl_tanks,
	  pl_artillery,
	  pl_personnel
    ],
	"aircraft" : pl_aircraft
  };
}

scripts.push("poland/weaponschart.js");
scripts.push("poland/horsedrawn.js");
scripts.push("poland/softskins.js");
scripts.push("poland/transports.js");
scripts.push("poland/spgs.js");
scripts.push("poland/tanks.js");
scripts.push("poland/artillery.js");
scripts.push("poland/personnel.js");
scripts.push("poland/aircraft.js");

console.log("Poland loaded");