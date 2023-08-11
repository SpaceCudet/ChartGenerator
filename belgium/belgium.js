
var getBelgium;

//scripts.push("belgium/all.js");
//scripts.push("belgium/weaponschart.js");
scripts.push("belgium/horsedrawn.js");
scripts.push("belgium/softskins.js");
scripts.push("belgium/armoured.js");
scripts.push("belgium/artillery.js");
scripts.push("belgium/personnel.js");

getBelgium = function () {
	return {
    "name": "Belgium",
	//"weaponData": fr_weaponsChartData,
    "standTypes": [
		///be_all
      be_horseDrawn,
	  be_softSkins,
	  be_armoured,
	  be_artillery,
	  be_personnel
    ]
  };
};

console.log("Belgium loaded");