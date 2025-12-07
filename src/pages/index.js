// src/pages/index.js
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { FaRobot, FaBrain, FaProjectDiagram, FaShieldAlt, FaChevronRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// IMPORTS FOR YOUR CUSTOM COMPONENTS 
import ProjectsPage from "../components/ProjectsPage";

// --- Features Data ---
// Icons ko Docusaurus ke variables ya plain CSS colors se style kiya gaya hai
const features = [
  { icon: <FaRobot style={{ fontSize: '2.5rem', color: '#3b82f6' }} />, title: "Humanoid Robotics", description: "Learn how humanoid robots mimic human motion and actions.", link: "/docs/category/humanoid-robotics" },
  { icon: <FaBrain style={{ fontSize: '2.5rem', color: '#10b981' }} />, title: "Physical AI", description: "Integrate AI with physical systems to solve real-world problems.", link: "/docs/category/physical-ai" },
  { icon: <FaShieldAlt style={{ fontSize: '2.5rem', color: '#ef4444' }} />, title: "Safety Protocols", description: "Understand how to test and implement safe robot behavior.", link: "/docs/category/safety-protocols" },
  { icon: <FaProjectDiagram style={{ fontSize: '2.5rem', color: '#a855f7' }} />, title: "Hands-on Projects", description: "Interactive projects to practice AI, sensors, actuators, and planning.", link: "/#projects" },
];

// --- Homepage Header Component ---
function ElegantHomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero elegantHeader")}>
      <div className="container relative z-10 text-center">
        <Heading as="h1" className="heroTitle animate-fade-in-up">
          {siteConfig.title}
        </Heading>
        <p className="heroSubtitle animate-fade-in-up delay-200">
          {siteConfig.tagline}
        </p>
        <div className="headerButtons animate-fade-in-up delay-400">
          <Link
            className="button primaryButton"
            to="/docs/intro"
          >
            Start Reading Book <FaChevronRight style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link
            className="button secondaryButton"
            to="/#projects"
          >
            Explore Projects <FaProjectDiagram style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </div>
      <div className="bg-dots"></div>
    </header>
  );
}

// --- Main Home Page Component ---
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Explore the world of Physical AI, Humanoid Robotics, and intelligent control systems. Dive into comprehensive tutorials and hands-on projects."
    >
      <ElegantHomepageHeader />

      <main className="mainContainer">
        {/* About Section */}
        <section id="about" className="text-center aboutSection" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
          <Heading as="h2">
            About This Project Lab
          </Heading>
          <p>
            Welcome to the Physical AI Control Systems Project Lab. Here, we bridge the gap between theoretical AI concepts and real-world robotic applications. Whether you're a student, researcher, or enthusiast, you'll find comprehensive guides and practical challenges to deepen your understanding of humanoid robotics, AI planning, computer vision, and robust control systems.
          </p>
        </section>

        {/* Core Concepts (Markdown Section) */}
        {/* CRASH FIX: className prop removed from ReactMarkdown */}
        <section className="coreConcepts" style={{ marginBottom: '6rem' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {`
## Core Concepts & Learning Paths
            
Our learning paths are designed to take you from foundational knowledge to advanced implementation. We cover:
            
* **Reinforcement Learning for Motion Control:** Train robots to learn complex movements.
* **Vision-based Interaction:** Enable robots to perceive and interact with their environment.
* **Natural Language Processing for Commands:** Develop speech-controlled robotic assistants.
* **AI Planning & Task Automation:** Teach robots to autonomously plan and execute multi-step tasks.
* **Robust Safety & Simulation:** Ensure reliable and safe operation in physical environments.
            
Each topic is supported by in-depth tutorials and hands-on coding exercises.
            `}
          </ReactMarkdown>
        </section>

        {/* Features Grid */}
        <section className="featuresGrid">
          {features.map((feature, idx) => (
            <Link
              to={feature.link}
              key={idx}
              className="featureCard no-underline"
            >
              <div style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </section>

        {/* Projects Section Integration */}
        <section id="projects" className="projectsSection">
          <div className="container mx-auto px-6">
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaProjectDiagram />
              Our Latest Robotics Projects
            </h2>
            <ProjectsPage />
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section className="finalCta" style={{ marginBottom: '4rem' }}>
          <h2>
            Ready to Innovate?
          </h2>
          <p>
            Join our community, contribute to open-source projects, and help shape the future of physical AI.
          </p>
          <div className="ctaButtons">
            <Link
              to="https://github.com/YourAIOrg/AI-Control-Systems-Book"
              className="button"
            >
              <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i> Join on GitHub
            </Link>
            <Link
              to="/docs/intro"
              className="button outline"
            >
              Start Learning Now <FaChevronRight style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}