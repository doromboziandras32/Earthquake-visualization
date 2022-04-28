from map_helper_functions import *
import dash_leaflet as dl
from dash import Dash, html, dcc, Output, Input,ALL
from dash_extensions.javascript import assign
import dash_bootstrap_components as dbc
from dash import dash_table

import dash
from dash import dcc
from dash import html

from dash.dependencies import Input,Output,State
from dash import callback_context
import dash_leaflet as dl
from dash_extensions.javascript import assign




df_events = pd.read_csv("csvs/earthquake_metadata.csv",low_memory=False)

df_events.set_index('trace_name',inplace= True)

provider_list = sorted(URL_MAPPINGS.keys())
df_events['time'] = pd.to_datetime(df_events['trace_start_time'], infer_datetime_format=True)
df_events['source_depth_km'] = pd.to_numeric(df_events['source_depth_km'],errors='coerce')
df_events['source_magnitude'] = pd.to_numeric(df_events['source_magnitude'],errors='coerce')
#stations_df = pd.read_csv('stations_duplicates_removed.csv')
stations_df = pd.read_csv('csvs/stations_definition.csv')
stations_df['station_opened'] =  pd.to_datetime(stations_df['station_opened'], infer_datetime_format=True)
selected_event = df_events.loc['KAN08.GS_20150408005359_EV']

provider_of_waveform = stations_df[stations_df['station_id'] == selected_event['station_id']]

clien = provider_of_waveform['provider'].tolist()[0]

clien = Client(clien)
wave_test = extract_waveform(clien, selected_event)

o_file = create_seismic_sound_to_dash_bytes(wave_test)
new_wave_spectrogram = create_waveform_spectrogram(wave_test)

#Latitudes and longitudes
site_lat = df_events.source_latitude
site_lon = df_events.source_longitude
hover_desc = 'Timestamp: ' +  str(df_events.time) + '<br>Category: ' + df_events.trace_category

#min timestamp
#Extract timestamp range
min_date = min(df_events['time']).date()
max_date = max(df_events['time']).date()
#Extract minimum and maximum depth
min_depth = min(df_events['source_depth_km'])
max_depth = max(df_events['source_depth_km'])
#Extract minimum and maximum magnitude
min_magnitude = min(df_events['source_magnitude'])
max_magnitude = max(df_events['source_magnitude'])

depth_space = np.linspace(start=min_depth,stop=max_depth,num=8,endpoint=True,dtype=np.float64)
magnitude_space = np.linspace(start=min_magnitude,stop=max_magnitude,num=8,endpoint=True,dtype=np.float64)

provider_list = stations_df['provider'].value_counts().index.tolist()

stations_geojson = stations_df_to_geojson(stations_df)

data_points_geojson = dataframe_to_geojson(df_events) 







colorscale = ['red', 'yellow', 'green', 'blue', 'purple']  # rainbow
chroma = "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.1.0/chroma.min.js"  # js lib used for colors
color_prop = 'source_magnitude'

colorbar = dl.Colorbar(colorscale=colorscale, width=20, height=150, min=min_magnitude, max=max_magnitude,id = 'overview_map_colorbar')
colorbar_div = html.Div(children=[html.P("Magnitude"),colorbar], id="colorbar_div", className="info",
                style={"position": "absolute", "top": "10px", "right": "10px", "z-index": "1000"})
detail_colorbar = dl.Colorbar(colorscale=colorscale, width=20, height=150,  min=min_magnitude, max=max_magnitude, id = 'detail_map_colorbar')
detail_colorbar_div = html.Div(children=[html.P("Magnitude"),detail_colorbar], id="detail_colorbar_div", className="info",
                style={"position": "absolute", "top": "10px", "right": "10px", "z-index": "1000"})
# Geojson rendering logic, must be JavaScript as it is executed in clientside.
point_to_layer = assign("""function(feature, latlng, context){
    const {min, max, colorscale, circleOptions, colorProp} = context.props.hideout;
    const csc = chroma.scale(colorscale).domain([min, max]);  // chroma lib to construct colorscale
    circleOptions.fillColor = csc(feature.properties[colorProp]);  // set color based on color prop.
    return L.circleMarker(latlng, circleOptions);  // sender a simple circle marker.
}""")


