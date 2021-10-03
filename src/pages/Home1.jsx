import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Bg from '../assets/bg.jpg';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-color: #000000;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <BackImage src={Bg} alt='' />
      </Container>
    </div>
  );
};

export default Home;
