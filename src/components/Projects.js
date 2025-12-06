import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPython, FaEnvelope, FaUtensils, FaFileAlt, FaFilm } from 'react-icons/fa';
import { SiAngular, SiSpringboot, SiBootstrap } from 'react-icons/si';

const ProjectsSection = styled.section`
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 0.25rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
`;



const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.1rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  color: #cccccc;
  margin-bottom: 0;
  margin-top: 0;
`;

const ProjectAchievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`;

const Achievement = styled(motion.li)`
  font-size: 0.85rem;
  color: #aaaaaa;
  margin-bottom: 0.15rem;
  
  &:before {
    content: '▸';
    color: #667eea;
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      title: "Spam Detection of Emails",
      tech: ["Python", "Machine Learning", "NLP"],
      icon: <FaPython />,
      achievements: [
        "Engineered NLP-based email spam classifier achieving 95%+ accuracy",
        "Implemented TF-IDF vectorization with Multinomial Naive Bayes; solved class imbalance using SMOTE",
        "Validated model performance using precision/recall/F1 metrics and confusion matrix analysis"
      ],
      period: "Apr 2024 - May 2024"
    },
    {
      title: "Food Pantry",
      tech: ["Next.js", "Firebase", "React", "Vercel"],
      icon: <FaUtensils />,
      achievements: [
        "Developed comprehensive pantry management system with intuitive add, search, and inventory workflows",
        "Leveraged Firebase Realtime Database for instant data synchronization and crafted accessible, mobile-first interfaces",
        "Streamlined deployment pipeline on Vercel with environment-specific configurations"
      ],
      period: "2024"
    },
    {
      title: "AI Chat Support",
      tech: ["Next.js", "Tailwind CSS", "React", "Vercel"],
      icon: <FaEnvelope />,
      achievements: [
        "Designed intelligent chat interface featuring message threading and keyboard shortcuts for enhanced productivity",
        "Architected serverless API infrastructure using Next.js API routes with robust session management",
        "Crafted pixel-perfect Tailwind CSS interface; implemented secure deployment with Vercel environment variables"
      ],
      period: "2024"
    },
    {
      title: "Movie Database Management System",
      tech: ["Python", "Flask", "SQLite", "HTML/CSS"],
      icon: <FaFilm />,
      achievements: [
        "Architected Flask-based movie database with advanced search, filtering, and pagination capabilities",
        "Engineered normalized SQLite database schema with parameterized queries preventing SQL injection",
        "Implemented clean architecture with modular Python data access layer and modern, cross-device UI"
      ],
      period: "2023"
    },
    {
      title: "Food Application",
      tech: ["AngularJS", "Spring Boot", "Bootstrap", "SQL"],
      icon: <SiAngular />,
      achievements: [
        "Delivered enterprise food ordering platform with role-based manager and staff dashboards",
        "Constructed scalable Spring Boot microservices enabling seamless frontend-backend communication",
        "Performance-tuned database layer through query optimization and efficient stored procedure implementation"
      ],
      period: "Sep 2023"
    },
    {
      title: "Crime Report Management System",
      tech: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
      icon: <FaFileAlt />,
      achievements: [
        "Created comprehensive crime reporting platform enabling citizens to submit and track case reports online",
        "Developed adaptive frontend architecture ensuring seamless experience across all device types",
        "Implemented secure Java servlet backend with relational database persistence and granular access controls"
      ],
      period: "Jun 2022"
    }
  ];

  const getTechIcon = (tech) => {
    const techIcons = {
      "Python": <FaPython />,
      "Machine Learning": <FaPython />,
      "NLP": <FaEnvelope />,
      "AngularJS": <SiAngular />,
      "Spring Boot": <SiSpringboot />,
      "Bootstrap": <SiBootstrap />,
      "SQL": <FaFileAlt />,
      "Java": <FaFileAlt />,
      "HTML": <FaFileAlt />,
      "CSS": <FaFileAlt />,
      "JavaScript": <FaFileAlt />
    };
    return techIcons[tech] || <FaFileAlt />;
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectHeader>
              
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectDescription>
                <strong>{project.period}</strong>
              </ProjectDescription>
              
              <ProjectAchievements>
                {project.achievements.map((achievement, idx) => (
                  <Achievement
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {achievement}
                  </Achievement>
                ))}
              </ProjectAchievements>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
