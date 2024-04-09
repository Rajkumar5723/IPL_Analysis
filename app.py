from flask import Flask, render_template, request
import pandas as pd
import pickle

app = Flask(__name__)

# Load the first trained model
with open('ipl_model.pkl', 'rb') as file:
    model1 = pickle.load(file)

# Load the second trained model
with open('random_forest_model.pkl', 'rb') as file:
    model2 = pickle.load(file)

# Load the dataset
df = pd.read_csv(r"C:\Users\RAJKUMAR\Desktop\srm\data\IPL_2022_21042023.csv")

# Define function to predict best bowler
def predict_best_bowler(team_name, opposite_team_name):
    filtered_df = df[(df['CNT'] == team_name) & (df['OPPOSITE TEAM'] == opposite_team_name)]
    if filtered_df.empty:
        return "No data available for the specified teams."
    X_filtered = filtered_df[['OVERS BOWLED1', 'WICK1', 'WICK2', 'E/R1', 'E/R2', 'CATCH1', 'CATCH2', 'RUNOUT/STUMPING1', 'RUNOUT/STUMPING2', 'OPPOSITE TEAM', 'CNT']]
    player_runs_predictions = model1.predict(X_filtered)
    best_player_index = player_runs_predictions.argmax()
    best_player_name = filtered_df.iloc[best_player_index]['NAME']
    return best_player_name

# Define function to predict best batsman
def predict_best_batsman(team_name, opposite_team_name):
    filtered_df = df[(df['CNT'] == team_name) & (df['OPPOSITE TEAM'] == opposite_team_name)]
    if filtered_df.empty:
        return "No data available for the specified teams."
    X_filtered = filtered_df[['RUNS2', '4S2', '6S2', 'S/R2', 'BALLS FACED1', '30/50/100_2', 'DUCK2', 'OPPOSITE TEAM', 'CNT']]
    player_runs_predictions = model2.predict(X_filtered)
    best_player_index = player_runs_predictions.argmax()
    best_player_name = filtered_df.iloc[best_player_index]['NAME']
    return best_player_name

# Route for the home page
@app.route('/')
def home():
    return render_template('input.html')

# Route to handle form submission for predicting best bowler
@app.route('/predict_bowler', methods=['POST'])
def predict_bowler():
    team_name = request.form['team_name']
    opposite_team_name = request.form['opposite_team_name']
    best_bowler = predict_best_bowler(team_name, opposite_team_name)
    return render_template('result.html', result=best_bowler)

# Route to handle form submission for predicting best batsman
@app.route('/predict_batsman', methods=['POST'])
def predict_batsman():
    team_name = request.form['team_name']
    opposite_team_name = request.form['opposite_team_name']
    best_batsman = predict_best_batsman(team_name, opposite_team_name)
    return render_template('result.html', result=best_batsman)

if __name__ == '__main__':
    app.run(debug=True)
