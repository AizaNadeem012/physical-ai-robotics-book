# ⚡ Robot Actuators: Powering Humanoid Movement

Actuators are the **muscles of a robot**. They convert energy (electric, hydraulic, or pneumatic) into **physical motion**, enabling robots to move, grasp, and interact with the world.

---

## 🧩 Types of Robot Actuators

| Type | Icon | Description | Example |
|------|------|------------|---------|
| **Electric Motors** | 🔌 | Use electricity to create rotational or linear motion. Common, precise, and easy to control. | Servo motors in robot arms |
| **Hydraulic Actuators** | 💧 | Use pressurized fluid for high-force movements. Ideal for heavy lifting. | Industrial robot arms |
| **Pneumatic Actuators** | 🌬️ | Use compressed air to generate motion. Fast and lightweight but less precise. | Grippers and jumping robots |
| **Shape Memory Alloys** | 🔥 | Metals that change shape with temperature. Used in micro-robots. | Tiny bending actuators |
| **Magnetic Actuators** | 🧲 | Use magnetic fields to create motion. Often used in vibration motors. | Haptic feedback devices |

---

## 💻 Example: Controlling a Servo Motor in Python

```python
from robot_sdk import ServoMotor

# Initialize servo
servo = ServoMotor(pin=17)

# Move servo to 0°, 90°, 180°
for angle in [0, 90, 180]:
    servo.move(angle)
    print(f"Moved to {angle}°")
