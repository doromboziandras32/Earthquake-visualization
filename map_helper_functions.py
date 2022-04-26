import pandas as pd
import numpy as np

import librosa
import soundfile as sf
import base64 
from io import BytesIO
import matplotlib.pyplot as plt
import dash_leaflet.express as dlx  
import obspy
from obspy import UTCDateTime
from geopy.geocoders import Nominatim
from obspy.clients.fdsn.client import Client

from obspy.clients.fdsn.header import URL_MAPPINGS
import dash_leaflet as dl
from dash import Dash, html, dcc, Output, Input
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
from datetime import datetime, timedelta

geolocator = Nominatim(user_agent="geoapiExercises")
def normalize_amplitude(waveform, rms_level):
    """
    Normalize the signal given a certain technique (rms).
    Args:
        - waveform    (np.array) : input waveform.
        - rms_level (int) : desired rms level in dB.(DBFS scale)
    """
    sig_highpass_filterd = waveform.filter("highpass", freq=0.5)
    sig = sig_highpass_filterd.data
    
    r = 10**(rms_level / 20.0)
    a = np.sqrt( (len(sig) * r**2) / np.sum(sig**2) )

    # normalize
    y = sig * a

    return y
#Extract the proper seismic instrument
#index: 0: north-south, 1: east-west, 2:vertical
def create_seismic_sound_to_dash_bytes(x,rms_level = 0):
    y = normalize_amplitude(x,rms_level)
    #Resample audio to make it audible by html.audio
    y_resampled = librosa.resample(y, orig_sr = x.stats.sampling_rate, target_sr = 8000)
    
    out_audio = BytesIO()
    #Write to bytes
    sf.write(out_audio,y_resampled,8000,format = 'wav')

    out_audio.seek(0)
    encoded=base64.b64encode(out_audio.read()).decode("ascii").replace("\n", "")
    

    return "data:audio/wav;base64,{}".format(encoded)

#Simplified waveform spectrogram plot  https://stackoverflow.com/questions/35420052/adding-colorbar-to-a-spectrogram
def create_waveform_spectrogram(waveform):
    px = 1/plt.rcParams['figure.dpi']
    #wf = fig_to_uri(waveform)

    fig = plt.figure(figsize=(800*px, 500*px))
    #ax1 = fig.add_axes([0.1, 0.6, 0.7, 0.3]) #[left bottom width height]
    #ax2 = fig.add_axes([0.1, 0.1, 0.7, 0.40],sharex = ax1)
    #ax3 = fig.add_axes([0.83, 0.1, 0.03, 0.40])
    ax1 = fig.add_axes([0.14, 0.6, 0.7, 0.3]) #[left bottom width height]
    ax2 = fig.add_axes([0.14, 0.1, 0.7, 0.40],sharex = ax1)
    ax3 = fig.add_axes([0.85, 0.1, 0.03, 0.40])

    #make time vector
    t = np.arange(waveform.stats.npts) / waveform.stats.sampling_rate
    time_split = list(np.arange(np.datetime64(waveform.stats['starttime']), np.datetime64(waveform.stats['endtime']), timedelta(seconds=20)).astype('datetime64[s]'))
    time_split.append(np.datetime64(waveform.stats['endtime']).astype('datetime64[s]'))
    #plot waveform (top subfigure)    
    ax1.plot(t, waveform.data, 'k')
    #ax1.plot(waveform.data)
    ax1.set_xticks(np.arange(0,61)[::20])
    ax1.set_xticklabels(time_split)
    ax1.get_xaxis().set_visible(False)
    ax1.set_ylabel('Amplitude counts', fontsize=18)
    ax1.tick_params(axis='y', labelsize=10)

    #plot spectrogram (bottom subfigure)
    #spl2 = waveform
    #spl2.spectrogram(show=False, axes=ax2)
    waveform.filter("highpass", freq=0.5).spectrogram(show = False, axes = ax2)
    #ax2.specgram(x = waveform.filter("highpass", freq=0.5).data, Fs = waveform.stats.sampling_rate,scale = 'dB',cmap = 'viridis')
    ax2.set_xlabel('Time [sec]', fontsize=15)
    ax2.set_ylabel('Frequency [Hz]', fontsize=15)
    #ax2.set_title('')
    ax2.set_xticks(np.arange(0,61)[::20])
    ax2.set_xticklabels(time_split, fontsize=10)
    ax2.tick_params(axis='y', labelsize=10)
    mappable = ax2.images[0]
    plt.colorbar(mappable=mappable, cax=ax3).set_label(size=15,label = 'Amplitude (dB)')
    out_img = BytesIO()
    
    fig.savefig(out_img, format='png')
    fig.clf()            
    plt.close('all') 
    out_img.seek(0)  # rewind file
    encoded = base64.b64encode(out_img.read()).decode("ascii").replace("\n", "")
    #return encoded
    return "data:image/png;base64,{}".format(encoded)


    

