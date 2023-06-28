import plotly.express as px
import pandas as pd

file_errors_location = '../2023.xlsx'
df = pd.read_excel(file_errors_location)

# fig = px.histogram(df, x="入學學年",title="Histogram on Date Axes")
fig = px.histogram(df, x="入學學年",title="Histogram on Date Axes", color='國籍')
# fig.show()
fig.show()