import plotly.express as px
import pandas as pd

file_errors_location = '../2023.xlsx'
df = pd.read_excel(file_errors_location)

fig = px.scatter(df, x="校內學院名稱", y='國籍')
fig.update_traces(marker_size=10)
fig.update_layout(scattermode="group", scattergap=0.75)
fig.show()