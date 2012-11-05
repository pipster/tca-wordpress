// preload bg images
var images = ['assets/images/brakelight.jpg', 'assets/images/building-colored-windows.jpg', 'assets/images/canvas.jpg', 'assets/images/day-side-buildings.jpg', 'assets/images/dusk-street-scene-prado.jpg', 'assets/images/dusk-trio.jpg', 'assets/images/halla-paju.jpg', 'assets/images/hikari-int-leasing.jpg', 'assets/images/iac-the-enclave.jpg', 'assets/images/metro-penthouse-balcony.jpg', 'assets/images/night-building-traffic.jpg', 'assets/images/pool-west-to-east.jpg', 'assets/images/santa-barbara-pool-2.jpg', 'assets/images/santa-barbara-pool.jpg', 'assets/images/santa-barbara-walkway.jpg', 'assets/images/shade-pool.jpg', 'assets/images/side-building-detail.jpg', 'assets/images/side-of-buildings.jpg', 'assets/images/sky-deck.jpg', 'assets/images/tan-night-skyline.jpg', 'assets/images/westgate.jpg', 'assets/images/wilshire-5550.jpg'];
$(images).each(function() {
	var image = $('<img />').attr('src', this);
});
$(document).ready(function() {
	$('#slideshow').cycle({
		fx: 'fade',
		// choose your transition type, ex: fade, scrollUp, shuffle, etc...
		pager: '#smallnav',
		pause: 1,
		speed: 2000,
		timeout: 2000
	});
});

