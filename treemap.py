import plotly.express as px
import pandas as pd


file_errors_location = '../2023.xlsx'
df = pd.read_excel(file_errors_location)

fig = px.treemap(df, path=['系名稱', '國籍'])
fig.show()