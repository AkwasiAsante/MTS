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
} from '../components/Styles';
import Logo from '../assets/ay.jpg';
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import {
  MailOutline,
  LockOutlined,
  PersonOutlineOutlined,
  CalendarToday,
} from '@material-ui/icons';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';
//Auth & redux
import { connect } from 'react-redux';
import { signupUser } from './../auth/actions/userActions';
import { useHistory } from 'react-router-dom';

const Signup = ({ signupUser }) => {
  const history = useHistory();

  return (
    <div>
      <StyledFormWrapper>
        <MyAvatar image={Logo} />
        <StyledTitle size={30} color={colors.primaryTheme}>
          Member Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
            dateOfBirth: '',
            name: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Inalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Password is too short')
              .max(30, 'Password is too long')
              .required('Required'),
            name: Yup.string().required('Required'),
            dateOfBirth: Yup.date().required('Required'),
            repeatPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Passwords does not match !'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            signupUser(values, history, setFieldError, setSubmitting);
            // console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name='name'
                type='text'
                label='Fullname'
                placeholder='Akwasi Asante'
                icon={<PersonOutlineOutlined />}
              />
              <TextInput
                name='email'
                type='text'
                label='Email Address'
                placeholder='email@example.com'
                icon={<MailOutline />}
              />
              <TextInput
                name='dateOfBirth'
                type='date'
                label='Date of Birth'
                icon={<CalendarToday />}
              />
              <TextInput
                name='password'
                type='password'
                label='Password'
                placeholder='password'
                icon={<LockOutlined />}
              />
              <TextInput
                name='repeatPassword'
                type='password'
                label='Confirm Password'
                placeholder='Confirm password'
                icon={<LockOutlined />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type='submit'>Sign Up</StyledFormButton>
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
          Already have an account ? <TextLink to='/login'>Login</TextLink>
        </ExtraText>
      </StyledFormWrapper>

      <CopyrightText>All rights reserved &copy;2021</CopyrightText>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
