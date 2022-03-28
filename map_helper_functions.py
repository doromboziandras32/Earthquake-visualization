import pandas as pd
import numpy as np

import librosa
import soundfile as sf
import base64 
from io import BytesIO
#Extract the proper seismic instrument
#index: 0: north-south, 1: east-west, 2:vertical
def create_seismic_sound_to_dash_bytes(x):
    print('Read')
    x1 = x.data
    print('Normalize')
    norm_x =  x1/x1.std()
    print('Resample')
    norm_x_resampled = librosa.resample(norm_x, x.stats.sampling_rate, 8000)
    print('Export')
    out_audio = BytesIO()
    sf.write(out_audio,norm_x_resampled,8000,format = 'wav')


    out_audio.seek(0)
    encoded=base64.b64encode(out_audio.read()).decode("ascii").replace("\n", "")
    

    return "data:audio/wav;base64,{}".format(encoded)
