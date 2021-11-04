import './widgetLg.css';
import Pathfinder from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiCamp } from '../../auth/store';

export default function WidgetLg() {
  const [lastJoined, setLastJoined] = useState([]);

  useEffect(() => {
    const getLastJoined = async () => {
      await axios
        .get(apiCamp + `/list?new=true`)
        .then((response) => {
          setLastJoined(response.data);
          console.log(response.data);
          console.log(response.data[0].fname);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getLastJoined();
  }, [lastJoined]);
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>New Join Members</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgLt'>
          <th className='widgetLgTh'>Full Name</th>
          <th className='widgetLgTh'>Gender</th>
          <th className='widgetLgTh'>Class</th>
          <th className='widgetLgTh'>Date</th>
        </tr>
        {lastJoined.map((data) => (
          <tr className='widgetLgLt'>
            <td className='widgetLgUser'>
              <img
                className='widgetLgImg'
                src={
                  data.ayclass === 'pathfinder'
                    ? Pathfinder
                    : data.ayclass === 'adventurer'
                    ? Ad
                    : Mg
                }
                // src={Ad}
                alt=''
              />
              <p className='widgetLgName'>{data.fname + ' ' + data.lname}</p>
            </td>
            <td className='widgetLgGender'>{data.gender}</td>
            <td className='widgetLgClass'>{data.ayclass}</td>
            <td className='widgetLgDate'>{data.createdAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
