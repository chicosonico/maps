		
		var mymap = L.map('mapid').setView([41.387708, 2.170219], 16);
		var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);
        var photoImg = '<img src="https://www.centfocs.com/wp-content/uploads/2014/02/restaurant_centfocs_barcelona14-768x667.jpg" height="150px" width="150px"/>';
		var contenido = "<h3>Restaurant Centfocs</h3> <p>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona</p>";
		var marker1 = L.marker([41.387120, 2.166034]).bindPopup(contenido + photoImg ).addTo(mymap).openPopup();
		