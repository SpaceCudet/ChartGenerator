var be_all = {
        "name": "All",
        "stands": [
          {"name": "Limber", "class": "III-1/III", "move": "8/6W", "def": "Soft", "year": "", "weapons": null},
		  {"name": "Cart ", "class": "II-1/-", "move": "8/6W", "def": "Soft", "year": "", "weapons": null},
		  {"name": "Wagon ", "class": "III-2/-", "move": "8/4W", "def": "Soft", "year": "", "weapons": null},
		  
		  //Soft-skinned Vehicles
		  
		  {"name": "Car", "class": "I-1/2/-", "move": "40/12W", "def": "Soft", "year": "", "weapons": null},
		  {"name": "Light truck", "class": "II-1/II", "move": "40/12W", "def": "Soft", "year": "", "weapons": null},
		  {"name": "Medium truck", "class": "III-2/III", "move": "36/8W", "def": "Soft", "year": "", "weapons": null},
		  {"name": "Heavy truck", "class": "III-3/IV", "move": "32/6W", "def": "Soft", "year": "", "weapons": null},
		  
		  //Armoured Vehicles 
		  
		  {"name": "UT-I", "class": "1/I", "move": "12/6T", "def": "1/1W", "year": "", "weapons": null},
		  {"name": "UT-C", "class": "1/I", "move": "24/12T", "def": "1/1W", "year": "", "weapons": null},
		  {"name": "FMH (Ford-Marmon-Herrington) ", "class": "1/I", "move": "32/10W", "def": "1/1W", "year": "", "weapons": null},
		  {"name": "ACG-1", "class": "IV", "move": "22/10T", "def": "3/2S", "year": "", "weapons": 
			[{"name": "T:47L32", "ammoTypes": [{"name": "HE","rof": "2","close": "6(4)W","medium": "12(3)W", "long": "18(2)W", "extreme": "36(1)W", "idf": " ","year": "35"},
			{"name": "AP","rof": "2","close": "6(7) 6","medium": "12(5)5", "long": "18(3)4", "extreme": "36(1)3", "idf": "","year": ""}]},
			{"name": "T:MG", "ammoTypes" :[{"name": "SA","rof": "1","close": "6(7)W","medium": "12(5)W", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		  {"name": "T-13B1/2 SP AT", "class": "III", "move": "24/12T", "def": "1/1W", "year": "", "weapons": 
			[{"name": "RC:47L32", "ammoTypes": [{"name": "HE","rof": "2","close": "6(4)W","medium": "12(3)W", "long": "18(2)W", "extreme": "36(1)W", "idf": "","year": "34"},
			{"name": "AP","rof": "2","close": "6(7) 6","medium": "12(5)5", "long": "18(3)4", "extreme": "36(1)3", "idf": "","year": ""}]},
			{"name": "RC:MG", "ammoTypes" :[{"name": "SA","rof": "1","close": "6(7)W","medium": "12(5)W", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		  {"name": "T-13B3 SP AT", "class": "III", "move": "24/12T", "def": "1/1W", "year": "", "weapons": 
			[{"name": "T:47L32", "ammoTypes": [{"name": "HE","rof": "2","close": "6(4)W","medium": "12(3)W", "long": "18(2)W", "extreme": "36(1)W", "idf": "","year": "39"},
			{"name": "AP","rof": "2","close": "6(7) 6","medium": "12(5)5", "long": "18(3)4", "extreme": "36(1)3", "idf": "","year": ""}]},
			{"name": "T:MG", "ammoTypes" :[{"name": "SA","rof": "1","close": "6(7)W","medium": "12(5)W", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		  {"name": "T-15", "class": "III", "move": "40/20T", "def": "1/1S", "year": "", "weapons": [{"name": "T:HMG", "ammoTypes": 
			[{"name": "SA","rof": "1","close": "6(8)W ","medium": "12(6)W", "long": "18(4)W", "extreme": "24(2)W", "idf": "","year": "35"}]}]},
			
			//Towed Artillery
			
		  {"name": "M220TR m1916", "class": "III+", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "220L10", "ammoTypes": 
		    [{"name": "HE","rof": "0","close": "6(9)H","medium": "12(9)H", "long": "18(8)H", "extreme": "60(8)H", "idf": "216”(8)2”","year": ""}]}]},
		  {"name": "C155L M-24", "class": "III+", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "155L30/24", "ammoTypes": 
		    [{"name": "HE","rof": "1","close": "6(9)H","medium": "12(9)H", "long": "18(9)H", "extreme": "60(8)H", "idf": "360”(7)2”","year": ""}]}]},
		  {"name": "C155L M-17S", "class": "IV+", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "155L30/17", "ammoTypes": 
		    [{"name": "HE","rof": "1","close": "6(9)H","medium": "12(9)H", "long": "18(9)H", "extreme": "60(8)H", "idf": "360”(7)2”","year": ""}]}]},
		  {"name": "Obusier de 155", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "155L15", "ammoTypes": 
			[{"name": "HE","rof": "1","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "216”(7)2”","year": ""}]}]},
		  {"name": "Obusier de 6\"", "class": "II", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "152L15", "ammoTypes": 
		    [{"name": "HE","rof": "1","close": "6(9)H","medium": "12(9)H", "long": "18(9)H", "extreme": "60(8)H", "idf": "180”(7)2”","year": ""}]}]},
		  {"name": "C150L/43", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "150L43", "ammoTypes": 
			[{"name": "HE","rof": "1","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "432”(7)2”","year": ""}]}]},
		  {"name": "O150L/17", "class": "I", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "150L17", "ammoTypes": 
		    [{"name": "HE","rof": "1","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "144”(7)2”","year": ""}]}]},
		  {"name": "O105 GP", "class": "II", "move": "Towed, 2L", "def": "", "year": "", "weapons": [{"name": "105L22", "ammoTypes": 
			[{"name": "HE","rof": "1","close": "6(7)H","medium": "12(6)H", "long": "18(5)H", "extreme": "60(5)H", "idf": "216”(5)2”","year": "25"}]}]},
		  {"name": "75 FRC m27", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "75L49 AA", "ammoTypes": 
			[{"name": "HE","rof": "2","close": "6(7)H","medium": "12(6)H", "long": "18(5)H", "extreme": "60(4)H", "idf": "","year": "27"}]}]},
		  {"name": "C75 FRC", "class": "I", "move": "Towed, 4L", "def": "", "year": "", "weapons": [{"name": "76L9", "ammoTypes": 
			[{"name": "HE","rof": "2","close": "6(6)H ","medium": "12(5)H", "long": "18(4)H ", "extreme": "36(4)H", "idf": "","year": ""}]}]},
		  {"name": "C75GP", "class": "II", "move": "Towed, 2L", "def": "", "year": "", "weapons": [{"name": "75L27", "ammoTypes": 
			[{"name": "HE","rof": "2","close": "6(7)H ","medium": "12(6)H", "long": "18(5)H ", "extreme": "60(4)H", "idf": "216”(4)1”","year": ""}]}]},
		  {"name": "C75 m1934", "class": "I", "move": "Towed, 4L", "def": "", "year": "", "weapons": [{"name": "75L24", "ammoTypes": 
			[{"name": "HE","rof": "2","close": "6(7)H ","medium": "12(6)H", "long": "18(5)H ", "extreme": "60(4)H", "idf": "180”(4)1”","year": ""}]}]},
		  {"name": "MVD 70", "class": "I", "move": "Towed, 4L", "def": "", "year": "", "weapons": [{"name": "70mm spigot mortar", "ammoTypes": 
			[{"name": "HE","rof": "1","close": "xx ","medium": "6(7)H", "long": "12(5)H ", "extreme": "16(4)H", "idf": "16”(4)1”","year": "16"}]}]},
		  {"name": "C47aSA-FRC", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "47L32", "ammoTypes": 
			[{"name": "HE","rof": "2","close": "6(4)W","medium": "12(3)W", "long": "18(2)W", "extreme": "36(1)W", "idf": "","year": ""},
			{"name": "AP","rof": "2","close": "6(7) 6","medium": "12(5)5", "long": "18(3)4", "extreme": "36(1)3", "idf": "","year": ""}]}]},
		  {"name": "40 Bofors", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "40L56 AA", "ammoTypes": 
			[{"name": "HE","rof": "3","close": "6(5)W","medium": "12(4)W", "long": "18(3)W", "extreme": "36(2)W", "idf": "","year": ""}]}]},
		  {"name": "CHM20M35", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "20L60 AA", "ammoTypes": 
			[{"name": "HE","rof": "3","close": "6(5)W ","medium": "12(4)W", "long": "18(3)W", "extreme": "36(2)W", "idf": "","year": "35"}]}]},
		  {"name": "Twin AAMG", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "2xAA", "ammoTypes": 
			[{"name": "SA","rof": "2","close": "6(8)W","medium": "12(6)W", "long": "18(4)W", "extreme": "24(2)W", "idf": " ","year": ""}]}]},
			
			//Personnnel
			
			
		  {"name": "Medium MG", "class": "HIW", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": 
			[{"name": "SA","rof": "01-Feb","close": "6(7)W","medium": "12(5)W", "long": "18(3)W", "extreme": "24(1)W", "idf": "","year": ""}]}]},
		  {"name": "Mntd Motorcycle", "class": "I,w", "move": "48/24W", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": 
			[{"name": "SA","rof": "1","close": "C(7)A","medium": "6(5)W", "long": "12(3)W", "extreme": "xx", "idf": "","year": ""}]}]},
		  {"name": "Mntd Bicycle", "class": "I,w", "move": "12/6W", "def": "Pers", "year": "", "weapons": null},
		  {"name": "Infantry/ Engineer", "class": "Inf.", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": 
			[{"name": "SA","rof": "1","close": "C(7)A","medium": "6(5)W", "long": "12(3)W", "extreme": "xx", "idf": "","year": ""}]}]},
		  {"name": "Cmd, crew, other", "class": "Inf.", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": 
			[{"name": "SA","rof": "0","close": "C(5)A","medium": "6(3)W", "long": "12(1)W", "extreme": "xx", "idf": "","year": ""}]}]}
		  
			
		]
      };