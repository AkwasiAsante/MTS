import React, { useState } from 'react';
import styled from 'styled-components';
import { MyAvatar, StyledTitle, colors } from '../components/Styles';
import Logo from '../assets/ay.jpg';
import FormInput from '../components/formInputs/FormInput';

import { campRegister } from '../auth/actions/registerAction';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

const CampRegister = ({ campRegister }) => {
  const history = useHistory();
  const [data, setData] = useState({
    lname: '',
    fname: '',
    contact: '',
    church: '',
  });
  const [vegan, setVegan] = useState(false);
  const [district, setDistrict] = useState('Buduburam');
  const [ayclass, setAyclass] = useState('Pathfinder');
  const [gender, setGender] = useState('Male');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputs = [
    {
      id: 1,
      name: 'fname',
      type: 'text',
      placeholder: 'First Name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: 'First Name',
      pattern: '^[A-Za-z0-9]{3,20}$',
      required: true,
    },
    {
      id: 2,
      name: 'lname',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: 'Last Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'contact',
      type: 'text',
      placeholder: 'Mobile Number',
      label: 'Contact #',
    },
    {
      id: 4,
      name: 'church',
      type: 'text',
      placeholder: 'Local Church',
      errorMessage: 'Please enter local church!',
      label: 'Church',
      required: true,
    },
  ];

  const Capitalizeme = (str) => {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(' ');
  };
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    await campRegister(
      { ...data, gender, district, ayclass, vegan },
      history,
      setIsSubmitting
    );
    // setIsSubmitting(false);
  };
  return (
    <Container>
      <Formcont>
        <MyAvatar image={Logo} />
        <StyledTitle size={30} color={colors.primaryTheme}>
          Registration
        </StyledTitle>
        <p>Youth Camp 2021 @ Panfokrom NVTI</p>

        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={data[input.name]}
              onChange={onChange}
            />
          ))}
          <div>
            <label>Gender</label>
            <select
              name='gender'
              value={gender}
              onChange={(e) => {
                const selectedGender = e.target.value;
                setGender(selectedGender);
              }}
            >
              <option value='Male'>MALE</option>
              <option value='Female'>FEMALE</option>
            </select>
          </div>
          <div>
            <label>District</label>
            <select
              name='district'
              value={district}
              onChange={(e) => {
                const selectedDistrict = e.target.value;
                setDistrict(selectedDistrict);
              }}
            >
              <option value='Buduburam'>BUDUBURAM</option>
              <option value='Kasoa West'>KASOA WEST</option>
              <option value='Others'>OTHERS</option>
            </select>
          </div>
          <div>
            <label>AY Class</label>
            <select
              name='ayclass'
              value={ayclass}
              onChange={(e) => {
                const selectedAYclass = e.target.value;
                setAyclass(selectedAYclass);
              }}
            >
              <option value='Adventurer'>ADVENTURER</option>
              <option value='Pathfinder'>PATHFINDER</option>
              <option value='Senior Youth'>SENIOR YOUTH</option>
            </select>
          </div>
          <div className='dietcont'>
            <label className='diet'>Are you a vegetarian ?</label>
            <input
              type='radio'
              value='true'
              name='vegan'
              onChange={(e) => setVegan(true)}
              checked={vegan === true}
            />
            Yes
            <input
              className='radioB'
              type='radio'
              value='false'
              name='vegan'
              onChange={(e) => setVegan(false)}
              checked={vegan === false}
            />
            No
          </div>
          {/* <button onClick={handleSubmit}>Submit</button> */}
          {!isSubmitting && <button type='submit'>Submit</button>}

          {isSubmitting && (
            <Loader
              type='ThreeDots'
              color={colors.primaryTheme}
              height={49}
              width={100}
            />
          )}
        </form>
      </Formcont>
    </Container>
  );
};
const Container = styled.div``;
const Formcont = styled.div`
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  /* font-size: 20px; */

  p {
    font-size: 14px;
    margin-bottom: 15px;
    margin-top: -15px;
    font-weight: bold;
  }
  select {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 280px;

    padding: 12px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
  }
  .dietcont {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 5px;
    cursor: pointer;
    .diet {
      font-size: 16px;
      margin-right: 5px;
    }
    .radioB {
      margin-left: 10px;
    }
  }

  button {
    cursor: pointer;
    padding: 11px;
    margin: 10px 0px;
    border-radius: 8px;
    outline: 0;
    border: none;
    width: 280px;
    background-color: #006eb6;
    color: #fff;
    font-size: 16px;
    margin-top: 20px;
    transition: ease-in-out 0.3s;

    &:hover {
      border: 2px solid ${colors.primaryTheme};
      background-color: #fff;
      color: ${colors.primaryTheme};
    }
  }
`;

export default connect(null, { campRegister })(CampRegister);