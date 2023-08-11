
function getUssr() {
	return {
    "name": "USSR",
	"weaponData": ru_weaponsChartData,
    "standTypes": [
      ru_horseDrawn,
	  ru_softSkins,
	  ru_aerosans,
	  ru_transports,
	  ru_spgs,
	  ru_tanks,
	  ru_scoutTanks,
	  ru_engineeringTanks,
	  ru_artillery,
	  ru_personnel
    ],
	"aircraft" : ru_aircraft
  };
}

scripts.push("ussr/weaponschart.js");
scripts.push("ussr/horsedrawn.js");
scripts.push("ussr/softskins.js");
scripts.push("ussr/aerosans.js");
scripts.push("ussr/transport.js");
scripts.push("ussr/spg.js");
scripts.push("ussr/tanks.js");
scripts.push("ussr/scouttanks.js");
scripts.push("ussr/engineeringtanks.js");
scripts.push("ussr/artillery.js");
scripts.push("ussr/personnel.js");
scripts.push("ussr/aircraft.js");

console.log("USSR loaded");