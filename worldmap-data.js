const continenten = {

	//Europese continent
	balkan: [ "HR", "SI", "RS", "BA", "ME", "MK", "AL", "XK", "BG", "RO" ],
	"oost-centraal-europa": [ "PL", "CZ", "SK", "HU" ],
	scandinavie: [ "Denmark", "SE", "Norway", "FI", "IS", "GL"],
	"britse-eilanden": [ "United Kingdom", "IE"],
	germaans: [ "DE", "NL", "BE", "LU"],
	"midden-europa": [ "France", "CH", "AT"],
	"mediterraans": ["PT", "ES", "Greece", "Italy"],

	//Midden-Oosten
	anatolie: ["Turkey"],
	levant: ["IL", "PS", "LB", "IQ", "JO", "SY"],
	perzie: ["IR", "AF"],
	"arabisch-schiereiland": [ "SA", "YE", "Oman", "AE", "QA", "BH", "KW"],

	//Aziatische continent
	"rus-eurazie": ["Russian Federation", "BY", "UA", "MD", "MN", "EE", "LV", "LT"],
    kaukasus: [ "AM", "GE", "Azerbaijan"],
    "china-oost-azie": [ "China", "TW", "KP", "KR"],
    "indo-chinees": [ "VN", "LA", "KH", "TH", "MM"],
    "maleis-indonesisch": [ "Indonesia", "Malaysia", "BN", "TL"],
    filipijns: [ "Philippines"],
    "zuid-aziatisch": [ "IN", "PK", "BD", "LK", "NP", "BT", "MV" ],
    "centraal-aziatisch": [ "KZ", "UZ", "KG", "TJ", "TM"],
	japan: [ "Japan"],

    //Afrikaanse continent
    maghreb: ["MA", "DZ", "TN", "LY", "EH"],
    nijlvallei: ["EG", "SD"],
    sahel: ["MR", "ML", "NE", "TD", "BF"],
    "west-afrika": ["SN", "GM", "GN", "GW", "SL", "LR", "CI", "GH", "TG", "BJ", "NG",],
    "hoorn-van-afrika": ["ET", "ER", "DJ", "SO"],
    "centraal-afrika": ["CM", "CF", "CG", "CD", "GQ", "GA"],
    "oost-afrika": ["KE", "UG", "TZ", "RW", "BI", "SS", "RE", "YT"],
    "zuidelijk-afrika": ["Angola", "ZM", "ZW", "MW", "NA", "BW", "LS", "SZ", "MZ", "MG", "ZA"],

    //"noord-amerika"
    canada: ["Canada"],
    "verenigde-staten": ["United States"],

    //Latijns-Amerikaanse continent
    mexicaans: ["MX"],
    "centraal-amerika": ["BZ", "GT", "HN", "SV", "NI", "CR", "PA"],
    caribisch: ["CU", "DO", "HT", "JM"],
    andes: ["CO", "EC", "PE", "BO"],
    brazilie: ["BR"],
    "amazone-guyanas": ["GF", "GY", "SR", "VE"],
    pampas: ["Argentina", "Chile", "UY", "PY"],

    //Oceanie
    australie: ["Australia"],
    "nieuw-zeeland": ["New Zealand"],
    melanesie: ["Papua New Guinea", "Fiji", "Vanuatu", "TL", "Solomon Islands", "New Caledonia"],
    polynesie: ["Samoa","Tonga","TV", "French Polynesia"],
    micronesie: ["GU", "MH", "NR", "PW", "Northern Mariana Islands"]
};

