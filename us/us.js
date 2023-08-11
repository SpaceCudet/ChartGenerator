
function getUS() {
	return {
    "name": "US",
	"weaponData": us_weaponsChartData,
    "standTypes": [
      us_horseDrawn,
	  us_softSkins,
	  us_transports,
	  us_spgs,
	  us_tanks,
	  us_artillery,
	  us_personnel
    ],
	"aircraft" : us_aircraft
  };
}

scripts.push("us/weaponschart.js");
scripts.push("us/horsedrawn.js");
scripts.push("us/softskins.js");
scripts.push("us/transports.js");
scripts.push("us/spgs.js");
scripts.push("us/tanks.js");
scripts.push("us/artillery.js");
scripts.push("us/personnel.js");
scripts.push("us/aircraft.js");

console.log("US loaded");