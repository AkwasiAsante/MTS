import './cardInfo.css';
import Logo from '../../assets/ay.jpg';
import Pathfinder from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiCamp } from '../../auth/store';
import { Backdrop, CircularProgress } from '@material-ui/core';

export default function CardInfo({
  stats,
  seniorStats,
  pathfinderStats,
  adventurerStats,
}) {
  return (
    <>
      <div className='featured'>
        <div className='featuredItem'>
          <p className='featuredTitle'>Total Membership</p>

          <div className='featuredMoneyContainer'>
            <p className='featuredMoney'>{stats}</p>

            <span className='featuredMoneyRate'>
              <img src={Logo} alt='' className='featuredIcon' />
            </span>
          </div>
          <p className='featuredSub'>Number of Campers</p>
        </div>
        <div className='featuredItem'>
          <p className='featuredTitle'>Total Number of Senior Youth</p>

          <div className='featuredMoneyContainer'>
            <p className='featuredMoney'>{seniorStats}</p>
            <span className='featuredMoneyRate'>
              <img src={Mg} alt='' className='featuredIcon' />
            </span>
          </div>
          <p className='featuredSub'>Ambassadors, Young Adults</p>
        </div>
        <div className='featuredItem'>
          <p className='featuredTitle'>Total Number of Pathfinders</p>

          <div className='featuredMoneyContainer'>
            <p className='featuredMoney'>{pathfinderStats}</p>
            <span className='featuredMoneyRate'>
              <img src={Pathfinder} alt='' className='featuredIcon' />
            </span>
          </div>
          <p className='featuredSub'>Includes All Pathfinder Classes</p>
        </div>
        <div className='featuredItem'>
          <p className='featuredTitle'>Total Number of Adventurers</p>

          <div className='featuredMoneyContainer'>
            <p className='featuredMoney'>{adventurerStats}</p>
            <span className='featuredMoneyRate'>
              <img src={Ad} alt='' className='featuredIcon' />
            </span>
          </div>
          <p className='featuredSub'>Includes All Adventurer Classes</p>
        </div>
      </div>
    </>
  );
}
