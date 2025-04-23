from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend_app.schemas.patient import PatientData
from backend_app.model.predict import predict_diagnosis_and_severity

app = FastAPI()

# Allow frontend access (adjust if deploying)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict/")
async def predict(data: PatientData):
    result = predict_diagnosis_and_severity(data)
    return result
