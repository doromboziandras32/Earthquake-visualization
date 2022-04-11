window.dashExtensions = Object.assign({}, window.dashExtensions, {
    default: {
        function0: function(feature, latlng, context) {
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
        function1: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function2: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
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
        function4: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function5: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function8: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function9: function(feature, latlng, context) {
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
        function10: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function11: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function14: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function15: function(feature, latlng, context) {
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
        function16: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function17: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function20: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function21: function(feature, latlng, context) {
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
        function22: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function23: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function26: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function27: function(feature, latlng, context) {
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
        function28: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function29: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function32: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        }
    }
});