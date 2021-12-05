import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { colors } from '../components/Styles';
import FormInput from '../components/formInputs/FormInput';

import MessageDialog from './controls/MessageDialog';
import axios from 'axios';
import { apiCamp } from '../auth/store';

const EditRegister = (props) => {
  const { dataForEdit } = props;

  const [data, setData] = useState({
    _id: '',
    lname: '',
    fname: '',
    contact: '',
    church: '',
    amnt: '',
    division: '',
    unit: '',
  });
  const [vegan, setVegan] = useState(false);
  const [district, setDistrict] = useState('Buduburam');
  const [ayclass, setAyclass] = useState('Pathfinder');
  const [gender, setGender] = useState('Male');
  const [agerange, setAgerange] = useState('4 - 6yrs');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageDialog, setMessageDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    setIsSubmitting(true);
    setSuccess(false);
    e.preventDefault();

    const { _id } = dataForEdit;

    const values = { ...data, gender, vegan, district, ayclass, agerange };

    await axios
      .put(apiCamp + '/update/' + _id, values)
      .then((response) => {
        const { status } = response.data;

        if (status === 'SUCCESS') {
          setMessageDialog({
            isOpen: true,
            title: 'Success Message !!',
            subTitle: 'Record has been updated successfully',
          });

          setIsSubmitting(false);
          //dataForEdit = '';
        } else {
          setMessageDialog({
            isOpen: true,
            title: 'Error Message !!',
            subTitle: 'Error occured while updating information!',
          });
          setIsSubmitting(false);
        }
        window.parent.location = window.parent.location.href;
        //window.location.href = 'www.google.com';
      })
      .catch((err) => {
        console.error(err);
        setIsSubmitting(false);
        setSuccess(false);
      });
  };

  useEffect(() => {
    if (dataForEdit != null)
      setData({
        ...data,
        ...dataForEdit,
      });
    setVegan(dataForEdit.vegan);
    setGender(dataForEdit.gender);
    setDistrict(dataForEdit.district);
    setAyclass(dataForEdit.ayclass);
    setAgerange(dataForEdit.agerange);
  }, [dataForEdit]);

  return (
    <>
      <Container>
        <Formcont>
          <form onSubmit={handleUpdate}>
            <div className='group-con'>
              <FormInput
                name='fname'
                type='text'
                placeholder='First Name'
                errorMessage="Name should be 3-32 characters and shouldn't include any special character!"
                label='First Name'
                maxLength='32'
                pattern='^[A-Za-z0-9 ]{3,32}$'
                required
                value={data.fname}
                onChange={onChange}
              />
              <FormInput
                name='lname'
                type='text'
                placeholder='Other Name(s)'
                errorMessage="Name should be 3-32 characters and shouldn't include any special character!"
                label='Other Name(s)'
                maxLength='32'
                pattern='^[A-Za-z0-9 ]{3,32}$'
                required
                value={data.lname}
                onChange={onChange}
              />
            </div>
            <div className='group-con'>
              <FormInput
                name='contact'
                type='number'
                placeholder='Mobile Number'
                errorMessage='Mobile Number must be 10 digits!'
                label='Contact #'
                maxLength='12'
                minLength='10'
                value={data.contact}
                onChange={onChange}
                // style={{ width: '140px' }}
              />

              <FormInput
                name='church'
                type='text'
                placeholder='Local Church'
                errorMessage='Please enter local church!'
                label='Church'
                required
                value={data.church}
                onChange={onChange}
              />
            </div>
            <div className='group-con'>
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
            </div>
            <div className='group-con'>
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
              <div>
                <label>Age Range</label>
                <select
                  name='agerange'
                  value={agerange}
                  onChange={(e) => {
                    const selectedAge = e.target.value;
                    setAgerange(selectedAge);
                  }}
                >
                  <option value='4 - 6Yrs'>4 - 6Yrs</option>
                  <option value='7 - 9Yrs'>7 - 9Yrs</option>
                  <option value='10 - 14Yrs'>10 - 14Yrs</option>
                  <option value='15 - 17Yrs'>15 - 17Yrs</option>
                  <option value='18Yrs & Above'>18Yrs & Above</option>
                </select>
              </div>
            </div>
            <div className='group-con'>
              <FormInput
                name='division'
                type='text'
                placeholder='Division'
                errorMessage='Please check name of division!'
                label='Division Name'
                maxLength='32'
                // required
                value={data.division}
                onChange={onChange}
              />
              <FormInput
                name='unit'
                type='text'
                placeholder='Unit Name'
                errorMessage='Please check name of unit!'
                label='Unit Name'
                maxLength='32'
                // required
                value={data.unit}
                onChange={onChange}
              />
            </div>
            <div className='group-con'>
              <FormInput
                name='amnt'
                type='number'
                placeholder='Amount Paid'
                errorMessage='Please check name of unit!'
                label='Amount Paid'
                maxLength='32'
                // required
                value={data.amnt}
                onChange={onChange}
                style={{
                  width: '200px',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              />

              <div className='dietcont'>
                <label className='diet'>Is vegetarian ?</label>
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
            </div>
            <div className='btn-con'>
              {!isSubmitting && <button type='submit'>Update</button>}

              {isSubmitting && (
                <Loader
                  className='loader'
                  type='ThreeDots'
                  color={colors.primaryTheme}
                  height={49}
                  width={100}
                />
              )}
            </div>
          </form>
        </Formcont>
      </Container>
      <MessageDialog
        messageDialog={messageDialog}
        setMessageDialog={setMessageDialog}
        formType={2}
      />
    </>
  );
};

export default EditRegister;

const Container = styled.div``;
const Formcont = styled.div`
  background-color: white;
  border-radius: 10px;
  .group-con {
    display: flex;
    flex-direction: row;

    div {
      margin-right: 10px;
      margin-left: 5px;
    }
  }

  p {
    font-size: 14px;
  }
  select {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 200px;
    font-size: 14px;
    padding: 12px;
    margin: 10px 0px;
    margin-right: 70px;
    border-radius: 5px;
    border: 1px solid gray;

    option {
      padding: 20px;
    }
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
  .btn-con {
    display: flex;
    align-content: center;
    justify-content: center;

    button {
      align-content: center;

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
  }

  .loader {
    text-align: center;
  }

  @media (max-width: 786px) {
    .group-con {
      display: flex;
      flex-direction: column;
    }
    div {
      margin-right: 0px;
      margin-left: 0px;
    }

    select {
      width: 280px;
    }
  }
`;
