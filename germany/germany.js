
function getGermany() {
	return {
    "name": "Germany",
	"weaponData": gr_weaponsChartData,
    "standTypes": [
      gr_horseDrawn,
	  gr_softSkins,
	  gr_transports,
	  gr_spgs,
	  gr_spats,
	  gr_tds,
	  gr_assaultguns,
	  gr_tanks,
	  gr_artillery,
	  gr_personnel
    ],
	"aircraft" : gr_aircraft
  };
}

scripts.push("germany/weaponschart.js");
scripts.push("germany/horsedrawn.js");
scripts.push("germany/softskins.js");
scripts.push("germany/transport.js");
scripts.push("germany/spg.js");
scripts.push("germany/spats.js");
scripts.push("germany/tds.js");
scripts.push("germany/assaultguns.js");
scripts.push("germany/tanks.js");
scripts.push("germany/artillery.js");
scripts.push("germany/personnel.js");
scripts.push("germany/aircraft.js");

console.log("Germany loaded");