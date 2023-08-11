var nl_all = {
	"name": "All",
	"stands": [
		//Horse-drawn Vehicles
		{"name": "Limber", "class": "III-1/III", "move": "8/6W", "def": "Soft", "year": "", "weapons": null},
		{"name": "Cart ", "class": "II-1/-", "move": "8/6W", "def": "Soft", "year": "", "weapons": null},
		{"name": "MG Cart ", "class": "II-1/-", "move": "12/8WA", "def": "Soft", "year": "", "weapons": null},
		{"name": "Wagon ", "class": "III-2/-", "move": "8/4W", "def": "Soft", "year": "", "weapons": null},
		
		//Soft-skinned Vehicles
		
		{"name": "Car", "class": "I-1/2/-", "move": "40/12W", "def": "Soft", "year": "", "weapons": null},
		{"name": "Light truck", "class": "II-1/II", "move": "40/12W", "def": "Soft", "year": "", "weapons": null},
		{"name": "Medium truck", "class": "III-2/III", "move": "36/8W", "def": "Soft", "year": "", "weapons": null},
		{"name": "Heavy truck", "class": "III-3/IV", "move": "32/6W", "def": "Soft", "year": "", "weapons": null},
		
		//Armoured Cars
		
		{"name": "M36", "class": "III", "move": "36/10W", "def": "2/1W", "year": "", "weapons": [{"name": "T:37L45", "ammoTypes": 
			[{"name": "HE","rof": "1","close": "6(4)w","medium": "12(3)w", "long": "18(2)w", "extreme": "36(1)w", "idf": "","year": "36"},
			{"name": "AP","rof": "1","close": "6(7)5","medium": "12(5)4", "long": "18(3) 2", "extreme": "36(1)0", "idf": "","year": ""}]},
			{"name": "HF,HR,T:MG", "ammoTypes" :[{"name": "SA","rof": "1","close": "6(7)W","medium": "12(5)W", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "M38", "class": "III", "move": "36/16W", "def": "2/1W", "year": "", "weapons": [{"name": "T:37L45", "ammoTypes": [{
			"name": "HE","rof": "1","close": "6(4)w","medium": "12(3)w", "long": "18(2)w", "extreme": "36(1)w", "idf": "","year": "38"},
			{"name": "AP","rof": "1","close": "6(7)5","medium": "12(5)4", "long": "18(3) 2", "extreme": "36(1)0", "idf": "","year": ""}]},
			{"name": "HF,HR,T:MG", "ammoTypes" :[{"name": "SA","rof": "1","close": "6(7)W","medium": "12(5)W", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
			
		//Towed Artillery
		
		
		{"name": "152 15 lang 15", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "152L15", "ammoTypes": [
			{"name": "HE","rof": "1","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "180”(7)2”","year": "20"}]}]},
		{"name": "150 15 lang 17", "class": "II", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "150L17", "ammoTypes": [
			{"name": "HE","rof": "1","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "144”(7)2”","year": "18"}]}]},
		{"name": "150 15 lang staal", "class": "II", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "150L?", "ammoTypes": [
			{"name": "HE","rof": "0","close": "6(9)H","medium": "12(8)H", "long": "18(7)H", "extreme": "60(7)H", "idf": "180”(6)2”","year": "78"}]}]},
		{"name": "125 12 lang staal", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "125L?", "ammoTypes": [
			{"name": "HE","rof": "0","close": "6(8)H","medium": "12(7)H", "long": "18(6)H", "extreme": "60(6)H", "idf": "144”(5)2”","year": "80"}]}]},
		{"name": "120 12 lang 12", "class": "II", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "120L12", "ammoTypes": [
			{"name": "HE","rof": "1","close": "6(8)H","medium": "12(7)H", "long": "18(6)H", "extreme": "60(6)H", "idf": "108”(6)2”","year": "8"}]}]},
		{"name": "105 10 veld", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "105L42", "ammoTypes": [
			{"name": "HE","rof": "1","close": "6(8)H","medium": "12(7)H", "long": "18(6)H", "extreme": "60(5)H", "idf": "360”(5)2”","year": "27"}]}]},
		{"name": "7.5 Vickers AA", "class": "III", "move": "Towed", "def": "", "year": "", "weapons": [{"name": "75L40 AA", "ammoTypes": [
			{"name": "HE","rof": "2","close": "6(7)H","medium": "12(6)H", "long": "18(5)H", "extreme": "60(4)H", "idf": "","year": "35"}]}]},
		{"name": "84 8 staal", "class": "I", "move": "Towed, 2L", "def": "", "year": "", "weapons": [{"name": "84L27", "ammoTypes": [
			{"name": "HE","rof": "1","close": "6(7)H ","medium": "12(6)H", "long": "18(5)H ", "extreme": "60(4)H", "idf": "","year": "81"}]}]},
		{"name": "75 7 veld", "class": "I", "move": "Towed, 2L", "def": "", "year": "", "weapons": [{"name": "75L30", "ammoTypes": [
			{"name": "HE","rof": "2","close": "6(7)H ","medium": "12(6)H", "long": "18(5)H ", "extreme": "60(4)H", "idf": "216”(4)1”","year": "4"}]}]},
		{"name": "57 6 veld", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "57L20", "ammoTypes": [
			{"name": "HE","rof": "2","close": "6(5) H ","medium": "12(4) H", "long": "18(3)H", "extreme": "60(3)H", "idf": "","year": "94"},
			{"name": "AP","rof": "2","close": "6(7) 2 ","medium": "12(5) 1", "long": "18(3)0", "extreme": "60(1)0", "idf": "","year": ""}]}]},
		{"name": "47 PAG AT", "class": "I", "move": "Towed, 4L", "def": "", "year": "", "weapons": [{"name": "47L32", "ammoTypes": [
			{"name": "HE","rof": "2","close": "6(4)W","medium": "12(3)W", "long": "18(2)W", "extreme": "24(1)W", "idf": "","year": "37"},
			{"name": "AP","rof": "2","close": "6(7)5","medium": "12(5)4", "long": "18(3)3", "extreme": "24(1)2", "idf": "","year": ""}]}]},
		{"name": "40 Bofors AA", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "40L56 AA", "ammoTypes": [
			{"name": "HE","rof": "3","close": "6(5)W","medium": "12(4)W", "long": "18(3)W", "extreme": "36(2)W", "idf": "","year": "40"}]}]},
		{"name": "20 Oerlkn AA", "class": "I", "move": "Towed,4L", "def": "", "year": "", "weapons": [{"name": "20L70 AA", "ammoTypes": [
			{"name": "HE","rof": "3","close": "6(5)W ","medium": "12(4)W", "long": "18(3)W", "extreme": "36(2)W", "idf": "","year": "39"}]}]},
		
		//Personnel
		
		{"name": "81 Mortar ", "class": "HIW", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "81L16 Mtr", "ammoTypes": [
			{"name": "HE","rof": "2","close": "xx","medium": "xx", "long": "xx", "extreme": "xx", "idf": "54”(4)1”","year": ""}]}]},
		{"name": "Medium MG", "class": "HIW", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "01-Feb","close": "6(7)W","medium": "12(5)W", "long": "18(3)W", "extreme": "24(1)W", "idf": "","year": ""}]}]},
		{"name": "Infantry/ Engineer", "class": "Inf.", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "1","close": "C(7)A","medium": "6(5)W", "long": "12(3)W", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "Mntd Bicycle", "class": "I,w", "move": "12/6W", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "1","close": "xx","medium": "xx", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "Mntd Motorcycle", "class": "I,w", "move": "48/24W", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "1","close": "C(7)A","medium": "6(5)W", "long": "12(3)W", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "Mounted  Cav", "class": "Cav.", "move": "12L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "1","close": "C(7)A","medium": "xx", "long": "xx", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "Dismounted Cav", "class": "Inf.", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "1","close": "C(7)A","medium": "6(5)W", "long": "12(3)W", "extreme": "xx", "idf": "","year": ""}]}]},
		{"name": "Cmd, crew, other", "class": "Inf.", "move": "6L", "def": "Pers", "year": "", "weapons": [{"name": "Small arms", "ammoTypes": [
			{"name": "SA","rof": "0","close": "C(5)A","medium": "6(3)W", "long": "12(1)W", "extreme": "xx", "idf": "","year": ""}]}]}
		
]};