import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/HomeOutlined';

const Footer = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <div className='box up-logo'>
        <HomeIcon onClick={() => handleScroll()} />
      </div>
      <div className='box'>
        <p>Developed By</p>
        <h3>mtech solutions</h3>
        <p>mtechsolutions2000@gmail.com</p>
      </div>
      <div className='box'>
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <form action=''>
          <input type='email' placeholder='enter your email' />
          <input type='button' className='btn' value='subscribe' />
          {/* <button type='submit' className='btn'>
            subscribe
          </button> */}
        </form>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background: aliceblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;

  .box {
    display: -ms-grid;
    display: grid;
    
    
    svg {
      color: #222;
      font-weight: bold;
      font-size: 2.5rem;
      cursor: pointer;
    }
    h3 {
      font-size: 2rem;
      color: #222;
      padding: 0.5rem 0;
    }
    input[type='email'] {
      width: 70%;
      padding: 0.8rem 1rem;
      font-size: 1rem;
      color: #222;
      margin: 1rem 0;
      text-transform: none;
      :focus {
        border: 1px solid blue;
      }
    }
    .btn {
      padding: 0.9rem 0.5rem;
      font-size: 1rem;
      color: #fff;
      background-color: #5166e0;
      font-weight: 600;
      border: none;
      text-transform: none;
      cursor: pointer;
    }
  }
`;
