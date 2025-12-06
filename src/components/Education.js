import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const EducationSection = styled.section`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const UniversityIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const UniversityName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: #cccccc;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #888888;
  margin-bottom: 0.5rem;
`;

const GPA = styled.p`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
`;

const Achievements = styled.div`
  margin-top: 1rem;
`;

const Achievement = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: '•';
    color: #667eea;
    font-weight: bold;
  }
`;

const Education = () => {
  const educationData = [
    {
      university: "St Cloud State University",
      location: "St Cloud, MN",
      degree: "Master of Science in Computer Science",
      date: "May 2025",
      gpa: "3.81/4 GPA",
      achievements: [
        "Computer Science Club – Club Member",
        "Relevant Coursework: Deep Learning, Data Structures & Algorithms",
        "Database Theory and Design, Software Engineering, NLP"
      ]
    },
    {
      university: "Sri Indu College of Engineering & Technology",
      location: "Telangana, India",
      degree: "Bachelor of Technology in Computer Science",
      date: "Aug 2019 – Jul 2023",
      gpa: "3.49/4 GPA",
      achievements: [
        "Open-Source Lab - Secretary",
        "Relevant Coursework: Object-Oriented Programming",
        "Java Programming, C++, Artificial Intelligence"
      ]
    }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        <EducationGrid>
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EducationHeader>
                <UniversityIcon>
                  {index === 0 ? <FaUniversity /> : <FaGraduationCap />}
                </UniversityIcon>
                <EducationInfo>
                  <UniversityName>{edu.university}</UniversityName>
                  <Degree>{edu.degree}</Degree>
                  <Date>{edu.location} • {edu.date}</Date>
                  <GPA>{edu.gpa}</GPA>
                </EducationInfo>
              </EducationHeader>
              <Achievements>
                {edu.achievements.map((achievement, idx) => (
                  <Achievement key={idx}>{achievement}</Achievement>
                ))}
              </Achievements>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </EducationSection>
  );
};

export default Education;