ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([38.220459, 17.796622, 54.220459, 35.077435]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_region_1 = new ol.format.GeoJSON();
var features_region_1 = format_region_1.readFeatures(json_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_1.addFeatures(features_region_1);
var lyr_region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_1, 
                style: style_region_1,
                popuplayertitle: 'region',
                interactive: false,
                title: '<img src="styles/legend/region_1.png" /> region'
            });
var format_Sheet1_XYTableToPoint_2 = new ol.format.GeoJSON();
var features_Sheet1_XYTableToPoint_2 = format_Sheet1_XYTableToPoint_2.readFeatures(json_Sheet1_XYTableToPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sheet1_XYTableToPoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sheet1_XYTableToPoint_2.addFeatures(features_Sheet1_XYTableToPoint_2);
var lyr_Sheet1_XYTableToPoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sheet1_XYTableToPoint_2, 
                style: style_Sheet1_XYTableToPoint_2,
                popuplayertitle: 'Sheet1_XYTableToPoint',
                interactive: true,
                title: '<img src="styles/legend/Sheet1_XYTableToPoint_2.png" /> Sheet1_XYTableToPoint'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_region_1.setVisible(true);lyr_Sheet1_XYTableToPoint_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_region_1,lyr_Sheet1_XYTableToPoint_2];
lyr_region_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EMIRATE_ID': 'EMIRATE_ID', 'A_NAME': 'A_NAME', 'E_NAME': 'E_NAME', 'CAPITAL_ID': 'CAPITAL_ID', 'CLASS': 'CLASS', 'POPULATION': 'POPULATION', 'SHAPE_Leng': 'SHAPE_Leng', 'الاسم': 'الاسم', 'عددال': 'عددال', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sheet1_XYTableToPoint_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr_region_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'EMIRATE_ID': '', 'A_NAME': '', 'E_NAME': '', 'CAPITAL_ID': '', 'CLASS': '', 'POPULATION': '', 'SHAPE_Leng': '', 'الاسم': '', 'عددال': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Sheet1_XYTableToPoint_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'Hidden', 'مشروع_الأصول_الثقافية': 'Hidden', 'ترميم_وتأهيل_130_مسجد': 'Hidden', 'مشروع_البلدات_التراثية': 'Hidden', 'مشروع_حصر_المواقع_والمباني': 'Hidden', 'مشروع_أطلس_المساجد_التاريخية': 'Hidden', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'Hidden', 'مشروع_أصول_الدرعية_التاريخية': 'Hidden', 'مشروع_قصر_ثريان': 'Hidden', 'مشروع_مباني_سمحان': 'Hidden', 'مشروع_قصر_بن_رقوش': 'Hidden', 'PHOTOS': 'ExternalResource', 'ID': 'Hidden', 'POINT_X': 'Hidden', 'POINT_Y': 'Hidden', 'SITE_E_NAME': 'Hidden', });
lyr_region_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EMIRATE_ID': 'no label', 'A_NAME': 'no label', 'E_NAME': 'no label', 'CAPITAL_ID': 'no label', 'CLASS': 'no label', 'POPULATION': 'no label', 'SHAPE_Leng': 'no label', 'الاسم': 'no label', 'عددال': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Sheet1_XYTableToPoint_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - always visible', 'المنطقة': 'inline label - always visible', 'المحافظة': 'inline label - always visible', 'طبيعة_الأعمال': 'inline label - always visible', 'اسم_الموقع': 'inline label - always visible', 'PHOTOS': 'header label - visible with data', });
lyr_Sheet1_XYTableToPoint_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});