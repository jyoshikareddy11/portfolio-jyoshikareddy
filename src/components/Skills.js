import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaJava, 
  FaPython, 
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiAngular, 
  SiSpringboot, 
  SiMongodb, 
  SiMysql,
  SiGooglecloud,
  SiMicrosoftazure,
  SiJenkins,
  SiKubernetes,
  SiNextdotjs,
  SiJest,
  SiTestinglibrary,
  SiPrisma,
  SiExpress
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.02);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #667eea;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillItem = styled(motion.div)`
  background: rgba(102, 126, 234, 0.1);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1rem;
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaJs />,
      skills: [
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C++", icon: <FaPython /> }
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaJs /> },
        { name: "CSS3", icon: <FaJs /> },
        { name: "AngularJS", icon: <SiAngular /> },
        { name: "Bootstrap", icon: <FaJs /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaJs /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Prisma ORM", icon: <SiPrisma /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MSSQL", icon: <SiMysql /> },
        { name: "DynamoDB", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: <FaAws />,
      skills: [
        { name: "AWS (EC2, RDS, Lambda)", icon: <FaAws /> },
        { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
        { name: "Microsoft Azure", icon: <SiMicrosoftazure /> }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaGitAlt />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <FaGitAlt /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "CloudFormation", icon: <FaAws /> },
        { name: "CDK", icon: <FaAws /> }
      ]
    },
    {
      title: "Testing & Quality",
      icon: <SiJest />,
      skills: [
        { name: "Jest", icon: <SiJest /> },
        { name: "React Testing Library", icon: <SiTestinglibrary /> },
        { name: "Unit Testing", icon: <SiJest /> }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>
                {category.icon}
                {category.title}
              </CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;