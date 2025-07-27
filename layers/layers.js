var wms_layers = [];


        var lyr_OSMDark_0 = new ol.layer.Tile({
            'title': 'OSM Dark',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoVoyagerLabels_3 = new ol.layer.Tile({
            'title': 'Carto Voyager Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });

        var lyr_Pioneermap_4 = new ol.layer.Tile({
            'title': 'Pioneer map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=6a53e8b25d114a5e9216df5bf9b5e9c8'
            })
        });
var format_WomensDormitory_5 = new ol.format.GeoJSON();
var features_WomensDormitory_5 = format_WomensDormitory_5.readFeatures(json_WomensDormitory_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WomensDormitory_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WomensDormitory_5.addFeatures(features_WomensDormitory_5);
var lyr_WomensDormitory_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WomensDormitory_5, 
                style: style_WomensDormitory_5,
                popuplayertitle: 'Women\'s Dormitory',
                interactive: true,
                title: '<img src="styles/legend/WomensDormitory_5.png" /> Women\'s Dormitory'
            });
var format_MensDormitory_6 = new ol.format.GeoJSON();
var features_MensDormitory_6 = format_MensDormitory_6.readFeatures(json_MensDormitory_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MensDormitory_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MensDormitory_6.addFeatures(features_MensDormitory_6);
var lyr_MensDormitory_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MensDormitory_6, 
                style: style_MensDormitory_6,
                popuplayertitle: 'Men\'s Dormitory',
                interactive: true,
                title: '<img src="styles/legend/MensDormitory_6.png" /> Men\'s Dormitory'
            });
var format_Food_7 = new ol.format.GeoJSON();
var features_Food_7 = format_Food_7.readFeatures(json_Food_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Food_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Food_7.addFeatures(features_Food_7);
var lyr_Food_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Food_7, 
                style: style_Food_7,
                popuplayertitle: 'Food',
                interactive: true,
                title: '<img src="styles/legend/Food_7.png" /> Food'
            });
var format_BusStation_8 = new ol.format.GeoJSON();
var features_BusStation_8 = format_BusStation_8.readFeatures(json_BusStation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStation_8.addFeatures(features_BusStation_8);
var lyr_BusStation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStation_8, 
                style: style_BusStation_8,
                popuplayertitle: 'Bus Station',
                interactive: true,
                title: '<img src="styles/legend/BusStation_8.png" /> Bus Station'
            });
var format_Gym_9 = new ol.format.GeoJSON();
var features_Gym_9 = format_Gym_9.readFeatures(json_Gym_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gym_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gym_9.addFeatures(features_Gym_9);
var lyr_Gym_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gym_9, 
                style: style_Gym_9,
                popuplayertitle: 'Gym',
                interactive: true,
                title: '<img src="styles/legend/Gym_9.png" /> Gym'
            });
var format_PostOffice_10 = new ol.format.GeoJSON();
var features_PostOffice_10 = format_PostOffice_10.readFeatures(json_PostOffice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostOffice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostOffice_10.addFeatures(features_PostOffice_10);
var lyr_PostOffice_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostOffice_10, 
                style: style_PostOffice_10,
                popuplayertitle: 'Post Office',
                interactive: true,
                title: '<img src="styles/legend/PostOffice_10.png" /> Post Office'
            });
var format_BasketballCourt_11 = new ol.format.GeoJSON();
var features_BasketballCourt_11 = format_BasketballCourt_11.readFeatures(json_BasketballCourt_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasketballCourt_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasketballCourt_11.addFeatures(features_BasketballCourt_11);
var lyr_BasketballCourt_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasketballCourt_11, 
                style: style_BasketballCourt_11,
                popuplayertitle: 'Basketball Court',
                interactive: true,
                title: '<img src="styles/legend/BasketballCourt_11.png" /> Basketball Court'
            });
var format_FootballField_12 = new ol.format.GeoJSON();
var features_FootballField_12 = format_FootballField_12.readFeatures(json_FootballField_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootballField_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootballField_12.addFeatures(features_FootballField_12);
var lyr_FootballField_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FootballField_12, 
                style: style_FootballField_12,
                popuplayertitle: 'Football Field',
                interactive: true,
                title: '<img src="styles/legend/FootballField_12.png" /> Football Field'
            });
var format_EducationBuilding_13 = new ol.format.GeoJSON();
var features_EducationBuilding_13 = format_EducationBuilding_13.readFeatures(json_EducationBuilding_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EducationBuilding_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EducationBuilding_13.addFeatures(features_EducationBuilding_13);
var lyr_EducationBuilding_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EducationBuilding_13, 
                style: style_EducationBuilding_13,
                popuplayertitle: 'Education Building',
                interactive: true,
                title: '<img src="styles/legend/EducationBuilding_13.png" /> Education Building'
            });