const kleuren = {
    //europa
    balkan: "#F8E0BF",
	"oost-centraal-europa": "#F2C28A",
	scandinavie: "#EBA455",
	"britse-eilanden": "#DE8817",
	germaans: "#B86F13",
	"midden-europa": "#92580F",
	"mediterraans": "#6C410B",

    //azie
    "rus-eurazie": "#1E5F8A",
    kaukasus: "#2A6B96",
    "china-oost-azie": "#3577A2",
    "indo-chinees": "#4183AE",
    "maleis-indonesisch": "#4D8FBA",
    filipijns: "#5D9CC2",
    "zuid-aziatisch": "#6EA9CA",
    "centraal-aziatisch": "#81B7D2",
    japan: "#96C5DB",

    //midden-oosten
    anatolie: "#4AAD63",
	levant: "#78BF75",
	perzie: "#279B44",
	"arabisch-schiereiland": "#1D7A35",

    //afrika
    maghreb:           "#F7E76A",
    nijlvallei:        "#F3D500",
    sahel:             "#E6C96A",
    "west-afrika":     "#D9B44A",
    "hoorn-van-afrika":"#CFA235",
    "centraal-afrika": "#BD9024",
    "oost-afrika":     "#A97D19",
    "zuidelijk-afrika":"#8F6612",
    //noord-amerika
    canada: "#C97A73",
    "verenigde-staten": "#B95A52",

    //latijns-amerika
    mexicaans:          "#D8C4E8",
    "centraal-amerika": "#CDB3E0",
    caribisch:          "#C1A2D8",
    andes:              "#B58FD0",
    brazilie:           "#A97CC8",
    "amazone-guyanas":  "#9C69BF",
    pampas:             "#8F56B5",

    //oceanie
    australie:          "#58BFA7",
    "nieuw-zeeland":    "#72CAB5",
    melanesie:          "#3CA890",
    polynesie:          "#8BD7C6",
    micronesie:         "#2E9580"
};

