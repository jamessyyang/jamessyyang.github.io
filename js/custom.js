jQuery(document).ready(function($) {
    "use strict";
    //For Pretty Photo Validation
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
	
		
	
	//HOME BANNER
    if ($('#home-banner').length) {
        $("#home-banner").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            autoplayTimeout: 1000,
            singleItem: true


        });
    }
	
	//HOME BANNER STYLE 2
    if ($('#home-banner-2').length) {
        $("#home-banner-2").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            autoplayTimeout: 1000,
            singleItem: true


        });
    }
	
	//Counter
	if ($('.counter').length) {
	 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
	}
	
	//Accordion 
    //custom animation for open/close
    $.fn.slideFadeToggle = function(speed, easing, callback) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, speed, easing, callback);
    };
    $('.accordion_cp').accordion({
        defaultOpen: 'section1',
        cookieName: 'nav',
        speed: 'slow',
        animateOpen: function(elem, opts) { //replace the standard slideUp with custom function
            elem.next().stop(true, true).slideFadeToggle(opts.speed);
        },
        animateClose: function(elem, opts) { //replace the standard slideDown with custom function
            elem.next().stop(true, true).slideFadeToggle(opts.speed);
        }
    });
	
	//HOME TESTIMONIALS
    if ($('#testimonial-banner').length) {
        $("#testimonial-banner").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            autoplayTimeout: 1000,
            singleItem: true


        });
    }
	
	//HOME 3 TESTIMONIALS
    if ($('#testimonial-3').length) {
        $("#testimonial-3").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: true,
            autoplayTimeout: 1000,
            singleItem: true


        });
    }
	
	//LATEST NEWS
    if ($('.news-slider').length) {
        $(".news-slider").owlCarousel({
            navigation: true,
            items: 2,
            loop: true,
            margin: 30,
            itemsCustom: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,
        });
    }
	
	//PROFESSIONALS TEAM
    if ($('.professionals-team').length) {
        $(".professionals-team").owlCarousel({
            navigation: true,
            items: 4,
            loop: true,
            margin: 30,
            itemsCustom: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,
        });
    }
	
	 //HOME 3 Map
    if ($('#map_contact_1').length) {
        var map;
        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#cacaca'
                }, {
                    saturation: -100,
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon-2.png'
        });
        marker.getPosition();
        //End marker
    }
	
	 //CONTACT PAGE STYLE 1 Map
    if ($('#map_contact_2').length) {
        var map;
        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_2'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        //var infowindow = new google.maps.InfoWindow({
           // content: '',
            //position: myLatLng
       // });
       // infowindow.open(map);
    }
	
	//CONTACT PAGE STYLE 2 Map
    if ($('#map_contact_3').length) {
        var map;
        var myLatLng = new google.maps.LatLng(48.85661, 2.35222);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_3'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        //var infowindow = new google.maps.InfoWindow({
           // content: '',
            //position: myLatLng
       // });
        //infowindow.open(map);
    }
	
	//PRICE RANGE
	 if ($('.slider-range-min').length) {
	 $( ".slider-range-min" ).slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( ".amount" ).val( "$" + ui.value + ",000");
        $(".a, .b, .c, .d").width(ui.value + "%");
      }
    });
    $(".ui-slider-handle").text("<>");
    $( ".amount" ).val( "$" + $( ".slider-range-min" ).slider( "value") + ",000");
	 }
	 
	 //
	  $(".mobile").owlCarousel({
            navigation: true,
            items: 3,
            loop: true,
            margin: 0,
            itemsCustom: false,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,
        });
	
	



	
	
	
	
	    //Function End
});