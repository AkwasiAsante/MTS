import { Backdrop, Button, CircularProgress } from '@material-ui/core';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiCamp } from '../../auth/store';
import Header from '../../pages/admin/Header';
import './tag.css';
import TagCards from './TagCards';

const Tags = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + `/list`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='tag-con'>
      {isLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: 1000 }} open>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      {!isLoading && (
        <>
          <Header />
          <div className='tagCon'>&nbsp;</div>
          <div className='downloadCon'>
            <Button startIcon={<ArrowDownIcon />}>Download Tags</Button>
          </div>
          <TagCards info={data} />;
        </>
      )}
    </div>
  );
};

export default Tags;
