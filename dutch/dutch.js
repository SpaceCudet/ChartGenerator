
var getDutch;

scripts.push("dutch/all.js");
//scripts.push("dutch/weaponschart.js");
scripts.push("dutch/horsedrawn.js");
scripts.push("dutch/softskins.js");
scripts.push("dutch/armouredcars.js");
scripts.push("dutch/artillery.js");
scripts.push("dutch/personnel.js");

getDutch = function () {
	return {
    "name": "Dutch",
	//"weaponData": fr_weaponsChartData,
    "standTypes": [
		//nl_all
      nl_horseDrawn,
	  nl_softSkins,
	  nl_armouredCars,
	  nl_artillery,
	  nl_personnel
    ]
  };
};

console.log("Belgium loaded");