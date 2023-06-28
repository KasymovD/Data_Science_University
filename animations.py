import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd
from dash.dependencies import Input, Output
import dash_bootstrap_components as dbc

# Загрузка данных из CSV файла
df = pd.read_excel('../2023.xlsx')

selected_countries = ['越南', '日本', '印尼', '泰國']  # Список выбранных наций

filtered_df = df[df['國籍'].isin(selected_countries)]

nation_counts = df['國籍'].value_counts()

# Получение доступных стран из столбца 'Национальность'
available_countries = filtered_df['國籍'].unique()

# Создание экземпляра приложения Dash
app = dash.Dash(__name__, external_stylesheets=[dbc.themes.SLATE])
app.title = "I-Shou University Analytics"

a = list(df['西元生日'])
b = []
for i in a:
    b.append(str(i)[0:4])

# Определение разметки приложения
app.layout = dbc.Container([
    html.Div([
        dbc.Row([
            # dbc.Row([
            #     dbc.Col(dcc.Graph(id='graph1', figure=fig1), className='col-md-6'),
            #     dbc.Col(dcc.Graph(id='graph2', figure=fig2), className='col-md-6')
            # ]),
            # dbc.Row([
            # dbc.Col(dcc.Graph(id='graph3', figure=fig3), className='col-md-6'),
            # dbc.Col(dcc.Graph(id='graph4', figure=fig4), className='col-md-6')
            # ]),
html.Div([
                html.H4("Website related with higher education, study abroad in Asia", className="display-4", style={'text-align': 'center'}),
            ]),
            html.H3("Marketing team", className='custom-heading'),
            html.P(
                """Studyportals (https://www.studyportals.com/): This website offers an extensive database of higher education programs abroad. You can search for bachelor's, master's, doctoral, and short-term courses in various countries around the world. It also provides information on admission requirements, scholarships, and studying abroad.""",
                className='custom-text'),
            html.P(
                """Times Higher Education (https://www.timeshighereducation.com/): This website offers university rankings worldwide, news, analytical articles, and resources related to higher education. You can explore rankings, read about the latest trends, and find information about global learning opportunities.""",
                className='custom-text'),
            html.P(
                """TopUniversities (https://www.topuniversities.com/): This website provides reviews of universities worldwide, rankings, information on program disciplines, admission requirements, and scholarship opportunities. You can search for universities by country and explore information about different educational programs.""",
                className='custom-text'),
            html.P(
                """EducationUSA (https://educationusa.state.gov/): This website provides information and resources for students interested in studying abroad in the United States. You will find information about various universities and colleges, the application process, visa requirements, and financial support.""",
                className='custom-text')

        ], className='graph-container')
    ])
], className='main-container')


# Определение обратного вызова для обновления вывода на основе выбранной страны
def update_output(nation):
    if not nation:
        return ''

    # Фильтрация данных по выбранной стране
    filtered_df = df[df['國籍'] == nation]
    nation_count = len(filtered_df)

    # Создание графиков на основе отфильтрованных данных
    fig1 = px.pie(filtered_df, names='系名稱', title='Number of students in different departments')
    fig2 = px.treemap(filtered_df, path=['系名稱', '國籍'])
    fig1.update_traces(textposition='inside', textinfo='percent+label')
    fig3 = px.histogram(filtered_df, x="入學學年", title="Histogram on Date Students", color='國籍')
    fig4 = px.violin(df, y=b, title="Students by date of birth")
    fig4.update_traces(quartilemethod="exclusive")  # or "inclusive", or "linear" by default

    # Возвращение разметки с графиками
    return html.Div([
        dbc.Row([
            # dbc.Row([
            #     dbc.Col(dcc.Graph(id='graph1', figure=fig1), className='col-md-6'),
            #     dbc.Col(dcc.Graph(id='graph2', figure=fig2), className='col-md-6')
            # ]),
            # dbc.Row([
                # dbc.Col(dcc.Graph(id='graph3', figure=fig3), className='col-md-6'),
                # dbc.Col(dcc.Graph(id='graph4', figure=fig4), className='col-md-6')
            # ]),
            html.H3("Marketing team", className='custom-heading'),
            html.P("""Studyportals (https://www.studyportals.com/): This website offers an extensive database of higher education programs abroad. You can search for bachelor's, master's, doctoral, and short-term courses in various countries around the world. It also provides information on admission requirements, scholarships, and studying abroad.""", className='custom-text'),
            html.P(
                """Times Higher Education (https://www.timeshighereducation.com/): This website offers university rankings worldwide, news, analytical articles, and resources related to higher education. You can explore rankings, read about the latest trends, and find information about global learning opportunities.""",
                className='custom-text'),
            html.P(
                """TopUniversities (https://www.topuniversities.com/): This website provides reviews of universities worldwide, rankings, information on program disciplines, admission requirements, and scholarship opportunities. You can search for universities by country and explore information about different educational programs.""",
                className='custom-text'),
            html.P(
                """EducationUSA (https://educationusa.state.gov/): This website provides information and resources for students interested in studying abroad in the United States. You will find information about various universities and colleges, the application process, visa requirements, and financial support.""",
                className='custom-text')

        ], className='graph-container')
    ])


app.run_server(debug=True, port=8016)
