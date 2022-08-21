import json
import pandas as pd
import matplotlib.pyplot as plt 

data_path="data/raw_data.json"
with open(  data_path) as json_file:
    data=json.load(json_file)["hourly"]["000RE"]


times=[]
pluvio=[]
for d in data:
    last_pluvio=d["pluie_1h"]
    time=d["dh_utc"]
    if last_pluvio is not None:
        times.append(time)
        pluvio.append(float(last_pluvio))


df=pd.DataFrame({"time":times,"pluvio":pluvio})
df["time"]=pd.to_datetime(df["time"])
df.to_csv("data/draft.csv")
print(f'Total pluvio is {df["pluvio"].sum()}')

plt.plot(df["time"],df["pluvio"])
plt.ylabel('Pluviometrie en mm') 
plt.xlabel('Date') 
plt.show()