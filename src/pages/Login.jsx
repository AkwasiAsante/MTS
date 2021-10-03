import React from 'react';
import {
  StyledFormWrapper,
  StyledFormButton,
  Avatar,
  colors,
  StyledTitle,
  ButtonGroup,
} from '../components/Styles';
import Logo from '../assets/ay.jpg';
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import { MailOutline, LockOutlined } from '@material-ui/icons';

const Login = () => {
  return (
    <div>
      <StyledFormWrapper>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={colors.theme}>
          Member Login
        </StyledTitle>
        <Formik>
          {() => (
            <Form>
              <TextInput
                name='email'
                type='text'
                label='Email Address'
                placeholder='email@example.com'
                icon={<MailOutline />}
              />
              <TextInput
                name='password'
                type='password'
                label='Password'
                placeholder='password'
                icon={<LockOutlined />}
              />

              <ButtonGroup>
                <StyledFormButton type='submit'>Login</StyledFormButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </StyledFormWrapper>
    </div>
  );
};

export default Login;