#icons/antenna_img.png
# 
# `https://github.com/doromboziandras32/Interdisciplinary/blob/master/icons/antenna_img.png`
draw_antenna = assign("""function(feature, latlng){
const antenna = L.icon({iconUrl: `/static/antenna_img.png`, iconSize: [24,24]});
return L.marker(latlng, {icon: antenna});
}""")


draw_antenna_on_detail_map = assign("""function(feature, latlng){
const antenna = L.icon({iconUrl: `/static/antenna_img.png`, iconSize: [40,40]});
return L.marker(latlng, {icon: antenna});
}""")



#https://fonts.google.com/icons?selected=Material%20Icons%3Asettings_input_antenna%3A


app = Dash(external_scripts=[chroma],external_stylesheets=[dbc.themes.BOOTSTRAP] ,prevent_initial_callbacks=True)
#app = Dash(external_scripts=[chroma],external_stylesheets=[dbc.themes.MATERIA] ,prevent_initial_callbacks=True)
#app = Dash(external_scripts=[chroma] ,prevent_initial_callbacks=True)

app.layout = html.Div([
                        dbc.Row( id = 'filter-map-row',
                                children =  [                          
                                dbc.Modal( 
                                            [
                                            dbc.ModalHeader(
                                                dbc.ModalTitle("Warning"), close_button=True
                                            ),
                                            dbc.ModalBody(
                                                "This modal has no close button and can't be dismissed by "
                                                "pressing ESC. Try clicking on the backdrop or the below "
                                                "close button.",
                                                id="event-no-match-alert"
                                            )
                                            ],
                                            id = "event-no-match-modal",
                                            is_open = False,
                                            centered=True
                                        ),
                                #TODO: if we want to close a div, we should define a pattern matching callback (https://dash.plotly.com/pattern-matching-callbacks)
                                #https://medium.com/plotly/pattern-matching-callbacks-in-dash-9014eee99858
                                dbc.Modal( 
                                            [
                                            dbc.ModalHeader(
                                                dbc.ModalTitle("Warning"), close_button=True
                                            ),
                                            dbc.ModalBody(
                                                children = 'Number of comparable events (6) has been exceeded. In order to add new elements, click on "Clear selection" to remove the previous elements',
                                                id="compare-view-limit-exceed-alert"                                                
                                            )
                                            ],
                                            id = "compare-view-limit-exceed-modal",
                                            is_open = False,
                                            centered=True
                                        ),
                                                                
                                html.Div( 
                                        style={'width':'100%'},     
                                        children = [html.Div(children = [html.Div(id = 'filter-show-div',style={'display':'inline-block','vertical-align':'top'},
                                                  children = [html.Div(children =  [dbc.Button(
                                                    "Show Filters",
                                                    id="filter-show-hide-button",
                                                    #className="mb-3",
                                                    color="primary",
                                                    n_clicks=0,
                                                    )],style={'display':'block','overflow': 'visible','vertical-align':'top'}                                                    
                                                    ),
                                                    dbc.Collapse(id = 'collapse-filter-view',is_open = False,children = [
                                                    html.Div(id = 'filter-div',
                                                    style={'display':'block','vertical-align': 'top'},
                                                    children = [
                                                        html.Div(style={ 'display': 'block','vertical-align':'top','text-align': 'center','width':'100%'},
                                                                children = [
                                                                    html.H6('Date interval'),
                                                                #Datepicker to filter for intervals
                                                                    dcc.DatePickerRange(
                                                                        id='date-filter',
                                                                        min_date_allowed=min_date,
                                                                        max_date_allowed=max_date,
                                                                        initial_visible_month=min_date,
                                                                        start_date=min_date,
                                                                        end_date=max_date,
                                                                        style={'zIndex': 10}
                                                                    )]),
                                                        html.Div(style={ 'display': 'block','vertical-align':'top','width':'100%'},
                                                                children = [
                                                                    html.H6('Providers',style = {'text-align': 'center'}),                                                     
                                                                #Datepicker to filter for intervals
                                                                    dcc.Dropdown(id='provider-selector', 
                                                                        options=[{'label': i, 'value': i} for i in provider_list],
                                                                        multi=True, 
                                                                        value = provider_list,
                                                                        style={},
                                                                        className='stockselector',
                                                                        clearable=False,
                                                                        placeholder = 'Select providers..',
                                                                        
                                                                        )]), 
                                                        
                                                        html.Div(
                                                            style={ 'display': 'block','vertical-align':'top','text-align': 'center','width':'100%'},                                                
                                                            children = [
                                                            html.H6('Earthquake depth interval (in km)'),
                                                            #slider to filter for depth
                                                            dcc.RangeSlider(min = min_depth, max = max_depth,
                                                                            id='depth-slider',
                                                                            marks={i: '{:.2f}'.format(i) for i in depth_space},
                                                                            value=[min_depth, max_depth],
                                                                            dots=False,
                                                                            #step=
                                                                            step=0.01,
                                                                            updatemode='drag',
                                                                            tooltip={"placement": "bottom", "always_visible": False}
                                                        )]),
                                                        html.Div(
                                                            style={ 'display': 'block','vertical-align':'top','text-align': 'center','width':'100%'},
                                                            children = [
                                                            html.H6('Earthquake magnitude interval'),
                                                            #slider to filter for magnitudes
                                                            dcc.RangeSlider(min = min_magnitude, max = max_magnitude,
                                                                            id='magnitude-slider',
                                                                            marks={i: '{:.2f}'.format(i) for i in magnitude_space},
                                                                            value=[min_magnitude, max_magnitude],
                                                                            dots=False,
                                                                            step=0.01,
                                                                            updatemode='drag',
                                                                            tooltip={"placement": "bottom", "always_visible": False}
                                                                            ),
                                                            ]),
                                                        html.Div(
                                                            style={'display': 'block','text-align': 'center','marginBottom': 10},
                                                            children = [                                                      
                                                                        dbc.Button('Apply Filters', id='filter-apply-btn', n_clicks=0, color = 'primary'),
                                                                        dbc.Button('Reset Filters', id='filter-reset-btn', n_clicks=0, color = 'secondary')
                                                                        ]
                                                        )])
                                                ])]),
                                                                                                                               
                                            html.Div(
                                                    id = 'all-map-div' ,
                                                    style={'display':'inline-block',"border":"2px black solid",'width':'93%'},                                                                                
                                                    children = [html.H6(['Select an event either on the left map (Overview map) or on the right map (Detail map) to show the spectrogram and waveform image and the sonfified audible waveform',
                                                                        html.Br(),
                                                                        'Select a station (antenna symbol) on the Overview map in order to show the corresponding events on the Detail map.']),
                                                                dl.Map(children=[
                                                                dl.TileLayer(),
                                                                dl.GeoJSON(data = data_points_geojson,
                                                                options=dict(pointToLayer=point_to_layer),  # how to draw points            
                                                                hideout=dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=10),
                                                                min=min_magnitude, max=max_magnitude, colorscale=colorscale),                                                    
                                                                cluster=True , zoomToBoundsOnClick=True,
                                                                superClusterOptions={"radius": 100},
                                                                
                                                                id ='earthquake_events_geojson'),
                                                                dl.GeoJSON(data=stations_geojson
                                                                            , options=dict(pointToLayer=draw_antenna), zoomToBounds=True,
                                                                            clusterToLayer=draw_antenna,
                                                                            cluster=True ,  # how to draw clusters
                                                                            zoomToBoundsOnClick=True,
                                                                            superClusterOptions=dict(radius=150),
                                                                            id= 'stations_geojson')  # when true, zooms to bounds of feature (e.g. cluster) on click)
                                                                #,colorbar                                                                
                                                                ,colorbar_div
                                                            ],
                                                            style={'width': '65%', 'height': '50vh', "display": "inline-block","border-right":"5px black solid"}, id="map"),
                                                            dl.Map(children=[
                                                                dl.TileLayer(),
                                                                dl.GeoJSON(
                                                                            options=dict(pointToLayer=point_to_layer),  # how to draw points            
                                                                            hideout=dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=15),
                                                                            min=min_magnitude, max=max_magnitude, colorscale=colorscale), 
                                                                            zoomToBoundsOnClick=True,
                                                                            zoomToBounds=True,                                              
                                                                            id ='detail_map_earthquake_geojson'),
                                                                dl.GeoJSON( options=dict(pointToLayer=draw_antenna_on_detail_map),                                                                
                                                                            # how to draw clusters
                                                                            zoomToBoundsOnClick=True,        
                                                                            id= 'detail_map_stations_geojson')                                          
                                                                #,detail_colorbar
                                                                ,detail_colorbar_div
                                                            ]
                                                            ,
                                                            style={'width': '35%', 'height': '50vh', "display": "inline-block"}, id="detail_map",maxZoom = 20)
                                                            ]

                                            ),
                                        html.Div(
                                            style={'display': 'block','marginBottom': 2,'marginTop': 5},
                                            children = [html.H6('Select  whether to show a single event, or compare view (up to 6 events at once)'),
                                                        dcc.RadioItems(options=[{
                                                                                'value':'simple','label': 'Simple-event view'},
                                                                                {'value':'multi', 'label': 'Event-Compare view'                                                            
                                                                                }],
                                                                                value='simple', id ='view-selector-radio',labelStyle={'display': 'inline-block',
                                                                                                                                        'margin-left': '7px'}
                                                        )
                                                        
                                            ])])])
                            ]),
                        dbc.Row(id = 'simple-view-row',style = {'display': 'inline-block'},children=html.Div([
                    #Audio player
                                html.Div(                                    
                                        style={'marginBottom': 5, 'marginRight': 5,"border":"2px black solid",'display': 'inline-block', 'vertical-align': 'top','width':'600px'},                          
                                    children = [
                                                
                                                html.Audio(html.Source(src=o_file,type='audio/wav'), controls=True, id = 'audio_player_main'),                                          
                                                    dash_table.DataTable(id = 'event_info_table',style_header={'display':'none'}
                                                    ,style_cell={"whiteSpace": "pre-line"}                                                
                                                    ,data = create_event_infos(df_events,'KAN08.GS_20150408005359_EV')
                                                    ,style_cell_conditional=[
                                                        {'if': {'column_id': 'index'},
                                                        'width': '20%'},
                                                        {'if': {'column_id': '0'},
                                                        'width': '80%'},
                                                    ]
                                                    ,columns=[{"name": i, "id": i} for i in ['index','0']])
                                #)
                                ]),                         
                                html.Div(style={'marginBottom': 5, 'marginRight': 5,"border":"2px black solid",'display': 'inline-block', 'vertical-align': 'top'},                         
                                        children = [
                                                    html.Div(style={ 'display': 'block','vertical-align':'middle'}, id = 'seismogram-div',
                                                    children = [html.Img(id ='seismogram_img'
                                                    , src = new_wave_spectrogram, style= {'width': '100%'}
                                                    )])
                                                    ])])
                                ),
                        dbc.Row(id = 'multi-view-row',style = { 'display': 'none'},
                                children = [html.Div(id = 'clear-compare-view-div',children = html.Button('Clear selection', id='clear-compare-view', n_clicks=0),style={'vertical-align': 'top'})]
                                )])



