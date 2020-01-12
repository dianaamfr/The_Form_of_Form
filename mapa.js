"use strict";

window.onload = function() {
    
	var directionsOptions = {
		polylineOptions: {
			strokeColor: 'rgb(120,120,120)'
		}
	}
	var directions_renderer = new google.maps.DirectionsRenderer(directionsOptions);
	var directions_service = new google.maps.DirectionsService();
    
    var mapOptions = {
		zoom: 12,
		center: new google.maps.LatLng(38.7436214, -9.1952231),
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffb5"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4a172"
            },
            {
                "saturation": "18"
            },
            {
                "lightness": "63"
            },
            {
                "gamma": "1.97"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d6a68b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff5c00"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.20"
            },
            {
                "color": "#d6a68b"
            },
            {
                "saturation": "26"
            },
            {
                "lightness": "26"
            },
            {
                "weight": "0.41"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#979797"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d6a68b"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6d4da"
            },
            {
                "gamma": "1.49"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "24"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#00b2ff"
            },
            {
                "gamma": "5.09"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
                };
	
	var mapElement = document.getElementById('mapa1');
	var map = new google.maps.Map(mapElement, mapOptions);
	document.getElementById('icon1').addEventListener('click', function() {
		google.maps.event.trigger(map, 'resize');
	});
    
        // 2º mapa
    
    var mapOptions5 = {
		zoom: 13,
		 center: new google.maps.LatLng(38.7374728,-9.1629688,15.17),
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffb5"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4a172"
            },
            {
                "saturation": "18"
            },
            {
                "lightness": "63"
            },
            {
                "gamma": "1.97"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d6a68b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff5c00"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.20"
            },
            {
                "color": "#d6a68b"
            },
            {
                "saturation": "26"
            },
            {
                "lightness": "26"
            },
            {
                "weight": "0.41"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#979797"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d6a68b"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6d4da"
            },
            {
                "gamma": "1.49"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "24"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#00b2ff"
            },
            {
                "gamma": "5.09"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
                };
	
	var mapElement5 = document.getElementById('mapa5');
	var map5 = new google.maps.Map(mapElement5, mapOptions5);

        var features = [
          {
            position: new google.maps.LatLng(38.7482648,-9.1712835,17),
            icon:'imagens/numeros/num1.png'
          }, {
            position: new google.maps.LatLng(38.7577255,-9.2442599,17),
            icon:'imagens/numeros/num2.png'
          }, {
            position: new google.maps.LatLng(38.7105649,-9.146444,17),
            icon:'imagens/numeros/num3.png'
          },
            {
            position: new google.maps.LatLng(38.7374728,-9.1629688,15.17),
            icon:'imagens/numeros/num4.png'
          },
            {
            position: new google.maps.LatLng(38.6955071,-9.2105429,17),
            icon:'imagens/numeros/num5.png'
          }, {
            position: new google.maps.LatLng(38.7137894,-9.124057,17),
            icon:'imagens/numeros/num6.png'
          }, {
            position: new google.maps.LatLng(38.6959029,-9.1947101,18),
            icon:'imagens/numeros/num7.png'
          }, {
            position: new google.maps.LatLng(38.7084645,-9.1433493,17),
           icon:'imagens/numeros/num8.png'
          }, 
            {
            position: new google.maps.LatLng(),
            icon:'imagens/numeros/num9.png'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker2 = new google.maps.Marker({
            position: feature.position,
            icon: feature.icon,
            map: map5
          });
        });

        // 3º mapa
    
    var mapOptions2 = {
		zoom: 12,
		 center: new google.maps.LatLng(38.8430816,-9.2219675,11.75),
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffb5"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4a172"
            },
            {
                "saturation": "18"
            },
            {
                "lightness": "63"
            },
            {
                "gamma": "1.97"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d6a68b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff5c00"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.20"
            },
            {
                "color": "#d6a68b"
            },
            {
                "saturation": "26"
            },
            {
                "lightness": "26"
            },
            {
                "weight": "0.41"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#979797"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d6a68b"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6d4da"
            },
            {
                "gamma": "1.49"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "24"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#00b2ff"
            },
            {
                "gamma": "5.09"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
                };
	
	var mapElement2 = document.getElementById('mapa2');
	var map2 = new google.maps.Map(mapElement2, mapOptions2);
    var bounds = new google.maps.LatLngBounds();
	document.getElementById('icon2').addEventListener('click', function() {
		google.maps.event.trigger(map2, 'resize');
        
	});

    // Multiple Markers
        var markers = [
        ['Estação de Santa Apolónia', 38.7136261,-9.1253417,17],
        ['Estação do Oriente', 38.7678465,-9.1015336,17]
    ];
     // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map2,
            title: markers[i][0],
            icon: 'imagens/placeholder5.png',
        });
    }

        // 4º mapa
    
    var mapOptions3 = {
		zoom: 13,
		 center: new google.maps.LatLng(38.7436214,-9.1952231 ),
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffb5"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4a172"
            },
            {
                "saturation": "18"
            },
            {
                "lightness": "63"
            },
            {
                "gamma": "1.97"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d6a68b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff5c00"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.20"
            },
            {
                "color": "#d6a68b"
            },
            {
                "saturation": "26"
            },
            {
                "lightness": "26"
            },
            {
                "weight": "0.41"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#979797"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d6a68b"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6d4da"
            },
            {
                "gamma": "1.49"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "24"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#00b2ff"
            },
            {
                "gamma": "5.09"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
                };
	
	var mapElement3 = document.getElementById('mapa3');
	var map3 = new google.maps.Map(mapElement3, mapOptions3);
    
	document.getElementById('icon3').addEventListener('click', function() {
		google.maps.event.trigger(map3, 'resize');
	});
    
     // Multiple Markers
        var locations3 = [
        ['Doca de Alcântara', 38.7018131,-9.1688157,17],
        ['Cais Rocha Conde de Óbidos', 38.7028772,-9.1648542,17],
        ['Terminal de passageiros de Santa Apolónia', 38.7132537,-9.1246768,17]
    ];
     // Display multiple markers on a map
   var infowindow3 = new google.maps.InfoWindow();

    var marker3, i;

    for (i = 0; i < locations3.length; i++) {  
      marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(locations3[i][1], locations3[i][2]),
        map: map3,
        icon: 'imagens/placeholder5.png'
        
      });

      google.maps.event.addListener(marker3, 'click', (function(marker3, i) {
        return function() {
          infowindow3.setContent(locations3[i][0]);
          infowindow3.open(map3, marker3);
        }
      })(marker3, i));
    }
    
        // 5º mapa
    
    var mapOptions4 = {
		zoom: 11,
		 center: new google.maps.LatLng(38.8804689,-9.391565,10.96),
		styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffb5"
            },
            {
                "saturation": "-66"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4a172"
            },
            {
                "saturation": "18"
            },
            {
                "lightness": "63"
            },
            {
                "gamma": "1.97"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d6a68b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff5c00"
            },
            {
                "lightness": "-7"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "2.20"
            },
            {
                "color": "#d6a68b"
            },
            {
                "saturation": "26"
            },
            {
                "lightness": "26"
            },
            {
                "weight": "0.41"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#979797"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.12"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#d6a68b"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff5c00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6d4da"
            },
            {
                "gamma": "1.49"
            },
            {
                "lightness": "11"
            },
            {
                "saturation": "24"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#00b2ff"
            },
            {
                "gamma": "5.09"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
                };
	
	var mapElement4 = document.getElementById('mapa4');
	var map4 = new google.maps.Map(mapElement4, mapOptions4);
	document.getElementById('icon4').addEventListener('click', function() {
		google.maps.event.trigger(map4, 'resize');
	});
    
    // Let's also add a marker while we're at it
    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(38.7755978,-9.1375554,17),
        map: map4,
        title: 'Aeroporto de Lisboa',
        icon: 'imagens/placeholder5.png'
    });
	
document.getElementById('submit-map').addEventListener('click', function() {
		
		var origin = document.getElementById('origin');
		var destination = 'Lisboa, Portugal';
		var directions_request;
		var status;
		
		if (origin.value != '') {
			
			directions_renderer.setMap(map);
			directions_request = {
				'origin': origin.value,
				'destination': destination,
				travelMode: google.maps.TravelMode.DRIVING
			};
			directions_service.route(directions_request, function(response, status) {
				
				if (status == google.maps.DirectionsStatus.OK) {
					
					// apagar caminhos anteriores
					directions_renderer.setDirections({routes: []});
					
					// desenhar caminho no mapa
					directions_renderer.setDirections(response);
					
					// mostrar a descriÃ§Ã£o textual do caminho
					/*for (var i = 0; i < response.routes[0].legs[0].steps.length; i++)
						output.innerHTML = '<div>' + response.routes[0].legs[0].steps[i].instructions + "</div>";
					*/
				} else {
					window.alert('ImpossÃ­vel encontrar o caminho.');
					output.innerHTML = '';
				}
				
			});
				
		} else {
			window.alert('Preencha o ponto de partida.');
			origin.focus();
		}
		
	});

}
