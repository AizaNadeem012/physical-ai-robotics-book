// src/components/ProjectsPage.jsx

import React, { useState } from "react";
import { FaProjectDiagram, FaRobot, FaBrain, FaMicrochip, FaShieldAlt, FaCogs, FaChevronDown, FaCodeBranch, FaRegLightbulb } from "react-icons/fa";

// --- Project Data ---
const projects = [
  {
    title: "Humanoid Walking Simulation",
    icon: <FaRobot />,
    description: "Program a humanoid robot to walk using RL-Motion with real-time feedback and dynamic stability control. Focuses on balancing complex, multi-degree-of-freedom systems.",
    skills: ["Reinforcement Learning", "Control Systems", "Actuators", "ROS", "PyBullet/Mujoco"],
  },
  {
    title: "Vision-based Object Manipulation",
    icon: <FaBrain />,
    description: "Implement advanced robot vision algorithms (CNNs) to detect, track, and precisely manipulate objects in unstructured, dynamic environments using a robotic arm.",
    skills: ["Computer Vision", "Deep Learning (CNNs)", "Robotics Kinematics", "Python/OpenCV", "Pytorch/Tensorflow"],
  },
  {
    title: "Speech-Controlled Assistant Robot",
    icon: <FaMicrochip />,
    description: "Develop a robust system integrating natural language processing and speech recognition to enable dynamic, voice-controlled interaction and task execution by the robot.",
    skills: ["Speech Recognition", "NLP", "AI Agents", "API Integration", "LLM Integration"],
  },
  {
    title: "AI Planning Task Automation",
    icon: <FaCogs />,
    description: "Enable robots to complete complex, multi-step tasks autonomously by utilizing sophisticated AI Planning (P-D-D-L) and Large Language Model (LLM) agents.",
    skills: ["AI Planning (P-D-D-L)", "Task Scheduling", "Reinforcement Learning", "LLM Integration", "Goal-Oriented Agents"],
  },
  {
    title: "Safety & Hazard Simulation",
    icon: <FaShieldAlt />,
    description: "Design and execute comprehensive safety simulations in a virtual environment (Gazebo/Mujoco) to rigorously test robot actions, collision avoidance, and prevent real-world hazards.",
    skills: ["Simulation (Gazebo/Mujoco)", "Safety Protocols", "Virtual Testing", "Risk Assessment", "Formal Verification"],
  },
];

// --- Custom Marquee Component ---
// Note: This relies on the global CSS animation 'animate-marquee' defined in src/css/custom.css
const Marquee = ({ skills }) => (
  <div className="overflow-hidden whitespace-nowrap py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
    <div className="inline-block animate-marquee">
      {skills.map((skill, index) => (
        <span key={index} className="mx-4 text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider">
          <FaCodeBranch className="inline mr-1" /> {skill}
        </span>
      ))}
      {/* Duplicate for seamless loop */}
      {skills.map((skill, index) => (
        <span key={`dup-${index}`} className="mx-4 text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider">
          <FaCodeBranch className="inline mr-1" /> {skill}
        </span>
      ))}
    </div>
  </div>
);

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border-t-4 border-blue-500 dark:border-blue-600 flex flex-col h-full">
      
      {/* Image/Video Placeholder */}
      <div className="h-48 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold text-center italic">
        [Image/Video Placeholder for {project.title}]
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight pr-4">{project.title}</h2>
          <div className="text-blue-500 dark:text-blue-400 text-5xl flex-shrink-0">{project.icon}</div>
        </div>

        {/* Description Toggle */}
        <p className={`text-gray-600 dark:text-gray-300 transition-all duration-500 ${open ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {project.description}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition duration-300 font-medium self-start"
        >
          {open ? 'Hide Details' : 'View Details'}
          <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Skills Marquee at the bottom */}
      <Marquee skills={project.skills} />
    </div>
  );
};

// --- Main Page Component (Jo index.js mein import hoga) ---
const ProjectsPage = () => {
  return (
    <div className="min-h-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

// ElegantNavbar aur Footer ko remove kar diya gaya hai kyunki yeh Docusaurus Layout se aayenge.
export default ProjectsPage;