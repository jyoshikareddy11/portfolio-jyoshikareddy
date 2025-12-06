import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  transform: translateX(-50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 30px;
    transform: translateX(-50%);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #667eea;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #888888;
  margin-bottom: 1rem;
`;

const Achievement = styled(motion.li)`
  font-size: 0.9rem;
  color: #cccccc;
  margin-bottom: 0.5rem;
  text-align: left;
  
  &:before {
    content: '▸';
    color: #667eea;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const Experience = () => {
  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Equity Sales Finance Inc.",
      date: "May 2025 – Present",
      icon: <FaBriefcase />,
      achievements: [
        // "Designed and developed an internal financial dashboard using React, Redux, Node.js, MSSQL, and MongoDB to streamline sales and finance operations",
        // "Built and integrated RESTful APIs in Node.js to connect data between MongoDB and SQL Server, improving data synchronization and system consistency",
        // "Implemented JWT-based authentication and role-based access control (RBAC) to ensure secure user management and data protection",
        // "Enhanced API performance by optimizing SQL queries, implementing caching, and improving response times by 30%",
        // "Developed responsive, user-friendly front-end components with React and Redux, focusing on clean UI and smooth user experience",
        // "Strengthened backend reliability through input validation, error handling, and secure session management",
        // "Collaborated with cross-functional teams to test APIs, review code, and deploy updates that improved stability and maintainability"
        "Architected a financial dashboard with React, Redux, Node.js, MSSQL, and MongoDB serving sales and finance teams",
        "Built RESTful APIs integrating MongoDB and SQL Server, eliminating data silos and improving synchronization across systems",
        "Implemented JWT authentication and role-based access control (RBAC) for secure financial data management",
        "Optimized API performance by 30% through strategic query optimization, Redis caching, and database indexing",
        "Developed responsive React components with Redux state management for seamless cross-device user experience",
        "Built Next.js application with server-side rendering and API routes for enhanced performance and SEO",
        "Established comprehensive error handling, input validation, and secure session management ensuring system reliability",
        "Led code reviews and implemented CI/CD pipelines, significantly reducing production bugs and accelerating deployments"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "St. Cloud State University",
      date: "Jan 2024 – May 2025",
      icon: <FaUniversity />,
      achievements: [
        // "Assisted students in C++, Lisp, and Software Engineering coursework and projects",
        // "Developed a Payroll Management System in C++ to streamline and secure payroll processing",
        // "Created a Lisp-based syntax analysis tool to automate debugging and parsing tasks"
        "Mentored students in C++, Lisp, and Software Engineering through on-site lab sessions, providing hands-on technical support, debugging assistance, and code review feedback",
        "Developed a Payroll Management System in C++ with secure data handling and responsive frontend interface for streamlined employee record management and automated calculations",
        "Built a Lisp-based syntax analyzer automating code parsing and debugging, and evaluated student assignments ensuring code quality and adherence to best practices"
      ]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <Timeline>
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineIcon>{exp.icon}</TimelineIcon>
              <TimelineContent>
                <JobTitle>{exp.title}</JobTitle>
                <Company>{exp.company}</Company>
                <Date>{exp.date}</Date>
                <AchievementList>
                  {exp.achievements.map((achievement, idx) => (
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
                </AchievementList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;