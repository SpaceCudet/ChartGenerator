
function getNorway() {
	return {
    "name": "Norway",
	//"weaponData": uk_weaponsChartData,
    "standTypes": [
      nor_horseDrawn,
	  nor_softSkins,
	  nor_artillery,
	  nor_personnel
    ]
  };
}

//scripts.push("uk/weaponschart.js");
scripts.push("norway/horsedrawn.js");
scripts.push("norway/softskins.js");
scripts.push("norway/artillery.js");
scripts.push("norway/personnel.js");

console.log("Norway loaded");