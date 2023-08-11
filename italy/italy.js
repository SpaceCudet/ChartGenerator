
function getItaly() {
	return {
    "name": "Italy",
	"weaponData": it_weaponsChartData,
    "standTypes": [
      it_horseDrawn,
	  it_softSkins,
	  it_transports,
	  it_spgs,
	  it_tanks,
	  it_artillery,
	  it_personnel
    ],
	"aircraft" : it_aircraft
  };
}

scripts.push("italy/weaponschart.js");
scripts.push("italy/horsedrawn.js");
scripts.push("italy/softskins.js");
scripts.push("italy/transports.js");
scripts.push("italy/spgs.js");
scripts.push("italy/tanks.js");
scripts.push("italy/artillery.js");
scripts.push("italy/personnel.js");
scripts.push("italy/aircraft.js");

console.log("Italy loaded");