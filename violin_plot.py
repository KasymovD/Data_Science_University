import plotly.express as px
import pandas as pd

file_errors_location = '../2023.xlsx'
df = pd.read_excel(file_errors_location)


a = list(df['西元生日'])
b = []
for i in a:
    b.append(str(i)[0:4])

fig = px.violin(df, y=b)
fig.update_traces(quartilemethod="exclusive") # or "inclusive", or "linear" by default
fig.show()