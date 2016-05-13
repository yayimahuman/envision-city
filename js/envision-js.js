// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".skyline").addClass("skyline-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".skyline").removeClass("skyline-collapse");
    }
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: ($($(this).attr('href')).offset().top - 50)
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(function() {
    $('.navbar-collapse ul li a').bind('click', function(event) {
        if ($(window).width() < 768) {
            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-toggle').click();
        }
    });
});
$(function(){
    if ($(window).width() > 767) {
        var h1 = $('#how-img-1').css("height");
        var h2 = $('#how-img-2').css("height");
        var h3 = $('#how-img-3').css("height");
        $("#how-div-1").css({ height: h1});
        $("#how-div-2").css({ height: h2});
        $("#how-div-3").css({ height: h3});
    }

    else if ($(window).width() < 768) {
        h1 = $('#how-child-1').css("height");
        h2 = $('#how-child-2').css("height");
        h3 = $('#how-child-3').css("height");
        $("#how-div-1").css({ height: h1});
        $("#how-div-2").css({ height: h2});
        $("#how-div-3").css({ height: h3});
    }

    $( window ).on("resize", function() {
        if ($(window).width() > 767) {
            h1 = $('#how-img-1').css("height");
            h2 = $('#how-img-2').css("height");
            h3 = $('#how-img-3').css("height");
            $("#how-div-1").css({ height: h1});
            $("#how-div-2").css({ height: h2});
            $("#how-div-3").css({ height: h3});
        }
        else {
            h1 = $('#how-child-1').css("height");
            h2 = $('#how-child-2').css("height");
            h3 = $('#how-child-3').css("height");
            $("#how-div-1").css({ height: h1});
            $("#how-div-2").css({ height: h2});
            $("#how-div-3").css({ height: h3});
        }
    });
});



// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(43.7000, -79.4000));
});

function init() {
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(43.6534438, -79.3862788),

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,

        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000002},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    };

    // Using a div with id="map"
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    /*var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });*/
}
