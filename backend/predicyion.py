def predict_delay(
    traffic_density: int,
    average_speed: float,
    normal_speed: float,
    peak_hour: bool,
    road_condition: str
):
    delay_score = 0

    # Traffic
    if traffic_density >= 80:
        delay_score += 40
    elif traffic_density >= 60:
        delay_score += 25
    elif traffic_density >= 40:
        delay_score += 15

    # Speed
    if average_speed < normal_speed * 0.5:
        delay_score += 30
    elif average_speed < normal_speed * 0.7:
        delay_score += 20
    elif average_speed < normal_speed * 0.85:
        delay_score += 10

    # Peak hour
    if peak_hour:
        delay_score += 15

    # Road condition
    if road_condition.lower() == "bad":
        delay_score += 15
    elif road_condition.lower() == "average":
        delay_score += 8

    # Limit score
    delay_score = min(delay_score, 100)

    # Risk
    if delay_score >= 70:
        risk = "HIGH"
    elif delay_score >= 40:
        risk = "MEDIUM"
    else:
        risk = "LOW"

    # Estimated delay
    if delay_score >= 70:
        min_delay = 18
        max_delay = 32
    elif delay_score >= 40:
        min_delay = 8
        max_delay = 18
    else:
        min_delay = 2
        max_delay = 8

    confidence = min(95, 70 + delay_score // 4)

    return {
        "risk": risk,
        "delay_score": delay_score,
        "min_delay": min_delay,
        "max_delay": max_delay,
        "confidence": confidence
    }