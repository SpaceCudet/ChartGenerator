var standChartData;
var scripts = new Array();
var scaleMode = 0;
var currentSelection = {"stands": '', "aircraft":'', "title": '', "notes": ''};
var currentName = "New Battlegroup";
var battleGroups = localforage.createInstance({name: 'db', storeName: 'Battlegroups'});
var settings = localforage.createInstance({name: 'db', storeName: 'Settings'});

function initData() {
	
	standChartData={
		"country": [getFrance(),
					getGermany(),
					getUssr(),
					getItaly(),
					getUK(),
					getUS(),
					getJapan(),
					getPoland(),
					getBelgium(),
					getDutch(),
					getNorway()
					]
	};
}
	
	LazyLoad.js(["france/france.js",
				 "germany/germany.js",
				 "ussr/ussr.js",
				 "italy/italy.js",
				 "uk/uk.js",
				 "us/us.js",
				 "japan/japan.js",
				 "poland/poland.js",
				 "belgium/belgium.js",
				 "dutch/dutch.js",
				 "norway/norway.js"
				], function () {
				
		LazyLoad.js(scripts, function () {
			writeStandList();
		});		
		
	});


function loadScript(src) {
	
	var script = document.createElement('script');
	script.src = src;
	//script.async = true;
	//document.head.appendChild(script);
	var first = document.getElementsByTagName('script')[0];
	first.parentNode.insertBefore(script, first);
	
}