def fig_to_uri(in_fig, close_all=True, **save_args):
    px = 1/plt.rcParams['figure.dpi']
    fig = plt.figure(figsize=(500*px, 200*px))
    
    out_img = BytesIO()
    if isinstance(in_fig,obspy.core.Trace):
        #in_fig.plot(outfile =out_img, format='png', size = (600,200) )
        in_fig.plot(fig = fig )
        fig.savefig(out_img, format='png', **save_args)
        if close_all:
            fig.clf()            
            plt.close('all')   
    else:    
        in_fig.savefig(out_img, format='png', **save_args)
        if close_all:
            in_fig.clf()
            plt.close('all')        
    
    out_img.seek(0)  # rewind file
    encoded = base64.b64encode(out_img.read()).decode("ascii").replace("\n", "")
    #return encoded
    return "data:image/png;base64,{}".format(encoded)



def spectrogram_to_uri(input_data, close_all=True, **save_args):    
    #todo: maybe we might be able to make a bytewriter approach, which is easier, and can be used for seismic plot and spectrograms at once
    
    #f, t, Sxx = signal.spectrogram(input_data.filter("highpass", freq=0.5).data, input_data.stats.sampling_rate)
    px = 1/plt.rcParams['figure.dpi']
    plt.figure(figsize=(700*px, 250*px))
    f, t, Sxx,e = plt.specgram(x = input_data.filter("highpass", freq=0.5).data, Fs = input_data.stats.sampling_rate,scale = 'dB',cmap = 'viridis')
    clbr = plt.colorbar(e)
    clbr.ax.set_ylabel('Amplitude (dB)')
    #TODO: https://stackoverflow.com/questions/27210394/matplotlib-spectrogram-intensity-legend-colorbar
    #https://stackoverflow.com/questions/35420052/adding-colorbar-to-a-spectrogram: maybe refarctor the spectrogram and waveform based on that
    #plt.pcolormesh(t, f, np.log10(Sxx))
    plt.ylabel('Frequency [Hz]')
    plt.xlabel('Time [sec]')
    #plt.show()

    # type: (plt.Figure) -> str
    """
    Save a figure as a URI
    :param in_fig:
    :return:
    """
    out_img = BytesIO()
    plt.savefig(out_img, format='png', **save_args)
    if close_all:
        plt.clf()
        plt.close('all')
    out_img.seek(0)  # rewind file
    encoded = base64.b64encode(out_img.read()).decode("ascii").replace("\n", "")
    #return encoded
    return "data:image/png;base64,{}".format(encoded)

def extract_waveform(client, event_record):
    wave = client.get_waveforms(network=event_record['network_code'],
                            station=event_record['receiver_code'],
                            starttime=UTCDateTime(event_record['time']),
                                endtime=UTCDateTime(event_record['time']) + 60,
                                location = "*",
                                channel = "*")
    
    #temprorarily extract only one stream
    return wave[0]

def create_event_infos(df,x):
    #'time','source_depth_km','source_magnitude','trace_name','source_latitude','source_longitude','trace_category'
    #selected_record = df_test.loc[x['trace_name']]
    selected_record = df.loc[x]
    latitude = str(selected_record['source_latitude'])
    longitude = str(selected_record['source_longitude'])
    address_details = ['road','county','state', 'country']
    try:
        location = geolocator.reverse(latitude + "," + longitude, language='en').raw
        location_string = str()
        for a in address_details:
            try:
                location_string += location['address'][a]
                location_string += ', '

            except KeyError:
                pass
        
        location_string = location_string[:-2]
    except AttributeError:
        location_string = "N/A"


    #print(location)
    info_dict = dict()
    info_dict['trace_name'] = x
    info_dict['location'] = location_string
    info_dict['latitude'] = latitude
    info_dict['longitude'] = longitude
    info_dict['event_recorded_at'] = str(selected_record['time'])
    info_dict['earthquake_depth'] = f'{selected_record["source_depth_km"]} km'
    info_dict['earthquake_magnitude'] = f'{selected_record["source_magnitude"]} km'

    return pd.DataFrame.from_dict(info_dict, orient='index').reset_index().to_dict('records')


def stations_df_to_geojson(x):
    #df_points = x[['trace_name','source_latitude','source_longitude']]    
    df_points = x.groupby(['station_id','network_name','station_name','latitude','longitude','station_opened','station_closed'], dropna=False)['provider'].apply(list).reset_index()
    df_points_records_renamed = df_points.rename(columns = {'latitude' :'lat','longitude' :'lon'}).to_dict('records')
    return dlx.dicts_to_geojson(df_points_records_renamed)



def dataframe_to_geojson(x):
    df_points = x.reset_index()[['trace_name','source_latitude','source_longitude','source_magnitude']]
    df_points_records_renamed = df_points.rename(columns = {'source_latitude' :'lat','source_longitude' :'lon'}).to_dict('records')
    return dlx.dicts_to_geojson(df_points_records_renamed)

    
