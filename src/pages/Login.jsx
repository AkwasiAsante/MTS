import React from 'react';
import {
  StyledFormWrapper,
  StyledFormButton,
  MyAvatar,
  colors,
  StyledTitle,
  ButtonGroup,
  TextLink,
  ExtraText,
  CopyrightText,
  StyledContainer,
} from '../components/Styles';
import Logo from '../assets/ay.jpg';
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import { MailOutline, LockOutlined } from '@material-ui/icons';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
//Auth & redux
import { connect } from 'react-redux';
import { loginUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Login = ({ loginUser }) => {
  const history = useHistory();

  return (
    <div>
      <StyledFormWrapper>
        <MyAvatar image={Logo} />
        <StyledTitle size={30} color={colors.primaryTheme}>
          Member Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Inalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            loginUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
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
                {!isSubmitting && (
                  <StyledFormButton type='submit'>Login</StyledFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type='ThreeDots'
                    color={colors.primaryTheme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText size={14}>
          New here ? <TextLink to='/signup'>Sign up</TextLink>
        </ExtraText>
      </StyledFormWrapper>

      <CopyrightText>All rights reserved &copy;2021</CopyrightText>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
