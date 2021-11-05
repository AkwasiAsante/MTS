import React from 'react';
import {
  StyledTitle,
  StyledSubTitle,
  MyAvatar,
  StyledButton,
  ButtonGroup,
  BlinkContainer,
} from '../components/Styles';
import Logo from './../assets/Logo.png';

const Home = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'transparent',
          width: '100%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <MyAvatar image={Logo} />
      </div>
      <StyledTitle size={65}>You're Welcome</StyledTitle>

      <StyledSubTitle size={27}>Buduburam District Youth</StyledSubTitle>
      <ButtonGroup>
        <StyledButton to='/campregister2021'>Register</StyledButton>
        <StyledButton to='/login'>Login</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