@app.callback(
    Output(component_id='depth-slider', component_property= 'value'),
    Output(component_id='magnitude-slider', component_property= 'value'),
    Output(component_id='date-filter', component_property= 'start_date'),
    Output(component_id='date-filter', component_property= 'end_date'),
    Output(component_id='earthquake_events_geojson', component_property= 'data'),
    Output(component_id='stations_geojson', component_property= 'data'),
    Output(component_id='map', component_property= 'style'),
    Output(component_id='provider-selector', component_property= 'value'),
    
    Input(component_id='filter-apply-btn', component_property='n_clicks'), #Input button triggers the callback
    Input(component_id='filter-reset-btn', component_property='n_clicks'), #Input button triggers the callback
    State(component_id='depth-slider', component_property= 'value'),
    State(component_id='magnitude-slider', component_property= 'value'),
    State(component_id='date-filter', component_property= 'start_date'),
    State(component_id='date-filter', component_property= 'end_date'),
    State(component_id='provider-selector', component_property= 'value'),
    State(component_id='map', component_property= 'style')
)

def apply_filter(apply_click,reset_click, depth_value, magnitude_value,start_date,end_date, selected_providers,overview_map_style):

    style_to_refresh=overview_map_style
    
    # https://towardsdatascience.com/multi-faceted-data-exploration-in-the-browser-using-leaflet-and-amcharts-f74d049d78d9
    ctx = dash.callback_context
    clicked_element = ctx.triggered[0]['prop_id'].split('.')[0]
    if  clicked_element == 'filter-apply-btn':
        
        provider_filter = stations_df[(stations_df['provider'].isin(selected_providers)) & (stations_df['station_opened'] >= pd.to_datetime(start_date))]


        filtered_stations = list(set(provider_filter['station_id']))
        filter_records = df_events['time'].between(pd.to_datetime(start_date),pd.to_datetime(end_date)) & df_events['source_magnitude'].between(magnitude_value[0],magnitude_value[1])\
                         & df_events['source_depth_km'].between(depth_value[0],depth_value[1]) & df_events['station_id'].isin(filtered_stations)
        df_filtered = df_events[filter_records]

        filtered_datapoints_geojson = dataframe_to_geojson(df_filtered)
        filtered_stations_geojson = stations_df_to_geojson(provider_filter)
        

        return [depth_value,magnitude_value,start_date,end_date,filtered_datapoints_geojson,filtered_stations_geojson,style_to_refresh,selected_providers]

    elif clicked_element == 'filter-reset-btn':
        return [[min_depth,max_depth],[min_magnitude,max_magnitude],min_date,max_date,data_points_geojson,stations_geojson,style_to_refresh,provider_list]

    else:
        return dash.no_update


