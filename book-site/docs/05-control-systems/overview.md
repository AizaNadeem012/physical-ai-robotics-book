# 🤖 Robot Control Systems: Brain of Humanoid Robots

A **control system** is like the **brain of a robot**. It receives inputs from sensors, processes information, and sends commands to actuators to perform tasks accurately.

---

## 🧠 Types of Control Systems

| Type | Icon | Description | Example |
|------|------|------------|---------|
| **Open-Loop Control** | 🔓 | Executes commands without feedback. Simple but less accurate. | Basic motor rotation |
| **Closed-Loop Control (Feedback)** | 🔄 | Uses sensor feedback to correct motion errors. More precise. | Robotic arm positioning |
| **PID Control** | ⚙️ | A type of closed-loop control using **Proportional, Integral, Derivative** terms to minimize error. | Balancing humanoid robots |
| **Adaptive Control** | 🛠️ | Adjusts controller parameters in real-time based on changing conditions. | Walking on uneven surfaces |
| **AI-based Control** | 🤖 | Uses machine learning to optimize motion and decision-making. | Humanoid navigation & grasping |

---

## 💻 Example: PID Control Loop in Python

```python
class PIDController:
    def __init__(self, kp, ki, kd):
        self.kp = kp
        self.ki = ki
        self.kd = kd
        self.prev_error = 0
        self.integral = 0

    def compute(self, setpoint, measured_value):
        error = setpoint - measured_value
        self.integral += error
        derivative = error - self.prev_error
        self.prev_error = error
        return self.kp*error + self.ki*self.integral + self.kd*derivative

# Example usage
pid = PIDController(kp=1.2, ki=0.01, kd=0.1)
output = pid.compute(setpoint=90, measured_value=85)
print(f"Control output: {output}")
