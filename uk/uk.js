
function getUK() {
	return {
    "name": "UK",
	"weaponData": uk_weaponsChartData,
    "standTypes": [
      uk_horseDrawn,
	  uk_softSkins,
	  uk_transports,
	  uk_spgs,
	  uk_tanks,
	  uk_artillery,
	  uk_personnel
    ],
	"aircraft" : uk_aircraft
  };
}

scripts.push("uk/weaponschart.js");
scripts.push("uk/horsedrawn.js");
scripts.push("uk/softskins.js");
scripts.push("uk/transports.js");
scripts.push("uk/spgs.js");
scripts.push("uk/tanks.js");
scripts.push("uk/artillery.js");
scripts.push("uk/personnel.js");
scripts.push("uk/aircraft.js");

console.log("UK loaded");