lyr_OSMDark_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CartoVoyagerLabels_3.setVisible(true);lyr_Pioneermap_4.setVisible(true);lyr_WomensDormitory_5.setVisible(true);lyr_MensDormitory_6.setVisible(true);lyr_Food_7.setVisible(true);lyr_BusStation_8.setVisible(true);lyr_Gym_9.setVisible(true);lyr_PostOffice_10.setVisible(true);lyr_BasketballCourt_11.setVisible(true);lyr_FootballField_12.setVisible(true);lyr_EducationBuilding_13.setVisible(true);
var layersList = [lyr_OSMDark_0,lyr_ESRISatellite_1,lyr_OpenStreetMap_2,lyr_CartoVoyagerLabels_3,lyr_Pioneermap_4,lyr_WomensDormitory_5,lyr_MensDormitory_6,lyr_Food_7,lyr_BusStation_8,lyr_Gym_9,lyr_PostOffice_10,lyr_BasketballCourt_11,lyr_FootballField_12,lyr_EducationBuilding_13];
lyr_WomensDormitory_5.set('fieldAliases', {'Name': 'Name', 'Dormitory': 'Dormitory', 'Photo': 'Photo', });
lyr_MensDormitory_6.set('fieldAliases', {'Name': 'Name', 'Dormitory': 'Dormitory', 'Photo': 'Photo', });
lyr_Food_7.set('fieldAliases', {'Name': 'Name', 'Food': 'Food', 'Photo': 'Photo', });
lyr_BusStation_8.set('fieldAliases', {'Name': 'Name', 'Station': 'Station', 'Photo': 'Photo', });
lyr_Gym_9.set('fieldAliases', {'Name': 'Name', 'Gym': 'Gym', 'Photo': 'Photo', });
lyr_PostOffice_10.set('fieldAliases', {'Name': 'Name', 'PostOffice': 'PostOffice', 'Photo': 'Photo', });
lyr_BasketballCourt_11.set('fieldAliases', {'Name': 'Name', 'Basketball': 'Basketball', 'photo': 'photo', });
lyr_FootballField_12.set('fieldAliases', {'Name': 'Name', 'football': 'football', 'photo': 'photo', });
lyr_EducationBuilding_13.set('fieldAliases', {'Name': 'Name', 'Education': 'Education', 'Photos': 'Photos', });
lyr_WomensDormitory_5.set('fieldImages', {'Name': 'TextEdit', 'Dormitory': 'TextEdit', 'Photo': 'TextEdit', });
lyr_MensDormitory_6.set('fieldImages', {'Name': 'TextEdit', 'Dormitory': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Food_7.set('fieldImages', {'Name': 'TextEdit', 'Food': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_BusStation_8.set('fieldImages', {'Name': 'TextEdit', 'Station': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Gym_9.set('fieldImages', {'Name': 'TextEdit', 'Gym': 'TextEdit', 'Photo': 'TextEdit', });
lyr_PostOffice_10.set('fieldImages', {'Name': 'TextEdit', 'PostOffice': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_BasketballCourt_11.set('fieldImages', {'Name': 'TextEdit', 'Basketball': 'TextEdit', 'photo': 'ExternalResource', });
lyr_FootballField_12.set('fieldImages', {'Name': 'TextEdit', 'football': 'TextEdit', 'photo': 'TextEdit', });
lyr_EducationBuilding_13.set('fieldImages', {'Name': 'TextEdit', 'Education': 'TextEdit', 'Photos': 'TextEdit', });
lyr_WomensDormitory_5.set('fieldLabels', {'Name': 'no label', 'Dormitory': 'no label', 'Photo': 'no label', });
lyr_MensDormitory_6.set('fieldLabels', {'Name': 'no label', 'Dormitory': 'no label', 'Photo': 'no label', });
lyr_Food_7.set('fieldLabels', {'Name': 'no label', 'Food': 'no label', 'Photo': 'no label', });
lyr_BusStation_8.set('fieldLabels', {'Name': 'no label', 'Station': 'no label', 'Photo': 'no label', });
lyr_Gym_9.set('fieldLabels', {'Name': 'no label', 'Gym': 'no label', 'Photo': 'no label', });
lyr_PostOffice_10.set('fieldLabels', {'Name': 'no label', 'PostOffice': 'no label', 'Photo': 'no label', });
lyr_BasketballCourt_11.set('fieldLabels', {'Name': 'no label', 'Basketball': 'no label', 'photo': 'no label', });
lyr_FootballField_12.set('fieldLabels', {'Name': 'no label', 'football': 'no label', 'photo': 'no label', });
lyr_EducationBuilding_13.set('fieldLabels', {'Name': 'no label', 'Education': 'no label', 'Photos': 'no label', });
lyr_EducationBuilding_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});