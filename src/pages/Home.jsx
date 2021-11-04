import React from 'react';
import Blink from 'react-blink-text';
import {
  StyledTitle,
  StyledSubTitle,
  MyAvatar,
  StyledButton,
  ButtonGroup,
  colors,
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
      <BlinkContainer to='/campregister2021'>
        <Blink
          color='gold'
          text='Youth Camp 2021 @ Panfokrom NVTI'
          fontSize='2rem'
        >
          Youth Camp 2021 @ Panfokrom
        </Blink>
      </BlinkContainer>

      <StyledTitle size={65}>You're Welcome</StyledTitle>
      <StyledSubTitle size={27}>Buduburam District Youth</StyledSubTitle>
      <ButtonGroup>
        {/* <StyledButton to='/signup'>Sign Up</StyledButton> */}
        <StyledButton to='/campregister2021'>Register</StyledButton>
        <StyledButton to='/login'>Login</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
