import styled from 'styled-components';
import backgroundImage from '../assets/back.jpg';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

export const colors = {
  primary: '#fff',
  theme: '#BE185D',
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
  width: 85px;
  height: 85px;
  border-radius: 50px;
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

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.theme};
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
  width: 250px;
  padding: 15px;
  //padding-left: 50px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${colors.light2};
  border: 0;
  outline: 0;
  border-radius: 5px;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) =>
    props.invalid &&
    `background-color: ${colors.red}; color: ${colors.primary};`}

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

const StyledFormWrapper = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 45px 55px;
  border-radius: 8px;
`;

const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};

  border-radius: 25px;
  color: ${colors.theme};

  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
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

export {
  ButtonGroup,
  StyledTextInput,
  StyledLabel,
  StyledFormWrapper,
  StyledFormButton,
  StyledIcons,
};
