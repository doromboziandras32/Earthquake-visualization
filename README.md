<h1>Earthquake event visualization and sonification on Dashboard </h1>
<h2>Installation and running the visualization</h2>

1. Pull down the repository
2. It is recommended to create a new conda environment, then apply the following steps there 
3. Install the requirements from the attached txt:
    ```
    pip install -r requirements.txt
    ```
4. Open jupyter notebook **Plot_test_map_leaflet.ipynb**
5. Click on **Run All Cells**
6. After all cells are executed, open the following link: **[Dash App](http://127.0.0.1:8050/)**

<h2>Components </h2>

The goal of the Dashboard is to visualize and sonify earthquake events from the past:
the events are based on the **[STanford EArthquake Dataset](https://github.com/smousavi05/STEAD#stanford-earthquake-dataset-steada-global-data-set-of-seismic-signals-for-ai)**, namely the metadata which consists the information of earthquakes events, such as their location in **longitude** and **latitude**, as well as the **depth** and **magnitude** of the recorded event and the **corresponding station information** which recorded the event itself.
Based on the record(s) stored in the metadata file, the waveform can be queried from the corresponding provider, via the **[ObsPy](https://github.com/obspy/obspy)** framework.
<h3> Visualization of events </h3>

The earthquake events are shown in maps. The maps are provided via the **[Dash Leaflet](https://github.com/thedirtyfew/dash-leaflet)** framework, the points are plotted as geojson instances as colored circle-markers, which color-coding belongs to the magnitude value of the recorded events. Additionally, the recording stations are also plotted with antenna symbol.

![Earthquake map](/screenshots/map_detail_00_edited.png "Overview and detail maps").

The map visualization has been split up to two components, an **Overview** map (marked with **1**) and a **Detail** map (marked with **2**): if a station has been selected on the **Overview** map, the earthquake events which belongs to the selected station will be focused on the **Detail** map. Furthermore, the colors of the events on the **Detail** map will be re-scaled in order to distinguish the difference within them. The color-bars are marked with **3** and **4** upon.



<h3> Filtering <h3>

The events 


