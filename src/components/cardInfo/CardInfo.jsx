import './cardInfo.css';
import Logo from '../../assets/ay.jpg';
import Pathfinder from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiCamp } from '../../auth/store';

export default function CardInfo() {
  const [stats, setStats] = useState();
  const [adventurerStats, setAdventurerStats] = useState();
  const [pathfinderStats, setPathfinderStats] = useState();
  const [seniorStats, setSeniorStats] = useState();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(apiCamp + '/totalstat')
        .then((response) => {
          setStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getSenior = async () => {
      await axios
        .get(apiCamp + '/senior')
        .then((response) => {
          setSeniorStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getAdventurer = async () => {
      await axios
        .get(apiCamp + '/adventurer')
        .then((response) => {
          setAdventurerStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getPathfinder = async () => {
      await axios
        .get(apiCamp + '/pathfinder')
        .then((response) => {
          setPathfinderStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    getSenior();
    getAdventurer();
    getPathfinder();
  }, []);
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <p className='featuredTitle'>Total Membership</p>

        <div className='featuredMoneyContainer'>
          <p className='featuredMoney'>{stats}</p>
          {/* &nbsp; &rarr; */}
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
  );
}
