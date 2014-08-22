var gismap = (function() {
	
	var map;
	var idmap = 'why-me-map';

	function initialize() {
		DG.then( function() {
			map = DG.map(idmap, {
				'center': [59.875694, 29.825896],
				'zoom': 17,
				'dragging': false,
				'scrollWheelZoom': false,
				'fullscreenControl': false,
				'zoomControl': false,
				'touchZoom': false
			});

			DG.marker([59.875694, 29.825896]).addTo(map);
		});
	}

	return {
		initialize: initialize
	};

})();