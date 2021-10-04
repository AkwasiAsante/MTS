import { useState } from 'react';
import { useField } from 'formik';
import {
  StyledLabel,
  StyledTextInput,
  StyledIcons,
  ErrorMsg,
} from '../components/Styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <StyledLabel htlm={props.name}>{props.label}</StyledLabel>
      {props.type !== 'password' && <StyledTextInput {...field} {...props} />}

      {props.type === 'password' && (
        <StyledTextInput
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
