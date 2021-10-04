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
import * as Yup from 'yup';

const Login = () => {
  return (
    <div>
      <StyledFormWrapper>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={colors.colortheme}>
          Member Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validateSchema={Yup.object({
            email: Yup.string()
              .email('Inalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
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
