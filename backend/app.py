from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

@app.route('/api/predict', methods=['POST'])
def predict():
    # Simulating fire detection with a random result
    # You can replace this with the actual YOLO model code if available
    time.sleep(2)  # Simulate delay
    has_fire = random.random() > 0.5  # Randomly simulate fire detection (50% chance)
    
    result = {
        "prediction": has_fire,
        "predictionText": "Fire detected!" if has_fire else "No fire detected."
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
