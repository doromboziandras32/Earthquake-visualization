<h1>Earthquake event visualization and sonification on Dashboard </h1>
<h2>Installation and running the visualization</h2>

1. Pull down the repository
2. It is recommended to create a new conda environment with **python 3.8**, then apply the following steps there 
3. Install the requirements from the attached txt:
    ```
    pip install -r requirements.txt
    ```
4. Open jupyter notebook **Plot_test_map_leaflet.ipynb**
5. Click on **Run All Cells**
6. After all cells are executed, open the following link: **[Dash App](http://127.0.0.1:8050/)**

OR 

4. Run **app.py** via terminal with the corresponding environment's python executable

5. Open the following link after *Dash is running on...* message appears: **[Dash App](http://127.0.0.1:8050/)**






<h2>Components </h2>

The goal of the Dashboard is to visualize and sonify earthquake events from the past:
the events are based on the **[STanford EArthquake Dataset](https://github.com/smousavi05/STEAD#stanford-earthquake-dataset-steada-global-data-set-of-seismic-signals-for-ai)**, namely the metadata which consists the information of earthquakes events, such as their location in **longitude** and **latitude**, as well as the **depth** and **magnitude** of the recorded event and the **corresponding station information** which recorded the event itself.
Based on the record(s) stored in the metadata file, the waveform can be queried from the corresponding provider, via the **[ObsPy](https://github.com/obspy/obspy)** framework.
<h3> Visualization of events </h3>

The earthquake events are shown in maps. The maps are provided via the **[Dash Leaflet](https://github.com/thedirtyfew/dash-leaflet)** framework, the points are plotted as geojson instances as colored circle-markers, which color-coding belongs to the magnitude value of the recorded events. Additionally, the recording stations are also plotted with antenna symbol.
The  paired orange color antennas (<a href="https://www.flaticon.com/free-icons/telecommunication" title="telecommunication icons">Telecommunication icons created by catkuro - Flaticon</a>) represent antenna clusters.


![Earthquake map](/screenshots/map_detail_00_edited.png "Overview and detail maps").

The map visualization has been split up to two components, an **Overview** map (marked with **1**) and a **Detail** map (marked with **2**): if a station has been selected on the **Overview** map, the earthquake events which belongs to the selected station will be focused on the **Detail** map. Furthermore, the colors of the events on the **Detail** map will be re-scaled in order to distinguish the difference within them. The color-bars are marked with **3** and **4** upon.



<h3> Filtering </h3>

The visualized events can be filtered based on several attributes in order to focus on specific events.

![Filter events](/screenshots/filtering_edited.png "Filtering earthquake events")

As the upon screenshot shows, the events can be filtered by the provider of the event (belongs to the station), marked with **1**, as well as the selection of date range of event recording (**2**), and the range of earthquake magnitude (**3**) and depth (**4**).

<h3> Waveform visualization and sonification </h3>

The events selected on the map were shown in waveform and spectrogram representation, and sonified and playable in audible form
![Show and sonify waveforms](/screenshots/audio_spectrogram_info_edited.png "Show and sonify waveforms")

The sonified/amplitude-normalized waveform is playable via the audio player component marked with **1**, alongside the details of the event shown in table representation (**2**), where the approximated country and state extracted based on longitude and latitude (in case of earthquake below water, or other non-determinable location, N/A will be shown).
The earthquake were represented in waveform (**3**) and spectrogram view (**4**) as well.



