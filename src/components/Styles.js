import styled from 'styled-components';
import backgroundImage from '../assets/back.jpg';
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#fff',
  primaryTheme: '#006EB6',
  secondaryTheme: '#BE185D',
  light1: '#F3F4F6',
  light2: '#E5E7E8',
  dark1: '#1F2937',
  dark2: '#4B5563',
  dark3: '#9CA3AF',
  red: '#DC2626',
  gray: '#B2B2B2',
};

//StyledComponent
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
`;

//Home
export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
  cursor: pointer;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};

  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.primaryTheme};
    cursor: pointer;
  }
`;
//Button Group
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

//TextInputs
const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  //padding-left: 50px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${colors.dark1};
  background-color: ${colors.light2};
  border: 0;
  outline: 0;
  border-radius: 5px;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `border: 1px solid; border-color: ${colors.red}; color: black;`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

//Label
const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

//Form Container
const StyledFormWrapper = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 20px 55px;
  border-radius: 8px;
`;

//Form Button
const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.primaryTheme};

  border-radius: 25px;
  color: ${colors.primaryTheme};

  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.primaryTheme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
//Error Msg
const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primaryTheme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
//Icons
const StyledIcons = styled.p`
  color: ${colors.gray};
  position: absolute;
  font-size: 10px !important;
  top: 31px;
  ${(props) => props.right && `right: 15px;`};
  ${(props) => !props.right && `left: 15px;`};
`;

const CopyrightText = styled.p`
  padding: 5px;
  margin: 20px;
  text-align: center;
  color: ${colors.light2};
`;

export {
  ButtonGroup,
  StyledTextInput,
  StyledLabel,
  StyledFormWrapper,
  StyledFormButton,
  StyledIcons,
  ErrorMsg,
  ExtraText,
  TextLink,
  CopyrightText,
};
