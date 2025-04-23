from pydantic import BaseModel

class PatientData(BaseModel):
    symptom1: str
    symptom2: str
    symptom3: str
    heartRate: int
    bodyTemp: float
    oxygenSaturation: int
    bloodPressure: str  # Format: '120/80'
