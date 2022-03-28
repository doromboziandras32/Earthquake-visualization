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
        }
    }
});