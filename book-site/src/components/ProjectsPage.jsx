// src/components/ProjectsPage.jsx

import React, { useState } from "react";
import clsx from "clsx";
import { FaRobot, FaBrain, FaMicrochip, FaShieldAlt, FaCogs, FaChevronDown, FaCodeBranch } from "react-icons/fa";

// --- Project Data ---
const projects = [
  { title: "Humanoid Walking Simulation", icon: <FaRobot />, description: "Program a humanoid robot to walk using RL-Motion with real-time feedback and dynamic stability control. Focuses on balancing complex, multi-degree-of-freedom systems.", skills: ["Reinforcement Learning", "Control Systems", "Actuators", "ROS", "PyBullet/Mujoco"], },
  { title: "Vision-based Object Manipulation", icon: <FaBrain />, description: "Implement advanced robot vision algorithms (CNNs) to detect, track, and precisely manipulate objects in unstructured, dynamic environments using a robotic arm.", skills: ["Computer Vision", "Deep Learning (CNNs)", "Robotics Kinematics", "Python/OpenCV", "Pytorch/Tensorflow"], },
  { title: "Speech-Controlled Assistant Robot", icon: <FaMicrochip />, description: "Develop a robust system integrating natural language processing and speech recognition to enable dynamic, voice-controlled interaction and task execution by the robot.", skills: ["Speech Recognition", "NLP", "AI Agents", "API Integration", "LLM Integration"], },
  { title: "AI Planning Task Automation", icon: <FaCogs />, description: "Enable robots to complete complex, multi-step tasks autonomously by utilizing sophisticated AI Planning (P-D-D-L) and Large Language Model (LLM) agents.", skills: ["AI Planning (P-D-D-L)", "Task Scheduling", "Reinforcement Learning", "LLM Integration", "Goal-Oriented Agents"], },
  { title: "Safety & Hazard Simulation", icon: <FaShieldAlt />, description: "Design and execute comprehensive safety simulations in a virtual environment (Gazebo/Mujoco) to rigorously test robot actions, collision avoidance, and prevent real-world hazards.", skills: ["Simulation (Gazebo/Mujoco)", "Safety Protocols", "Virtual Testing", "Risk Assessment", "Formal Verification"], },
];

// --- Custom Marquee Component (Skills Scrolling) ---
const Marquee = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills]; 
  
  return (
    <div className="skillsMarquee">
      <div className="marqueeContent">
        {duplicatedSkills.map((skill, index) => (
          <span key={index}>
            <FaCodeBranch style={{marginRight: '0.25rem'}} /> {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="projectCard">
      
      {/* Image/Video Placeholder */}
      <div className="placeholderImage">
        [Visual representation of {project.title}]
      </div>
      
      <div className="cardContent">
        {/* Header */}
        <div className="cardHeader">
          <h2>{project.title}</h2>
          <div>{project.icon}</div>
        </div>

        {/* Description Toggle */}
        <div className={clsx("descriptionToggle", open ? "descriptionVisible" : "descriptionHidden")}>
             <p>{project.description}</p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={clsx("toggleButton", open && "open")}
        >
          {open ? 'Hide Details' : 'View Details'}
          <FaChevronDown />
        </button>
      </div>

      {/* Skills Marquee at the bottom */}
      <Marquee skills={project.skills} />
    </div>
  );
};

// --- Main Projects Component ---
const ProjectsPage = () => {
  return (
    <div className="projectsGrid">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;