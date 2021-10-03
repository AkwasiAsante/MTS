import { useField } from 'formik';
import {
  StyledLabel,
  StyledTextInput,
  StyledIcons,
} from '../components/Styles';

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ position: 'relative' }}>
      <StyledLabel htlm={props.name}>{props.label}</StyledLabel>
      <StyledTextInput {...field} {...props} />
      <StyledIcons>{icon}</StyledIcons>
    </div>
  );
};
