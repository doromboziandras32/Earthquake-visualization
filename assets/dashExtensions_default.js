window.dashExtensions = Object.assign({}, window.dashExtensions, {
    default: {
        function0: function(feature, context) {
            return context.props.hideout.includes(feature.properties.trace_name);
        },
        function1: function(feature, context) {
            return context.props.hideout.includes(feature.properties.trace_name);
        }
    }
});