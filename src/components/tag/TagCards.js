import React from 'react';
import Pathfinder from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';
import './tag.css';

const TagCards = ({ info }) => {
  return (
    <>
      <div className='mainCon'>
        {info.map((data) => (
          <div className='tags'>
            <div key={data._id} className='tagItem'>
              <div className='tagHead'>
                <p className='tagTitle'>PIONEER GHANA CONFERENCE</p>
                <p className='districtCont'>INTER-DISTRICT YOUTH CAMP '21</p>
              </div>

              <div className='tagCont'>
                <p className='cidCont'>{data.cid}</p>
                <span className='classCon'>
                  <img
                    src={
                      data.ayclass === 'Pathfinder'
                        ? Pathfinder
                        : data.ayclass === 'Adventurer'
                        ? Ad
                        : Mg
                    }
                    alt=''
                    className='classIcon'
                  />
                </span>
              </div>
              <p className='nameCon'>{data.fname + ' ' + data.lname}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagCards;