@app.callback(
    Output(component_id='simple-view-row', component_property= 'style'),
    Output(component_id='multi-view-row', component_property= 'style'),
    Input(component_id='view-selector-radio', component_property= 'value')
)

def switch_view(button_value):
    show_div = {'display': 'inline-block'}
    hide_div = {'display': 'none'}
    if button_value == 'simple':
        simple_view_div_style = show_div
        multi_view_div_style = hide_div

    elif button_value == 'multi':
        simple_view_div_style = hide_div 
        multi_view_div_style = show_div

    return [simple_view_div_style,multi_view_div_style]
        

@app.callback(Output("event_info_table", "data"),
            Output('seismogram_img', 'src'),
            #Output('spectrogram_img', 'src'), 
            Output('audio_player_main', 'src'),
            Output('audio_player_main', 'style'),
            Output('multi-view-row', 'children'),            
            Output(component_id="event-no-match-alert", component_property= 'children'),
            Output(component_id="event-no-match-modal", component_property= 'is_open'),    
            Output(component_id="compare-view-limit-exceed-modal", component_property= 'is_open'),   

        
            Input("earthquake_events_geojson", "click_feature"),
            Input("detail_map_earthquake_geojson", "click_feature"),
            Input('clear-compare-view', 'n_clicks'),
            #Input({'type': 'close-div', 'parent': ALL}, 'n_clicks'),
            #Input({'type': 'close-div', 'parent': ALL}, 'n_clicks'),
            Input({'type': 'close-div', 'parent': ALL}, 'n_clicks'),
            
            State("event_info_table", "data"),
            State('seismogram_img', 'src'),
            #State('spectrogram_img', 'src'),
            State('audio_player_main', 'src'),
            State('audio_player_main', 'style'),

            State(component_id='view-selector-radio', component_property= 'value'),
            State('multi-view-row', 'children'),
            State(component_id="event-no-match-alert", component_property= 'children')
            #State(component_id="event-no-match-alert", component_property= 'children')

            #State({'type': 'close-div', 'parent': ALL}, 'id')
)

