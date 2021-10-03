import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/ay.jpg';
import Box from '@material-ui/core/Box';

const Container = styled.div`
  height: 60px;
  background-color: red;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.img`
  height: 36px;
  width: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #061d73;
  margin-left: 5px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Wrapper>
          <Left>
            <ImgContainer src={Logo} alt='' />
            <Title>AY MINISTRY</Title>
          </Left>

          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Login</MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Navbar;
