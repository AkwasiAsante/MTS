import React from 'react';
import { MyAvatar, StyledTitle, colors } from './../components/Styles';

import Logo from '../assets/ay.jpg';
import { Form, Formik } from 'formik';
import { TextInputField, SelectInputField } from '../components/FormLib';
import {
  ButtonGroup,
  StyledFormButton,
  StyledLabel,
} from '../components/Styles';
import {
  StyledWrapperShadow,
  SelectInputStyled,
} from '../components/TextInput';
import { Churches, AYClass, Gender } from '../components/data';

const Profile = () => {
  return (
    <div>
      <StyledWrapperShadow>
        <MyAvatar image={Logo} />
        <StyledTitle size={30} color={colors.primaryTheme}>
          Personal Profile
        </StyledTitle>
        <Formik>
          <Form>
            <div>
              <TextInputField
                style={{ marginRight: '15px' }}
                width={280}
                name='fname'
                type='text'
                label='First Name'
                placeholder='Enter first name'
              />
              <TextInputField
                width={280}
                name='lname'
                type='text'
                label='Last Name'
                placeholder='Enter last name'
              />
            </div>
            <div>
              <div
                style={{
                  position: 'relative',
                  display: 'block',
                }}
              >
                <StyledLabel>Gender</StyledLabel>
                <SelectInputStyled width={280}>
                  {Gender.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </SelectInputStyled>
              </div>
              <TextInputField
                width={280}
                name='contact'
                type='text'
                label='Phone Number'
                placeholder='Enter phone number'
              />
            </div>
            <div>
              <TextInputField
                style={{ marginRight: '15px' }}
                width={280}
                name='email'
                type='text'
                label='Gender'
              />
              <TextInputField
                width={280}
                name='contact'
                type='text'
                label='Email Address'
                placeholder='Enter email address'
              />
            </div>
            <div>
              <div style={{ position: 'relative', display: 'block' }}>
                <StyledLabel>Church</StyledLabel>
                <SelectInputStyled width={280}>
                  {Churches.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </SelectInputStyled>
              </div>
              <TextInputField
                width={280}
                name='ayclass'
                type='text'
                label='AY Class'
              />
            </div>
            <div>
              <TextInputField
                // style={{ marginRight: '15px' }}
                width={595}
                name='churhpos'
                type='text'
                label='Position in Church'
                placeholder='Enter position in church'
              />
            </div>
            <div>
              <TextInputField
                style={{ marginRight: '15px' }}
                width={280}
                name='email'
                type='text'
                label='Gender'
              />
              <TextInputField
                width={280}
                name='contact'
                type='text'
                label='Email Address'
                placeholder='Enter email address'
              />
            </div>
            <div>
              <TextInputField
                style={{ marginRight: '15px' }}
                width={280}
                name='email'
                type='text'
                label='Gender'
              />
              <TextInputField
                width={280}
                name='contact'
                type='text'
                label='Email Address'
                placeholder='Enter email address'
              />
            </div>
            <div>
              <TextInputField
                style={{ marginRight: '15px' }}
                width={280}
                name='email'
                type='text'
                label='Gender'
              />
              <TextInputField
                width={280}
                name='contact'
                type='text'
                label='Email Address'
                placeholder='Enter email address'
              />
            </div>

            <ButtonGroup>
              <StyledFormButton type='submit'>Save Profile</StyledFormButton>
            </ButtonGroup>
          </Form>
        </Formik>
      </StyledWrapperShadow>
    </div>
  );
};

export default Profile;
