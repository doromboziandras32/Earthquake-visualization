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
        function1: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function2: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function3: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
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
        function5: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function6: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function7: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
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
        function13: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function14: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function15: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
        function17: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function18: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function19: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
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
        function25: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function26: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function27: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
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
        function29: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function30: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function31: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function32: function(feature, latlng, context) {
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
        function33: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function34: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function35: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function36: function(feature, latlng, context) {
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
        function37: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function38: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function39: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function40: function(feature, latlng, context) {
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
        function41: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function42: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function43: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function44: function(feature, latlng, context) {
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
        function45: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function46: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function47: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function48: function(feature, latlng, context) {
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
        function49: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function50: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function51: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function52: function(feature, latlng, context) {
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
        function53: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function54: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function55: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [40, 40]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function56: function(feature, latlng, context) {
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
        function57: function(feature, latlng, context) {
            const {
                min,
                max,
                colorscale,
                circleOptions,
                colorProp
            } = context.props.hideout;
            const csc = chroma.scale(colorscale).domain([min, max]); // chroma lib to construct colorscale
            circleOptions.fillColor = csc(feature.properties[colorProp]); // set color based on color prop.
            console.log(min);
            console.log(max);
            console.log(feature.properties);
            console.log(csc(feature.properties[colorProp]));
            return L.circleMarker(latlng, circleOptions); // sender a simple circle marker.
        },
        function58: function(feature, latlng) {
            const antenna = L.icon({
                iconUrl: `/static/antenna_img.png`,
                iconSize: [24, 24]
            });
            return L.marker(latlng, {
                icon: antenna
            });
        },
        function59: function(feature, latlng) {
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