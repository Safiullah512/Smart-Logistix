from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from prediction import predict_delay


app = FastAPI(
    title="SmartLogix AI Prediction API"
)


# ------------------------------------------------
# CORS
# ------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ------------------------------------------------
# Request Model
# ------------------------------------------------

class PredictionRequest(BaseModel):

    traffic_density: int
    average_speed: float
    normal_speed: float
    peak_hour: bool
    road_condition: str


# ------------------------------------------------
# Health Check
# ------------------------------------------------

@app.get("/")
def home():

    return {
        "message": "SmartLogix AI Backend is running"
    }


# ------------------------------------------------
# AI Prediction
# ------------------------------------------------

@app.post("/api/ai/predict")
def ai_prediction(data: PredictionRequest):

    result = predict_delay(
        traffic_density=data.traffic_density,
        average_speed=data.average_speed,
        normal_speed=data.normal_speed,
        peak_hour=data.peak_hour,
        road_condition=data.road_condition
    )

    return {
        "success": True,

        "prediction": result,

        "summary": {
            "deliveries_at_risk": 5,
            "main_route": "Delhi → Gurugram",
            "traffic": "High",
            "recommendation": (
                "Consider an alternate route via NH-48 "
                "to reduce expected delay."
            )
        }
    }