window.dashExtensions = Object.assign({}, window.dashExtensions, {
    default: {
        function0: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                markerOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            markerOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.CircleMarker(latlng, markerOptions); // sender a simple circle marker.
        },
        function1: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                markerOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            markerOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.CircleMarker(latlng, markerOptions); // sender a simple circle marker.
        },
        function2: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function3: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function4: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function5: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `icons/baseline_settings_input_antenna_black_24dp.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function6: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function7: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/icons/baseline_settings_input_antenna_black_24dp.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function8: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function9: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/icons/baseline_settings_input_antenna_black_24dp.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function10: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function11: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/icons/antenna_img.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function12: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function13: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `icons/antenna_img.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function14: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function15: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `https://github.com/doromboziandras32/Interdisciplinary/blob/master/icons/antenna_img.png`,
                iconSize: [64, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function16: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function17: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `https://flagcdn.com/64x48/hu.png`,
                iconSize: [20, 20]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function18: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function19: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [20, 20]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function20: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function21: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [48, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function22: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function23: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [48, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function24: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function25: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [48, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function26: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function27: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [48, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function28: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function29: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [48, 48]
            });
            return L.marker(latlng, {
                icon: flag
            });
        },
        function30: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function31: function(feature, latlng) {
            const flag = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: flag
            });
        }
    }
});