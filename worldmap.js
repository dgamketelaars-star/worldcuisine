document.addEventListener("DOMContentLoaded", function () {
    fetch("worldmap.svg")
        .then(function (response) {
            return response.text();
        })
        .then(function (svgMarkup) {
            document.getElementById("kaartcontainer").innerHTML = svgMarkup;
            maakKaartInteractief();
        })
        .catch(function (error) {
            console.error("Kon de wereldkaart niet laden:", error);
        });
});

function vindLanden(landcode) {

    const resultaten = [];

    // Zoek op ID
    const byId = document.getElementById(landcode);

    if (byId) {
        resultaten.push(byId);
    }

    // Zoek op name
    document
        .querySelectorAll(`[name="${landcode}"]`)
        .forEach(el => resultaten.push(el));

    // Zoek op class
    document
        .querySelectorAll(`[class="${landcode}"]`)
        .forEach(el => resultaten.push(el));

    return resultaten;
}

function maakKaartInteractief() {

    Object.entries(continenten).forEach(
        function ([continentNaam, landcodes]) {

            landcodes.forEach(function (landcode) {

			const landen = vindLanden(landcode);

			if (landen.length === 0) {
    			console.warn(
        			"Land niet gevonden in SVG:", landcode
    		);

    		return;
			}

			landen.forEach(function (land) {

    			land.dataset.continent = continentNaam;
    			land.dataset.origineleKleur =
				    kleuren[continentNaam];
    			land.style.fill = kleuren[continentNaam];
    			land.style.cursor = "pointer";
    			land.style.transition = "filter 0.2s ease, opacity 0.2s ease";

				land.addEventListener("mouseenter", function () {
        			lichtContinentOp(continentNaam, true);
        			toonRegioInfo(continentNaam);
				});

    			land.addEventListener("mouseleave", function () {
        			lichtContinentOp(continentNaam, false);
    			});

				land.addEventListener("click", function () {
				    toonRegioInfo(continentNaam);
				});

			});
		});
	});
}


function donkereKleur(hex, percentage) {

    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.max(0, Math.round(r * (1 - percentage)));
    g = Math.max(0, Math.round(g * (1 - percentage)));
    b = Math.max(0, Math.round(b * (1 - percentage)));

    return `rgb(${r},${g},${b})`;
}

function lichtContinentOp(continentNaam, actief) {
    const landen = document.querySelectorAll(
        `[data-continent="${continentNaam}"]`
    );

    landen.forEach(function (land) {
        if (actief) {
            land.style.fill =
                donkereKleur(
                    kleuren[continentNaam],
                    0.2
                );
        } else {
            land.style.fill =
                kleuren[continentNaam];
        }
    });
}

function toonRegioInfo(continentNaam) {

    const info = regioBeschrijving[continentNaam];

    if (!info) return;

    document.getElementById("regioInfo").innerHTML = `
        <h2>${info.titel}</h2>

        <p>
            <strong>Kenmerken:</strong><br>
            ${info.beschrijving}
        </p>

        <p>
            <strong>Kenmerkende ingrediënten:</strong><br>
            ${info.ingredienten}
        </p>
    `;
}
