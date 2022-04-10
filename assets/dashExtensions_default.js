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
        }
    }
});