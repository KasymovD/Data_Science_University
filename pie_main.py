import plotly.express as px
import pandas as pd

import dash
from dash import Dash, dcc, html, Input, Output, callback

file_errors_location = '../2023.xlsx'
df = pd.read_excel(file_errors_location)

fig = px.pie(df, names="國籍", hole=0.3)
fig.update_traces(textposition='inside', textinfo='percent+label')

# fig.show()

app = dash.Dash()
app.layout = html.Div([
    dcc.Graph(figure=fig)
])

app.run_server(debug=True, use_reloader=False, port=8051)