var country;
	//Generate list of units for user to select for the chart
	function writeStandList() {
		var contents = '';
				
		initData();
		
		for (var i=0;i<standChartData.country.length;i++) {
			country = standChartData.country[i];
			
			contents += startCountry(country.name);
			//Get vehicle types
			for(var j=0;j<country.standTypes.length;j++) {
				var section = country.standTypes[j];
				var sectionId = country.name+j;
		
				contents += startType(section.name, sectionId);
				//Get Stands
				for(k=0;k<section.stands.length;k++){
					var stand = section.stands[k];
					var standId = i + "_" + j + "_" + k;
					
					contents += startStand(stand.name, standId);
					if (stand.weapons != null) {
						for (m=0;m<stand.weapons.length;m++) {
							var weapon = stand.weapons[m];
														
							if (weapon.ammoTypes.constructor === Array) {
								for(n=0;n<weapon.ammoTypes.length;n++) {
									var ammo = weapon.ammoTypes[n];
								
							
								}
							}
							else {
								var weaponDef = country.weaponData[weapon.ammoTypes];
								try {
								for(n=0;n<weaponDef.length;n++) {
									var ammo = weaponDef[n];
								
							
								}}
								
								catch (e) {
									console.log(stand.name);
								}
							}
						}
					}
				}
				contents += endType();	
			}
			contents += endCountry();	
		}
		get('selectionPanel').innerHTML = contents;
		get('results').value = contents;
		//get('showUnits').style.display = 'none';
		//get('showPrint').style.display = 'block';
		
		//get('loadChart').style.display = 'block';
		
		writeAircraftList();
	}

	//Generate list of units for user to select for the chart
	function writeAircraftList() {
		var contents = '';
				
		for (var i=0;i<standChartData.country.length;i++) {
			country = standChartData.country[i];
			
			//Get aircraft
			if (country.aircraft) {
				contents += startCountry(country.name, "_air");
				console.log(country.name + ": aircraft");
					
				var section = country.aircraft;
				var sectionId = country.name+'air';
		
				//contents += startType(section.name, sectionId);
				//Get Stands
				for(k=0;k<section.stands.length;k++){
					var stand = section.stands[k];
					var standId = i + "_air_" + k;
					
					contents += startStand(stand.name, standId, "chkAircraft");
					
				}
				//contents += endType();	
				contents += endCountry();	
			}
			
		}
		get('aircraftSelectionPanel').innerHTML = contents;
		
	}
	
	function getTable(contents) {
		var wrapper;
		if (false) { //show year
			wrapper = '<table id="resultsTable" class="bordered"><colgroup><col span="1" style="width: 200px;"></colgroup>' + 
						'<thead><tr><th>Stand</th><th class="col2">Class</th><th class="col3">Move</th><th class="col4">Def</th><th class="col5">Weapons</th><th class="col6">Ammo</th><th>ROF</th><th>C</th><th>M</th><th>L</th><th>E</th><th>IDF</th><th>Year</th></tr></thead>' 
						+ contents + '</table>';
		}
		else {
			wrapper = '<table id="resultsTable" class="bordered"><colgroup><col span="1" style="width: 200px;"></colgroup>' + 
						'<thead><tr><th>Stand</th><th class="col2">Class</th><th class="col3">Move</th><th class="col4">Def</th><th class="col5">Weapons</th><th class="col6">Ammo</th><th>ROF</th><th>C</th><th>M</th><th>L</th><th>E</th><th>IDF</th></tr></thead>' 
						+ contents + '</table>';
		}
		return wrapper;
	}
	
	function getAircraftTable(contents) {
		if(contents == null || contents.length==0) return "";
		var wrapper = '<table id="aircraftResultsTable"><colgroup><col span="1" style="width: 200px;"></colgroup>' + 
						'<thead><tr><th>Aircraft</th><th class="col2">Type</th><th class="col3">Year</th><th class="col4">Strafe</th><th class="col5">Rocket</th><th class="col6">Bomb</th><th>Air-to-Air</th></tr></thead>' 
						+ contents + '</table>';
		return wrapper;
	}
	
	function startCountry(name, suffix) {
		if (suffix == null) {suffix = "";}
		return "<div class=\"CountryContainer\"><a href=\"javascript:showStandType('" + name + suffix + "');\">" + name 
					+ "</a></div><div id=\"" + name + suffix + "\" style=\"display:none;\">";
		
	}
	
	function startType(name, id) {
		return "<div class=\"StandTypeContainer\"><a href=\"javascript:showStandType('" + id + "');\">" + name 
					+ "</a></div><div class=\"StandContainer\" id=\"" + id + "\" style=\"display:none;\">";
	}
	function startStand(name, id, type) {
		if (type == null) {type = "chkStand";}
		var contents;
		contents = "<div id=\"selector\" class=\"noprint\" >";
				contents += "<input type=\"checkbox\" name=\"" + type + "\" value=\"" + id + "\" id=\"chk" + id + "\" /> ";
				contents += "<label for=\"chk" + id + "\">" + name + "<\label>";
				contents += "</div>";
		return contents;
	}
	
	function endType(name) {
		return "</div>";
		
	}
	
	function endCountry(name) {
		return "</div>";
		
	}
	
	//Toggle expansion of stand list
	function showStandType(value)
	{
		var area = get(value);
		
		if (area.style.display == 'none')
			area.style.display = 'block';
		else
			area.style.display = 'none';
	}
		
	////////////////////////////////////////////////////////////////////////////////
	//Iterate through checkboxes, find selected units and display chart
	////////////////////////////////////////////////////////////////////////////////
	function showSelectedUnits()
	{
		editMode = false;
		
		//get("SelectTab").style.display="none";
		
		var contents = "";
		var stands = document.getElementsByName("chkStand");
		var aircraft = document.getElementsByName("chkAircraft");
		scaleMode =  0;//document.getElementById("scaleModeSelect").value;
				
		var i;
		var standList = "";
		var weaponList = '';
		var contents = "";
		get('results').value = "";
		//currentSelection.stands = new Array();
		//currentSelection.aircraft = new Array();
		
		for (i=0; i<stands.length;i++)
		{
			//TODO: Extend to add extra stands e.g. crew when a gun is added
			
			if (stands[i].checked==true)
			{
				var id = stands[i].value;
				
				standList += id + ",";
				
				contents += getStandChart(id) + '\n';				
				
			}
			
		}
		currentSelection.stands = standList;
		
		get('results').value = contents;
		//get('resultsBody').innerHTML = contents;
		get('resultsPanel').innerHTML = getTable(contents);
		
		//Aircraft 
		contents = "";
		standList = "";
		for (i=0; i<aircraft.length;i++)
		{
			
			if (aircraft[i].checked==true)
			{
				var id = aircraft[i].value;
				
				standList += id + ",";
				
				contents += getAircraftChart(id) + '\n';				
				
			}
			
		}
		currentSelection.aircraft = standList;

		get('aircraftResultsPanel').innerHTML = getAircraftTable(contents);
		
		stands = document.getElementsByTagName("tbody");
		var tbodyClassName = 'odd';
		
		for (i=0;i<stands.length;i++)
		{
			var stand = stands[i];
			console.log(i);
			
			stand.className = tbodyClassName;
			if (tbodyClassName == 'odd')
				tbodyClassName = 'even';
			else
				tbodyClassName = 'odd';
		
			console.log(tbodyClassName);
		}
		
		/*
		document.getElementById("standsSelected").value = standList.substring(1);
		*/
		get("selectTab").style.display="none";
		get("resultsTab").style.display="block";
		get("resultsContents").style.display="block";
		
	}
	
	function loadSelectedUnits()
	{
		
		var stands = document.getElementsByName("chkStand");
		var aircraft = document.getElementsByName("chkAircraft");
		var i, j;
		var standList = currentSelection.stands.split(',');
		
		for (i=0; i<stands.length;i++)
		{
			
			stands[i].checked = false;
			for (j=0; j<standList.length;j++) {
				if (stands[i].value == standList[j])
				{
					stands[i].checked = true;
				}
			}
		}
		/*
		for (i=0; i<aircraft.length;i++)
		{
			
			if (aircraft[i].checked==true)
			{
				var id = aircraft[i].value;
				
				standList += id + ",";
				
				contents += getAircraftChart(id) + '\n';				
				
			}
			
		}
		*/
	}
	
	function calcValue(value) {
		
		switch (scaleMode) {
			case "1": // hinches 
				value = 2 * value/3;
				break;
			case "2": // 1/2 inches 
				value = value/2;
				break;
			case "3": // 2 cm 
				value = 2 * value;
				break;
			default:
				// do nothing
				return value;
		}
		return Math.round(value);
	}
	
	function calcMove(move) {
		//alert(scaleMode);
		if (scaleMode == 0) return move;
		//Get suspension type
		var sus = move.trim().slice(-1);
		var parts = move.split('/');
		var p1 = calcValue(parseInt(parts[0], 10));
		var p2 = calcValue(parseInt(parts[1], 10));
		
		return p1 + '/' + p2 + sus;
	}
	
	function calcRange(range) {
	
		if (scaleMode == 0) return range;
		else if (range.trim().length == 0 || range.indexOf('x') != -1) return range; 
		//Get suspension type
		var parts = range.split('(');
		var p1 = calcValue(parseInt(parts[0], 10));
		var p2 = parts[1];
		
		return p1 + '(' + p2;
	}
	
	function getStandChart(id) {
		var ids = id.split('_');
		var stand = standChartData.country[ids[0]].standTypes[ids[1]].stands[ids[2]];
		country = standChartData.country[ids[0]];
		
		var rowSpan = getRowSpan(stand);
		
		var chart =  '<tbody><tr>'; // use tbodys for striping grid
		//chart += '<td ' + rowSpan + '>' + id + '<\td>\n';
		chart += '<td ' + rowSpan + ' class="col1">' + stand.name + '</td>';
		chart += '<td ' + rowSpan + '>' + stand.class + '</td>';
		chart += '<td ' + rowSpan + '>' + calcMove(stand.move) + '</td>';
		chart += '<td ' + rowSpan + '>' + stand.def + '</td>';
		chart += getWeaponsChart(stand);
		if (rowSpan.length === 0)
			chart += '</tr>';
		
		chart += '</tbody>';
		return chart;
		
	}
	
	function getAircraftChart(id) {
		var ids = id.split('_');
		var stand = standChartData.country[ids[0]].aircraft.stands[ids[2]];
		country = standChartData.country[ids[0]];
		
		var chart =  '<tbody><tr>'; // use tbodys for striping grid
		
		chart += '<td class="col1">' + stand.name + '</td>';
		chart += '<td>' + stand.type + '</td>';
		chart += '<td>' + stand.year + '</td>';
		chart += '<td>' + stand.strafe + '</td>';
		chart += '<td>' + stand.rocket + '</td>';
		chart += '<td>' + stand.bomb + '</td>';
		chart += '<td>' + stand.air2air + '</td>';
		chart += '</tr>';
		
		chart += '</tbody>';
		return chart;
		
	}
	
	function getRowSpan(stand) {
		var span = 0;
		if (stand.weapons != null) {
			for (m=0;m<stand.weapons.length;m++) {
				var weapon = stand.weapons[m];
				span += getAmmoCount(weapon);		
				
			}
		}
		if (span === 0) 
			return '';
		else
			return 'rowspan="' + span + '"';
	}
	
	function  getWeaponsChart(stand) {
		var chart  = '';
		
		if (stand.weapons != null) {
			for (m=0;m<stand.weapons.length;m++) {
				var weapon = stand.weapons[m];
				
				chart += '<td ' + getWeaponRowSpan(weapon) + '>' + weapon.name + '</td>\n';				
				
				if (weapon.ammoTypes.constructor === Array) {
					for(n=0;n<weapon.ammoTypes.length;n++) {
						var ammo = weapon.ammoTypes[n];
						chart += getAmmoChart(ammo, weapon);
						
					}
				}
				else {
					var weaponDef = country.weaponData[weapon.ammoTypes];
					for(n=0;n<weaponDef.length;n++) {
						var ammo = weaponDef[n];
						chart += getAmmoChart(ammo, weapon);
													
					}
				}
			}
		}
		
		return chart;
	}
	
	function getAmmoCount(weapon) {
		var span = 0;
													
		if (weapon.ammoTypes.constructor === Array) {
			span += weapon.ammoTypes.length;
					
		}
		else {
			if (weapon.ammo != null) {
				span += weapon.ammo.split(',').length;
			}
			else {
				var weaponDef = country.weaponData[weapon.ammoTypes];
				span += weaponDef.length;
			}	
		}
		
		return span;
	}
	
	function getWeaponRowSpan(weapon) {
		var span = getAmmoCount(weapon);
																
		if (span === 0) 
			return '';
		else
			return 'rowspan="' + span + '"';
	}
	
	function getAmmoChart(ammo, weapon) {
	
		if (weapon.ammo != null && weapon.ammo.indexOf(ammo.name) === -1) {
		
			return "";
		} 
		
		var chart = '<td>' + ammo.name + '</td>\n';
		if (weapon.rof == null)
			chart += '<td>' + ammo.rof + '</td>\n';
		else
			chart += '<td>' + weapon.rof + '</td>\n';
		chart += '<td>' + calcRange(ammo.close) + '</td>\n';
		chart += '<td>' + calcRange(ammo.medium) + '</td>\n';
		chart += '<td>' + calcRange(ammo.long) + '</td>\n';
		chart += '<td>' + calcRange(ammo.extreme) + '</td>\n';
		chart += '<td>' + calcRange(ammo.idf) + '</td>\n';
		//chart += '<td>' + ammo.year + '</td>\n';
		chart += '</tr>';
		return chart;

	}
		
	var editMode = false;
	function editTables()
	{
		editMode = !editMode;
	
		if (editMode) {
			get('tables').setAttribute('contenteditable', 'true');
			get('editTables').value = 'Read Only Tables';
		} else {
			get('tables').removeAttribute('contenteditable');
			get('editTables').value = 'Edit Text';
		}
	}
	
	var editTitleMode = false;
	function editTitle()
	{
		editTitleMode = !editTitleMode;
	
		if (editTitleMode) {
			get('title').setAttribute('contenteditable', 'true');
			get('editTitle').value = 'Read Only Title';
		} else {
			get('title').removeAttribute('contenteditable');
			get('editTitle').value = 'Edit Title';
		}
	}
	
	var editNotesMode = false;
	function editNotes()
	{
		editNotesMode = !editNotesMode;
	
		if (editNotesMode) {
			get('notes').setAttribute('contenteditable', 'true');
			get('editNotes').value = 'Read Only Notes';
		} else {
			get('notes').removeAttribute('contenteditable');
			get('editNotes').value = 'Edit Notes';
		}
	}
	
	function newWindow() {
		winObj = window.open("saveview.html", "SaveView");
		
		//winObj.document.write(get('resultsContents').innerHTML);
		var data = get('resultsContents').innerHTML;
		
		winObj.document.getElementById('contents').innerHTML = data;
	}
	
	function getmarkup() {
		var data = get('resultsContents').innerHTML;
	}
		
	function homeView() {
		get("Instructions").style.display="block";
		get("selectionLists").style.display="none";
		get("resultsTab").style.display="none";
		get("selectTab").style.display="block";
		
		get("tab-home").parentNode.className = "active";
		get("tab-selection").parentNode.className = "";
		get("tab-print").parentNode.className = "";
	}
	
	function selectionView()
	{
		get("Instructions").style.display="none";
		get("selectionLists").style.display="block";
		get("resultsTab").style.display="none";
		get("selectTab").style.display="block";
		get("tab-home").parentNode.className = "";
		get("tab-selection").parentNode.className = "active";
		get("tab-print").parentNode.className = "";
	}
	
	function printView() {
		showSelectedUnits();
		get("tab-home").parentNode.className = "";
		get("tab-selection").parentNode.className = "";
		get("tab-print").parentNode.className = "active";
	}
	
	function initEvents() {
		get("tab-home").addEventListener("click", homeView);
		get("tab-selection").addEventListener("click", selectionView);
		get("tab-print").addEventListener("click", printView);
	}
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////
	// Load/Save methods
	///////////////////////////////////////////////////////////////////////////////////////////////
	function saveTextAsFile()
	{
		var textToWrite = get("resultsContents").innerHTML;
		var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
		var fileNameToSaveAs = get("inputFileNameToSaveAs").value;

		
		var ie = navigator.userAgent.match(/MSIE\s([\d.]+)/),
        ie11 = navigator.userAgent.match(/Trident\/7.0/) && navigator.userAgent.match(/rv:11/),
        ieVer=(ie ? ie[1] : (ie11 ? 11 : -1));

		if (ie && ieVer<10) {
			console.log("No blobs on IE ver<10");
			return;
		}
		
		if (ie || ie11) {
			window.navigator.msSaveBlob(textFileAsBlob, fileNameToSaveAs);
		} else {
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			if (window.webkitURL != null)
			{
				// Chrome allows the link to be clicked
				// without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}
			else
			{
				// Firefox requires the link to be added to the DOM
				// before it can be clicked.
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}

			downloadLink.click();
		}
	}

	function destroyClickedElement(event)
	{
		document.body.removeChild(event.target);
	}

	function loadFileAsText()
	{
		var fileToLoad = get("fileToLoad").files[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{
			var textFromFileLoaded = fileLoadedEvent.target.result;
			get("resultsContents").innerHTML = textFromFileLoaded;
		};
		fileReader.readAsText(fileToLoad, "UTF-8");
		
		
		get("selectTab").style.display="none";
		get("resultsTab").style.display="block";
		get("resultsContents").style.display="block";
	}

	function saveBattleGroup() {
		
		var bgName = get('bgName').value;
		
		if (bgName.length == 0) {
			alert ("The Battlegroup requires a name");
			return;
		}
		currentName = bgName;
		currentSelection.title = get('title').innerHTML;
		currentSelection.notes = get('notes').innerHTML;
		
		battleGroups.setItem(bgName, currentSelection).then(function (value) {
			loadBattleGroups();
			console.log(value);
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
	
	function loadBattleGroup(bgName) {
		battleGroups.getItem(bgName).then(function(value) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log(value);
			currentSelection = value;
			get('title').innerHTML = currentSelection.title;
			get('notes').innerHTML = currentSelection.notes;
			get('bgName').value = bgName;
			get('bgNameSpan').innerHTML = bgName;
			currentName = bgName;
			loadSelectedUnits();
			printView();
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
	
	function loadBattleGroups() {
		battleGroups.keys().then(function(keys) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log(keys);
			if (keys != null) {
				var list = '<ul>';
				for (var i =0; i<keys.length; i++) {
					list += '<li><a href="#" onclick="loadBattleGroup(' + "'" + keys[i] + "'" + ');">' + keys[i] + '</a> <a href="#" onclick="deleteBattleGroup(' + "'" + keys[i] + "'" + ');" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
				}
				list += '</ul>';
			}
			get('battleGroups').innerHTML = list;
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
		
	function backupBattleGroups() {
		var list = new Array();
		
		
		battleGroups.iterate(function(bgValue, bgKey, iterationNumber) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log([bgKey, bgValue]);
			list.push({key: bgKey, value: bgValue});
		
		}).then(function() {
			var backupString = JSON.stringify(list);
			download(backupString, 'Tob_Backup.txt', 'text/plain');
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
		
	}
	
	function download(text, name, type) {
		var a = document.getElementById("a");
		var file = new Blob([text], {type: type});
		a.href = URL.createObjectURL(file);
		a.download = name;
		
		a.style.display = 'inline';
	}
	
	function restoreBattleGroups()
	{
		
		if (get("fileToLoad").files.length == 0) {
			alert("A backup to restore needs to be selected");
		
			return;
		}
		var fileToLoad = get("fileToLoad").files[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) 
		{
			var bgList = JSON.parse(fileLoadedEvent.target.result);
			console.log(fileLoadedEvent.target.result);
			
			if (bgList != null) {
				var list = '<ul>';
				for (var i =0; i<bgList.length; i++) {
					var key = bgList[i].key;
					var bg = bgList[i].value
					list += '<li><a href="#" onclick="loadBattleGroup(' + "'" + key + "'" + ');">' + key + '</a> <a href="#" onclick="deleteBattleGroup(' + "'" + key + "'" + ');" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';					
					
					battleGroups.setItem(key, bg).then(function (value) {
						console.log(value);
					}).catch(function(err) {
						// This code runs if there were any errors
						console.log(err);
					});
				}
				list += '</ul>';
			}
			get('battleGroups').innerHTML = list;
			
		};
		fileReader.readAsText(fileToLoad, "UTF-8");
		
		
	}
	
	function deleteBattleGroup(bgName) {
		if (confirm("Delete " + bgName)) {
			battleGroups.removeItem(bgName).then(function(value) {
				// This code runs once the value has been loaded
				// from the offline store.
				if (bgName == currentName) {
					newBG(true);
				}
			}).catch(function(err) {
				// This code runs if there were any errors
				console.log(err);
			});
			
			loadBattleGroups();
		}
	}
	
	function newBG(showSelection) {
		
		currentSelection = {"stands": '', "aircraft":'', "title": '', "notes": ''};
		get('title').innerHTML = "<h2>Title</h2>";
		get('notes').innerHTML = "Notes:";
		get('bgName').value = "New Battlegroup";
		get('bgNameSpan').innerHTML = "New Battlegroup";
		loadSelectedUnits();
		
		if (showSelection)
			selectionView();
	}
	
	
	
	function loadSettings() {
		settings.keys().then(function(keys) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log(keys);
			if (keys != null) {
				var list = '<ul>';
				for (var i =0; i<keys.length; i++) {
					list += '<li><a href="#" onclick="loadBattleGroup(' + "'" + keys[i] + "'" + ');">' + keys[i] + '</a> <a href="#" onclick="deleteBattleGroup(' + "'" + keys[i] + "'" + ');" title="Delete"><i class="fa fa-times" aria-hidden="true"></i></a></li>';
				}
				list += '</ul>';
			}
			get('battleGroups').innerHTML = list;
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
	
	function loadSetting(settingName) {
		settings.getItem(settingName).then(function(value) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log(value);
			
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
	
	function saveSetting(name, value) {
		settings.setItem(name, value).then(function(value) {
			// This code runs once the value has been loaded
			// from the offline store.
			console.log(value);
			
		}).catch(function(err) {
			// This code runs if there were any errors
			console.log(err);
		});
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////
	// Helper methods
	///////////////////////////////////////////////////////////////////////////////////////////////
	function get(selector) {
		return document.getElementById(selector);
	}
	
	function gv(selector) {
		return get(selector).value;
	}
	

var emptyStand = {
            "name": "",
            "class": "",
			"move": "",
            "def": "",
            "year": 39,
            "weapons": [
              {
                "name": "",
                "ammoTypes": [
                  {
                    "name": "AP",
                    "rof": 0,
                    "close": "6(7)",
                    "medium": "12(5)",
                    "long": "18(3)",
                    "extreme": "30(1)",
                    "idf": "",
                    "year": 39
                  },
                  {
                    "name": "HE",
                    "rof": 0,
                    "close": "6(7)",
                    "medium": "12(5)",
                    "long": "18(3)",
                    "extreme": "30(1)",
                    "idf": "",
                    "year": "39"
                  }
                ]
              }
            ]
          };


console.log("general loaded");

