import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  display: block;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: auto;
  filter: contrast(1.1) brightness(1.05) saturate(1.1);
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (max-width: 768px) {
    max-width: 250px;
    height: 300px;
  }
`;

const AboutText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cccccc;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #667eea;
  font-weight: 600;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <ProfileImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfileImage
              src={`${process.env.PUBLIC_URL || ''}/profile-photo.jpeg`}
              alt="Jyoshika Reddy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              loading="eager"
              decoding="async"
            />
          </ProfileImageContainer>
          <AboutText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              With a strong foundation in computer science and hands-on experience building enterprise applications, I transform complex business requirements into elegant technical solutions. My work at Equity Sales Finance Inc. has given me deep expertise in financial technology, security-first development, and high-stakes system architecture.
            </p>
            <p>
              I thrive on tackling challenging problems—whether it's architecting dual-database systems, optimizing APIs to handle thousands of concurrent users, or implementing bulletproof security measures for sensitive financial data. My approach is always data-driven, focusing on measurable outcomes and continuous improvement.
            </p>
            <p>
              Beyond coding, I'm passionate about <Highlight>mentoring and knowledge sharing</Highlight>. During my time as a Graduate Assistant, I helped students master complex concepts in C++, Software Engineering, and Lisp, which reinforced my belief that great engineering is about both building solutions and elevating the team around you.
            </p>
            <p>
              I'm actively seeking opportunities to join innovative teams where I can leverage my full-stack expertise, contribute to meaningful projects, and continue pushing the boundaries of what's possible in web development. Let's build something extraordinary together.
            </p>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;