def select_event(clicked_event,clicked_detail_event,click_compare_button,div_close_button,current_event_table ,current_seismogram_image,current_audio_src,audio_div_element,current_view, div_multi_row_elements, current_alert_msg):

    ctx = dash.callback_context
    
    clicked_element = ctx.triggered[0]['prop_id'].split('.')[0]
    

    alert_state = False
    compare_view_exceed_state = False
    audio_player_style = {}
    if clicked_element == "earthquake_events_geojson":
        if ctx.triggered[0]['value'] is not None:
            try:
                if ctx.triggered[0]['value']['properties']['cluster'] is True:
                    return dash.no_update
                else:
                    clicked_event = ctx.triggered[0]['value']
            except KeyError:
                print(ctx.triggered[0]['value'])
                raise KeyError
    
    elif clicked_element == "detail_map_earthquake_geojson":
        clicked_event = ctx.triggered[0]['value']

    elif clicked_element == 'clear-compare-view':  
        cleared_elements = [html.Div(html.Button('Clear selection', id='clear-compare-view', n_clicks=0),style={'vertical-align': 'top'})]
        
        
        return [current_event_table ,current_seismogram_image,current_audio_src,audio_div_element,cleared_elements, current_alert_msg, alert_state,compare_view_exceed_state]
    
    #Removal of elements from comparison view
    else:
        
        dictionary_close_btn = dict(subString.split(":") for subString in ctx.triggered[0]['prop_id'].replace('.n_clicks','').replace('{','').replace('}','').replace('"','').split(","))
        
        if dictionary_close_btn['type'] == 'close-div':
            parent_div = dictionary_close_btn['parent']
            div_multi_row_elements = [d for d in div_multi_row_elements if d['props']['id'] != 'div_' + parent_div]
            
            return [current_event_table ,current_seismogram_image,current_audio_src,audio_div_element,div_multi_row_elements, current_alert_msg, alert_state,compare_view_exceed_state]

        else: return dash.no_update
        

    if clicked_event is not None:
        selected_trace_name = clicked_event['properties']['trace_name']
        table_data = create_event_infos(df_events,selected_trace_name)
        selected_event = df_events.loc[selected_trace_name]

                
        provider_of_waveform = stations_df[stations_df['station_id'] == selected_event['station_id']]        
        
        try:
            client = Client(provider_of_waveform['provider'].tolist()[0])

            
            wave = extract_waveform(client, selected_event)

            #spectrogram_plot = spectrogram_to_uri(wave)

            seismic_plot = create_waveform_spectrogram(wave)

            
            audio_src = html.Source(src=create_seismic_sound_to_dash_bytes(wave),type='audio/wav')
            audio_src = create_seismic_sound_to_dash_bytes(wave)
                                                

        except:            
            current_alert_msg =  f"Event {selected_trace_name} does not have corresponding seismic sound and image"
            alert_state = True

            seismic_plot = current_seismogram_image
            #spectrogram_plot = current_spectrogram_image
            table_data = current_event_table
            audio_src = current_audio_src
            audio_player_style = audio_div_element
            #print('data cannot be found')
            #return dash.no_update
        if current_view == 'simple':
        #return [table_data,seismic_plot,spectrogram_plot,audio_src,audio_player_style,div_simple_row_style,div_multi_row_style,div_multi_row_elements]
            return [table_data,seismic_plot,audio_src,audio_player_style,div_multi_row_elements, current_alert_msg, alert_state,compare_view_exceed_state]

        elif current_view == 'multi':
            if len(div_multi_row_elements) < 7:
                 
                
                if alert_state is False:
                #new_div = html.Div(style={'marginLeft': 5,'marginTop': 5, 'marginRight': 5,"border":"2px black solid",'display': 'inline-block', 'vertical-align': 'left'},
                    new_div = html.Div(id = 'div_' + selected_trace_name,style={'marginBottom': 5, 'marginRight':0,"border":"2px black solid",'display': 'inline-block', 'vertical-align': 'left','width':'500px'},
                                        children = [
                                            html.Div(
                                                    style={'display': 'block','vertical-align':'center'}, 
                                                    children = [html.Div(html.Audio(src = audio_src, controls=True),style={'display': 'inline-block', 'float': 'left'}),
                                                                html.Div(html.Button(children = 'Remove',id = {'type': 'close-div','parent': selected_trace_name},style={'display': 'inline-block', 'float': 'right'}))]),
                                                               #html.Div(html.Button(children = html.Span(["Button", html.I(className="fa fa-close")]),id = {'type': 'close-div','parent': selected_trace_name},style={'display': 'inline-block', 'float': 'right'}))]),
                                                               #html.Div(html.I(className="fa fa-close",id = {'type': 'close-div','parent': selected_trace_name}),style={'display': 'inline-block', 'float': 'right'})]),

                                            html.Div(
                                                    style={'display': 'block','vertical-align':'left','margin':'0'}, 
                                                    children = html.Img( src = seismic_plot, style= {'width': '100%'})),
                                        
                                            html.Div(
                                                    style={'display': 'block','vertical-align':'left','width':'450px','margin':'0'},
                                                    children =   dash_table.DataTable(style_header={'display':'none'}
                                                ,style_cell={"whiteSpace": "pre-line"}                                      
                                                ,data = table_data
                                                ,style_cell_conditional=[
                                                    {'if': {'column_id': 'index'},
                                                    'width': '20%'},
                                                    {'if': {'column_id': '0'},
                                                    'width': '80%'},
                                                ]
                                                ,columns=[{"name": i, "id": i} for i in ['index','0']]) 
                                        )])
                                        
                                    
                    div_multi_row_elements.append(new_div)           

                return [table_data,seismic_plot,audio_src,audio_player_style,div_multi_row_elements, current_alert_msg, alert_state,compare_view_exceed_state]
            #TODO:currently just no update, but some warning dialog will be implemented later
            else:
                compare_view_exceed_state = True
                return [table_data,seismic_plot,audio_src,audio_player_style,div_multi_row_elements, current_alert_msg, alert_state,compare_view_exceed_state]
                #return dash.no_update

         
    else:
        return dash.no_update