const regioBeschrijving = {
    balkan: {
        titel: "Balkan",
        beschrijving:
            "De Balkan vormt een culinaire ontmoetingsplaats van Ottomaanse, Midden-Europese en mediterrane invloeden. Gegrild vlees, gevulde groenten, yoghurt en hartige stoofgerechten spelen een centrale rol.",
        ingredienten:
            "Paprika, aubergine, yoghurt, schapenkaas, lamsvlees, varkensvlees, bonen, kool, tomaten en peterselie."
    },

    "oost-centraal-europa": {
        titel: "Oost-Centraal Europa",
        beschrijving:
            "Deze keuken ligt op het kruispunt van Slavische, Hongaarse en Oostenrijkse tradities. Comfort food, hartige gerechten en rijke soepen kenmerken de regio.",
        ingredienten:
            "Aardappelen, kool, paprika, uien, zure room, varkensvlees, karwijzaad, paddenstoelen, rogge en knoedels."
    },

    scandinavie: {
        titel: "Scandinavië",
        beschrijving:
            "De Scandinavische keuken is gevormd door een koel klimaat, lange winters en een sterke traditie van conserveren. Eenvoud, seizoensproducten en pure smaken staan centraal.",
        ingredienten:
            "Zalm, haring, kabeljauw, roggebrood, dille, aardappelen, bessen, kool, wild en zuivelproducten."
    },

    "britse-eilanden": {
        titel: "Britse Eilanden",
        beschrijving:
            "De keuken van Groot-Brittannië en Ierland wordt gekenmerkt door stevige maaltijden, eenvoudige bereidingen en een sterke focus op lokale ingrediënten uit zee en landbouw.",
        ingredienten:
            "Aardappelen, haver, rundvlees, lamsvlees, kabeljauw, zalm, boter, erwten, prei en cheddar."
    },

    germaans: {
        titel: "Germaanse Wereld",
        beschrijving:
            "Deze keuken combineert Midden-Europese landbouwtradities met een rijke bier- en broodcultuur. Stevige maaltijden en regionale specialiteiten spelen een belangrijke rol.",
        ingredienten:
            "Varkensvlees, worst, kool, aardappelen, rogge, tarwe, ui, mosterd, bier en zuurkool."
    },

    "midden-europa": {
        titel: "Midden-Europa",
        beschrijving:
            "De culinaire tradities van Midden-Europa zijn sterk beïnvloed door de historische Habsburgse wereld. Verfijnde gebakscultuur gaat hier samen met hartige vlees- en groentegerechten.",
        ingredienten:
            "Kalfsvlees, boter, room, aardappelen, paddenstoelen, karwijzaad, ui, knoedels, papaverzaad en diverse kazen."
    },

    mediterraans: {
        titel: "Mediterrane Wereld",
        beschrijving:
            "De mediterrane keuken draait om verse ingrediënten, eenvoud en het optimaal benutten van lokale producten. Zon, zee en eeuwenlange handelscontacten hebben een rijke culinaire traditie gevormd.",
        ingredienten:
            "Olijfolie, tomaten, knoflook, basilicum, oregano, citrusvruchten, vis, schapenkaas, peulvruchten en wijn."
    },

    anatolie: {
    	titel: "Anatolië",
    	beschrijving:
        	"De Anatolische keuken vormt de culinaire brug tussen Europa, de Kaukasus, Centraal-Azië en het Midden-Oosten. Door eeuwen van handel en culturele uitwisseling ontstond een rijke traditie van gegrild vlees, mezze, broodgerechten en groenteschotels.",
    	ingredienten:
        	"Yoghurt, aubergine, paprika, tomaten, bulgur, kikkererwten, lamsvlees, olijfolie, munt en sumak."
	},

	levant: {
    	titel: "Levant",
    	beschrijving:
        	"De Levantijnse keuken behoort tot de meest invloedrijke culinaire tradities ter wereld. Verse groenten, kruiden, peulvruchten en gedeelde maaltijden staan centraal. Gerechten worden vaak geserveerd als mezze, waarbij veel kleine schotels samen een complete maaltijd vormen.",
	    ingredienten:
    	    "Kikkererwten, tahin, olijfolie, peterselie, munt, sumak, citroen, granaatappel, aubergine en yoghurt."
	},

	perzie: {
    	titel: "Perzische Wereld",
    	beschrijving:
    	    "De Perzische keuken, die zich uitstrekt van Iran tot Afghanistan, staat bekend om haar verfijning en evenwicht. Zoete, zure en hartige smaken worden zorgvuldig gecombineerd, vaak met noten, fruit en aromatische specerijen als tegenhanger van rijst- en vleesgerechten.",
    	ingredienten:
    	    "Saffraan, pistachenoten, amandelen, granaatappel, berberis, rijst, yoghurt, kardemom, komijn en gedroogd fruit."
	},

	"arabisch-schiereiland": {
		titel: "Arabisch Schiereiland",
		beschrijving:
			"De keukens van het Arabisch Schiereiland zijn gevormd door woestijnculturen, handelsroutes en eeuwenoude gastvrijheidstradities. Rijstschotels, langzaam gegaard vlees en geurige kruidenmengsels vormen de kern van veel maaltijden.",
		ingredienten:
			"Dadels, rijst, lamsvlees, kardemom, saffraan, kaneel, gedroogde limoen, yoghurt, sesam en noten."
	},

    "rus-eurazie": {
        titel: "Rusland & Eurazië",
        beschrijving:
            "Deze keuken is gevormd door lange winters, landbouwtradities en invloeden uit de Euraziatische steppe.",
        ingredienten:
            "Rogge, aardappelen, kool, bieten, zure room, paddestoelen, dille, boekweit, ingelegde groenten en gerookte vis."
    },

    kaukasus: {
        titel: "Kaukasus",
        beschrijving:
            "Een bergachtige regio op het kruispunt van Europa, Azië en het Midden-Oosten met een rijke traditie van kruiden en gegrild vlees.",
        ingredienten:
            "Walnoten, granaatappel, koriander, dragon, aubergine, yoghurt, geitenkaas, lamsvlees en druiven."
    },

    "centraal-aziatisch": {
        titel: "Centraal-Azië",
        beschrijving:
            "Een keuken met sterke nomadische wortels waarin vlees, zuivel en graanproducten centraal staan.",
        ingredienten:
            "Lamsvlees, paardenvlees, rundvlees, yoghurt, kefir, rijst, uien, wortelen, komijn en platbrood."
    },

    "china-oost-azie": {
        titel: "China & Oost-Azië",
        beschrijving:
            "Een veelzijdige culinaire traditie waarin balans tussen smaak, textuur en bereidingswijze centraal staat.",
        ingredienten:
            "Rijst, noedels, soja, tofu, gember, lente-ui, sesamolie, knoflook, Chinese kool en gefermenteerde groenten."
    },

    japan: {
        titel: "Japan",
        beschrijving:
            "Een verfijnde keuken met veel aandacht voor seizoensproducten, eenvoud en presentatie.",
        ingredienten:
            "Rijst, zeewier, soja, miso, dashi, vis, shiitake, daikon, sesam en yuzu."
    },

    "indo-chinees": {
        titel: "Indochina",
        beschrijving:
            "Een aromatische keuken waarin zoet, zuur, zout en pittig vaak in balans worden gebracht.",
        ingredienten:
            "Vissaus, limoen, koriander, munt, citroengras, galanga, chilipepers, kokosmelk en rijst."
    },

    "maleis-indonesisch": {
        titel: "Maleis-Indonesische Wereld",
        beschrijving:
            "Een specerijenrijke eilandkeuken die gevormd is door eeuwen van handel en maritieme verbindingen.",
        ingredienten:
            "Kokosmelk, sambal, kurkuma, gember, kemirinoten, tamarinde, pandan, citroengras en rijst."
    },

    filipijns: {
        titel: "Filipijnen",
        beschrijving:
            "Een unieke mengeling van Austronesische, Chinese, Spaanse en Amerikaanse invloeden.",
        ingredienten:
            "Azijn, knoflook, sojasaus, kokos, calamansi, varkensvlees, banaan, suiker en zwarte peper."
    },

    "zuid-aziatisch": {
        titel: "Zuid-Azië",
        beschrijving:
            "Een van de meest kruidenrijke culinaire tradities ter wereld, met grote regionale verschillen.",
        ingredienten:
            "Kardemom, komijn, korianderzaad, kurkuma, chilipepers, ghee, linzen, kikkererwten, rijst en naan."
    },
    maghreb: {
    titel: "Maghreb",
    beschrijving:
        "De Maghreb vormt de culinaire brug tussen de Middellandse Zee, de Arabische wereld en de Sahara. Berberse, Arabische en Andalusische invloeden hebben geleid tot een keuken vol specerijen, stoofgerechten en graanproducten.",
    ingredienten:
        "Couscous, olijfolie, kikkererwten, lamsvlees, dadels, citroen, komijn, kaneel, amandelen en harissa."
    },

    nijlvallei: {
        titel: "Nijlvallei",
        beschrijving:
            "De keukens van Egypte en Soedan behoren tot de oudste landbouwtradities ter wereld. Granen, peulvruchten en groenten vormen al duizenden jaren de basis van dagelijkse maaltijden.",
        ingredienten:
            "Favabonen, linzen, rijst, tarwe, sesam, koriander, komijn, okra, ui en knoflook."
    },

    sahel: {
        titel: "Sahel",
        beschrijving:
            "De Sahel vormt de overgang tussen de Sahara en tropisch Afrika. Hier draait de keuken om droogtebestendige gewassen, eenvoudige bereidingen en krachtige smaken die passen bij het woestijn- en savanneklimaat.",
        ingredienten:
            "Gierst, sorghum, pinda's, rijst, geitenvlees, lamsvlees, gedroogde vis, okra, tomaten en chilipepers."
    },

    "west-afrika": {
        titel: "West-Afrika",
        beschrijving:
            "West-Afrika kent een van de meest uitgesproken culinaire tradities van het continent. Rijke sauzen, pittige kruiden en zetmeelrijke basisproducten zorgen voor krachtige en complexe smaken.",
        ingredienten:
            "Pinda's, cassave, yam, bakbananen, palmolie, chilipepers, bonen, rijst, okra en vis."
    },

    "hoorn-van-afrika": {
        titel: "Hoorn van Afrika",
        beschrijving:
            "De keuken van de Hoorn van Afrika combineert Afrikaanse en Midden-Oosterse invloeden. Kruidige stoofgerechten, zuurdesembrood en eeuwenoude handelscontacten geven deze regio een uniek karakter.",
        ingredienten:
            "Teff, berbere, linzen, kikkererwten, kardemom, kaneel, geitenvlees, rundvlees, boter en koffie."
    },

    "centraal-afrika": {
        titel: "Centraal-Afrika",
        beschrijving:
            "Het Congobekken en de omliggende tropische gebieden vormen de basis van deze keuken. Lokale groenten, knollen, rivierproducten en bosproducten spelen een belangrijke rol in het dagelijks voedsel.",
        ingredienten:
            "Cassave, bakbananen, palmolie, pinda's, vis, rivierkreeftjes, yam, kokos, bladgroenten en pepers."
    },

    "oost-afrika": {
        titel: "Oost-Afrika",
        beschrijving:
            "De Oost-Afrikaanse keuken weerspiegelt eeuwen van handel langs de Indische Oceaan. Arabische, Indiase en Afrikaanse tradities komen hier samen in geurige en vaak mild gekruide gerechten.",
        ingredienten:
            "Kokosmelk, rijst, kardemom, kruidnagel, cassave, bakbananen, rundvlees, linzen, mango en kokos."
    },

    "zuidelijk-afrika": {
        titel: "Zuidelijk Afrika",
        beschrijving:
            "De keuken van Zuidelijk Afrika combineert inheemse tradities met invloeden uit Europa en Azië. Gegrild vlees, maïsgerechten en robuuste ingrediënten vormen de basis van veel maaltijden.",
        ingredienten: "Maïs, rundvlees, wild."
    },

    canada: {
        titel: "Canada",
        beschrijving:
            "De Canadese keuken weerspiegelt de enorme natuurlijke rijkdom en uitgestrektheid van het land. Inheemse tradities, Franse invloeden uit Québec en Britse invloeden uit de rest van Canada komen samen in een keuken die sterk verbonden is met seizoenen, visvangst en lokale producten.",
        ingredienten:
            "Ahornsiroop, zalm, kreeft, wild, bosbessen, veenbessen, aardappelen, pompoen, granen en paddenstoelen."
    },

    "verenigde-staten": {
        titel: "Verenigde Staten",
        beschrijving:
            "De Amerikaanse keuken is een van de meest diverse culinaire tradities ter wereld. Invloeden van inheemse volkeren, Europese immigranten, Afrikaanse gemeenschappen en latere migratiegolven hebben geleid tot een enorme variatie aan regionale keukens.",
        ingredienten:
            "Rundvlees, maïs, bonen, aardappelen, kalkoen, pinda's, pompoen, barbecuekruiden, zeevruchten en ahornsiroop."},

    mexicaans: {
        titel: "Mexico",
        beschrijving:
            "De Mexicaanse keuken behoort tot de oudste culinaire tradities van Amerika. Inheemse ingrediënten uit Meso-Amerika vormen nog altijd de basis van veel gerechten en worden gecombineerd met Spaanse invloeden die sinds de zestiende eeuw deel uitmaken van de cultuur.",
        ingredienten:
            "Maïs, chilipepers, bonen, avocado, tomaten, cacao, limoen, koriander, pompoen en queso fresco."
    },

    "centraal-amerika": {
        titel: "Centraal-Amerika",
        beschrijving:
            "De keukens van Midden-Amerika combineren inheemse tradities met Spaanse en Caribische invloeden. Eenvoudige, smaakvolle gerechten op basis van maïs, bonen en tropische ingrediënten vormen de kern van de regionale eetcultuur.",
        ingredienten:
            "Maïs, bonen, rijst, bakbananen, avocado, kokos, yucca, koriander, chilipepers en tropisch fruit."
    },

    caribisch: {
        titel: "Caribisch Gebied",
        beschrijving:
            "De Caribische keuken is ontstaan uit een levendige mix van Afrikaanse, Europese, inheemse en Aziatische invloeden. Kruiden, tropische producten en zeevruchten spelen een centrale rol in de kleurrijke gerechten van de eilanden.",
        ingredienten:
            "Bakbananen, kokos, rum, cassave, rijst, bonen, zeevruchten, allspice, chilipepers en tropisch fruit."
    },

    andes: {
        titel: "Andes",
        beschrijving:
            "De Andeskeuken is gevormd door duizenden jaren landbouw in hooggelegen berggebieden. Inheemse tradities spelen nog steeds een belangrijke rol en zorgen voor een uitzonderlijke rijkdom aan granen, knollen en lokale producten.",
        ingredienten:
            "Aardappelen, maïs, quinoa, bonen, avocado, chilipepers, tomaten, lama, alpaca en koriander."
    },

    brazilie: {
        titel: "Brazilië",
        beschrijving:
            "De Braziliaanse keuken combineert Portugese, Afrikaanse en inheemse invloeden. Door de enorme omvang van het land bestaan grote regionale verschillen, maar tropische ingrediënten en rijke smaken keren overal terug.",
        ingredienten:
            "Cassave, zwarte bonen, rijst, kokos, palmolie, rundvlees, limoen, pinda's, tropisch fruit en zeevruchten."
    },

    "amazone-guyanas": {
        titel: "Amazone & Guyana's",
        beschrijving:
            "Deze regio vormt een overgangsgebied tussen het Caribisch gebied, het Amazonebekken en Zuid-Amerika. Inheemse tradities worden gecombineerd met Afrikaanse, Indiase en Europese invloeden.",
        ingredienten:
            "Cassave, rijst, kokos, peper, bakbananen, bonen, zeevruchten, okra, tropisch fruit en kerriekruiden."
    },

    pampas: {
        titel: "Pampas",
        beschrijving:
            "De Pampas-keuken wordt gekenmerkt door uitgestrekte graslanden, een sterke veeteelttraditie en Europese invloeden. Rundvlees, wijn en eenvoudige bereidingen vormen het hart van deze culinaire regio.",
        ingredienten: "Rundvlees, wijn, maïs, aardappelen, bonen, tarwe, ui, paprika, pompoen en chimichurri."
    },

    australie: {
        titel: "Australië",
        beschrijving:
            "De Australische keuken combineert Britse invloeden met ingrediënten uit Azië en de Stille Oceaan. Moderne Australische gerechten leggen veel nadruk op verse producten, zeevruchten en barbecuecultuur.",
        ingredienten:
            "Rundvlees, lamsvlees, garnalen, barramundi, avocado, macadamianoten, citrusvruchten, pompoen, kruiden en tropisch fruit."
    },

    "nieuw-zeeland": {
        titel: "Nieuw-Zeeland",
        beschrijving:
            "De Nieuw-Zeelandse keuken combineert Māori-tradities met Europese invloeden. Vis, lamsvlees en producten uit de oceaan spelen een belangrijke rol, terwijl verse lokale ingrediënten centraal staan.",
        ingredienten:
            "Lamsvlees, mosselen, zalm, zoete aardappel, pompoen, honing, bessen, kruiden, kiwi en zeevruchten."
    },

    melanesie: {
        titel: "Melanesië",
        beschrijving:
            "De keukens van Melanesië zijn sterk verbonden met tropische landbouw, visserij en traditionele bereidingswijzen. In alle Melanesische eilanden vormen lokale gewassen en producten uit zee de basis van de dagelijkse keuken.",
        ingredienten:
            "Taro, yam, cassave, kokos, bakbananen, vis, varkensvlees, zoete aardappel, broodvrucht en tropisch fruit."
    },

    polynesie: {
        titel: "Polynesië",
        beschrijving:
            "De Polynesische keuken weerspiegelt eeuwen van zeevaart en eilandculturen. Van Samoa en Tonga tot Frans-Polynesië draait de keuken om verse producten uit zee, kokos en tropische gewassen.",
        ingredienten:
            "Kokosmelk, vis, taro, broodvrucht, zoete aardappel, banaan, limoen, zeevruchten, varkensvlees en tropisch fruit."
    },

    micronesie: {
        titel: "Micronesië",
        beschrijving:
            "De keukens van Micronesië zijn nauw verbonden met de oceaan en het tropische eilandleven. Lokale producten worden vaak gecombineerd met invloeden uit Azië en de Verenigde Staten.",
        ingredienten:
            "Vis, tonijn, kokos, rijst, broodvrucht, taro, pandan, zeevruchten, banaan en tropisch fruit."
    }
};
