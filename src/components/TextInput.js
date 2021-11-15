import styled from 'styled-components';
import { colors } from './Styles';

const TextInputStyled = styled.input`
  width: ${(props) => props.width}px;
  height: 40px;
  padding: 10px;

  font-size: 14px;
  background-color: ${colors.light2};
  color: ${colors.dark1};
  outline: 0;

  justify-content: center;
  border: 1px solid;
  border-radius: 5px;
  margin: 5px auto 10px auto;
  transition: 0.3s ease-in-out;
  letter-spacing: 1px;

  ${(props) =>
    props.invalid &&
    `border: 1px solid; border-color: ${colors.red}; color: black;`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;
//Icons
const StyledInputIcons = styled.p`
  color: ${colors.gray};
  position: absolute;
  font-size: small !important;
  top: 27px;
  width: 30px;
  height: 30px;
  ${(props) => props.right && `right: 2px;`};
  ${(props) => !props.right && `left: 2px;`};
`;

const StyledWrapperShadow = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 20px;
  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  div {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const SelectInputStyled = styled.select`
  width: ${(props) => props.width}px;
  height: 40px;
  padding: 10px;

  font-size: 14px;
  background-color: ${colors.light2};
  color: ${colors.dark1};
  outline: 0;

  border: 1px solid;
  border-radius: 5px;
  margin: 5px auto 10px auto;
  transition: 0.3s ease-in-out;
  letter-spacing: 1px;

  ${(props) =>
    props.invalid &&
    `border: 1px solid; border-color: ${colors.red}; color: black;`}

  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export {
  TextInputStyled,
  StyledInputIcons,
  StyledWrapperShadow,
  SelectInputStyled,
};
