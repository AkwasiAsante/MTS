import { useState } from 'react';
import { useField } from 'formik';
import {
  StyledLabel,
  StyledTextInput,
  StyledIcons,
  ErrorMsg,
} from '../components/Styles';
import { TextInputStyled, SelectInputStyled } from '../components/TextInput';

import { Visibility, VisibilityOff } from '@material-ui/icons';

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <StyledLabel htlm={props.name}>{props.label}</StyledLabel>
      {props.type !== 'password' && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      {props.type === 'password' && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? 'text' : 'password'}
        />
      )}
      <StyledIcons>{icon}</StyledIcons>

      {props.type === 'password' && (
        <StyledIcons onClick={() => setShow(!show)} right>
          {show && <Visibility />}
          {!show && <VisibilityOff />}
        </StyledIcons>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: 'hidden' }}>.</ErrorMsg>
      )}
    </div>
  );
};
export const TextInputField = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <StyledLabel htlm={props.name}>{props.label}</StyledLabel>
      {props.type !== 'password' && (
        <TextInputStyled
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      {props.type === 'password' && (
        <TextInputStyled
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? 'text' : 'password'}
        />
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: 'hidden' }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const SelectInputField = ({ church, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <StyledLabel htlm={props.name}>{props.label}</StyledLabel>

      <SelectInputStyled
        invalid={meta.touched && meta.error}
        {...field}
        {...props}
      >
        {church.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </SelectInputStyled>

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: 'hidden' }}>.</ErrorMsg>
      )}
    </div>
  );
};
