import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import {
  StyledTitle,
  StyledSubTitle,
  MyAvatar,
  StyledButton,
  ButtonGroup,
} from '../components/Styles';
import Logo from './../assets/Logo.png';
import './home.css';

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: [
        'Venue: Panfokrom NVTI',
        'Date: 19th - 26th Dec.',
        'Rate: GHC 50.00 Only',
        `Register Now `,
      ],
    });
  }, []);
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
      <div className='blink-con'>
        <h2>Youth Camp 2021 -</h2>
        <p ref={textRef}></p>
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
