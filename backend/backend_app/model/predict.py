import joblib
import numpy as np
from backend_app.data.medicine_mapping import medicine_info

# Load the trained model once
import os
# Load model and scaler
model_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'svm_diagnosis_model.pkl')
scaler_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'scaler_svm.pkl')

model = joblib.load(model_path)
scaler = joblib.load(scaler_path)


diagnosis_labels = {
    0: "Bronchitis",
    1: "Common Cold",
    2: "Flu",
    3: "Pneumonia",
    4: "Viral Fever"
}

severity_labels = {
    0: "Mild",
    1: "Moderate",
    2: "Severe"
}

all_symptoms = [
    'Fatigue',
    'Sore throat',
    'Fever',
    'Cough',
    'Body ache',
    'Shortness of breath',
    'Headache',
    'Runny nose'
]

def predict_diagnosis_and_severity(data):
    # Encode symptoms
    symptom_vector = [0] * len(all_symptoms)
    for sym in [data.symptom1, data.symptom2, data.symptom3]:
        if sym in all_symptoms:
            index = all_symptoms.index(sym)
            symptom_vector[index] = 1

    # Parse BP
    try:
        systolic, diastolic = map(int, data.bloodPressure.strip().split('/'))
    except ValueError:
        return {"error": "Invalid blood pressure format. Use '120/80' format."}

    # Feature vector
    features = [
        data.heartRate,
        data.bodyTemp,
        data.oxygenSaturation,
        systolic,
        diastolic
    ] + symptom_vector 

    scaled = scaler.transform([features])
    prediction = model.predict(scaled)

    diagnosis_idx, severity_idx = prediction[0]
    diagnosis = diagnosis_labels.get(diagnosis_idx, "Unknown")
    severity = severity_labels.get(severity_idx, "Unknown")
    medicine = medicine_info.get(diagnosis, "N/A")

    return {
        "diagnosis": diagnosis,
        "severity": severity,
        "medicine": medicine
    }