@app.callback(
 # how to draw points      
Output(component_id='detail_map_earthquake_geojson', component_property= 'hideout'),
Output(component_id='detail_map_earthquake_geojson', component_property= 'data'),
Output(component_id='detail_map_stations_geojson', component_property= 'data'),
Output(component_id='detail_map', component_property= 'style'),
Output(component_id='detail_map_colorbar', component_property= 'min'),
Output(component_id='detail_map_colorbar', component_property= 'max'),
Output(component_id='detail_map_colorbar', component_property= 'style'),
Input(component_id="stations_geojson",component_property=  "click_feature"),
Input(component_id='filter-apply-btn', component_property='n_clicks'), #Input button triggers the callback
Input(component_id='filter-reset-btn', component_property='n_clicks'), #Input button triggers the callback
State(component_id='depth-slider', component_property= 'value'),
State(component_id='magnitude-slider', component_property= 'value'),
State(component_id='date-filter', component_property= 'start_date'),
State(component_id='date-filter', component_property= 'end_date'),
State(component_id='provider-selector', component_property= 'value') ,
State(component_id='stations_geojson', component_property= 'click_feature'),
State(component_id='detail_map', component_property= 'style')

)

def show_detail_event(clicked_event, apply_click,reset_click, depth_value, magnitude_value,start_date,end_date, selected_providers,last_selected_station,detail_map_style):

    style_to_refresh=detail_map_style

    ctx = dash.callback_context
    clicked_element = ctx.triggered[0]['prop_id'].split('.')[0]
    if  clicked_element == 'filter-apply-btn':
        #print(last_selected_station)
        if last_selected_station is not None and last_selected_station['properties']['cluster'] is False:
            
            selected_station_id = last_selected_station['properties']['station_id']           
        
            station_record = stations_df[stations_df['station_id'] == selected_station_id]         
            filter_records = df_events['time'].between(pd.to_datetime(start_date),pd.to_datetime(end_date)) & df_events['source_magnitude'].between(magnitude_value[0],magnitude_value[1])\
                         & df_events['source_depth_km'].between(depth_value[0],depth_value[1]) & (df_events['station_id'] == selected_station_id)


            df_detail_map_filter  = df_events[filter_records]
            try:                
                
                filtered_data_points_min_magnitude = min(df_detail_map_filter['source_magnitude'])                
                filtered_data_points_max_magnitude = max(df_detail_map_filter['source_magnitude'])

                if filtered_data_points_min_magnitude == filtered_data_points_max_magnitude:
                    filtered_data_points_max_magnitude = max_magnitude
            except:
                filtered_data_points_min_magnitude = min_magnitude
                filtered_data_points_max_magnitude = max_magnitude

            
            hideout_update = dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=10),
                                                        min=filtered_data_points_min_magnitude, max=filtered_data_points_max_magnitude, colorscale=colorscale)

            filtered_datapoints_geojson = dataframe_to_geojson(df_detail_map_filter)
            if len(filtered_datapoints_geojson) == 0:
                filtered_datapoints_geojson = None

            filtered_stations_geojson = stations_df_to_geojson(station_record)
                                    


            return [hideout_update,filtered_datapoints_geojson,filtered_stations_geojson,style_to_refresh,filtered_data_points_min_magnitude,filtered_data_points_max_magnitude,dict()]


        else:
            filtered_data_points_min_magnitude = min_magnitude
            filtered_data_points_max_magnitude = max_magnitude
            hideout_update = dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=10),
                                            min=filtered_data_points_min_magnitude, max=filtered_data_points_max_magnitude, colorscale=colorscale)
        
            return [hideout_update,None,None,style_to_refresh,filtered_data_points_min_magnitude,filtered_data_points_max_magnitude,dict()]
            
    elif clicked_element == 'filter-reset-btn':

            filtered_data_points_min_magnitude = min_magnitude
            filtered_data_points_max_magnitude = max_magnitude
            hideout_update = dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=10),
                                            min=filtered_data_points_min_magnitude, max=filtered_data_points_max_magnitude, colorscale=colorscale)
        
            return [hideout_update,None,None,style_to_refresh,filtered_data_points_min_magnitude,filtered_data_points_max_magnitude,dict()]
    
    elif clicked_element == 'stations_geojson':        
        
        if clicked_event is not None and clicked_event['properties']['cluster'] is False:
            
            selected_station_id = clicked_event['properties']['station_id']
            station_record = stations_df[stations_df['station_id'] == selected_station_id]

            #Refresh color property as well, maybe the scales and differences would be shown in more details
            

            filter_records = df_events['time'].between(pd.to_datetime(start_date),pd.to_datetime(end_date)) & df_events['source_magnitude'].between(magnitude_value[0],magnitude_value[1])\
                            & df_events['source_depth_km'].between(depth_value[0],depth_value[1]) & (df_events['station_id'] == selected_station_id)            
            df_detail_map_filter = df_events[filter_records]            
            try:                                
                filtered_data_points_min_magnitude = min(df_detail_map_filter['source_magnitude'])                
                filtered_data_points_max_magnitude = max(df_detail_map_filter['source_magnitude'])

                if filtered_data_points_min_magnitude == filtered_data_points_max_magnitude:
                    filtered_data_points_max_magnitude = max_magnitude
            except:
                filtered_data_points_min_magnitude = min_magnitude
                filtered_data_points_max_magnitude = max_magnitude

            hideout_update = dict(colorProp=color_prop, circleOptions=dict(fillOpacity=1, stroke=False, radius=10),
                                                        min=filtered_data_points_min_magnitude, max=filtered_data_points_max_magnitude, colorscale=colorscale)

            filtered_datapoints_geojson = dataframe_to_geojson(df_detail_map_filter)
            if len(filtered_datapoints_geojson) == 0:
                filtered_datapoints_geojson = None
            filtered_stations_geojson = stations_df_to_geojson(station_record)        

            return [hideout_update,filtered_datapoints_geojson,filtered_stations_geojson,style_to_refresh,filtered_data_points_min_magnitude,filtered_data_points_max_magnitude,dict()]

        else:
            return dash.no_update


@app.callback(                                                                                                            
Output("collapse-filter-view", "is_open"),
Output("filter-show-hide-button", "children"),
Output('all-map-div', 'style'),
Output('filter-show-div','style'),
[Input("filter-show-hide-button", "n_clicks")],
[State("collapse-filter-view", "is_open")],
)
def toggle_collapse(n, is_open):
    style = {'display':'inline-block',"border":"2px black solid",'width':'93%'}  
    filter_div_style = {'display':'inline-block','vertical-align':'top','width':'30%'}  
    if n:
        btn_text = 'Hide Filters'        
        style = {'display':'inline-block',"border":"2px black solid",'width':'65%'}
        if is_open:
            btn_text = 'Show Filters'
            filter_div_style = {'display':'inline-block','vertical-align':'top'}
            style = {'display':'inline-block',"border":"2px black solid",'width':'93%'}  
        return [not is_open,btn_text,style,filter_div_style]
    return [is_open,'Hide Filters',style,filter_div_style]


if __name__ == '__main__':
    #app.run_server()
    app.run_server(debug=True, use_reloader=False)