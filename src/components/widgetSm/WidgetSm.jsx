import './widgetSm.css';
import {
  Person,
  FolderOpen,
  FileCopy,
  Book,
  FolderOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiCamp } from '../../auth/store';

export default function WidgetSm() {
  const [buduStats, setBuduStats] = useState();
  const [kasoaStats, setKasoaStats] = useState();
  const [othersStats, setOthersStats] = useState();
  const [maleStats, setMaleStats] = useState();
  const [femaleStats, setFemaleStats] = useState();

  useEffect(() => {
    const getBuduburam = async () => {
      await axios
        .get(apiCamp + '/buduburam')
        .then((response) => {
          setBuduStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getKasoa = async () => {
      await axios
        .get(apiCamp + '/kasoa')
        .then((response) => {
          setKasoaStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getOthers = async () => {
      await axios
        .get(apiCamp + '/others')
        .then((response) => {
          setOthersStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getMale = async () => {
      await axios
        .get(apiCamp + '/male')
        .then((response) => {
          setMaleStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getFemale = async () => {
      await axios
        .get(apiCamp + '/others')
        .then((response) => {
          setFemaleStats(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getBuduburam();
    getKasoa();
    getOthers();
    getMale();
    getFemale();
  }, []);
  return (
    <div className='widgetSm'>
      <p className='widgetSmTitle'>Statistics</p>
      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Total Male</p>
            <Person className='gen-icon' />
          </div>
          <h2>{maleStats}</h2>
        </div>

        <div className='gender'>
          <div className='genTitle'>
            <p>Total Female</p>
            <Person className='gen-icon' />
          </div>
          <h2>{femaleStats}</h2>
        </div>
      </div>

      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Districts</p>
            <FolderOpen className='gen-icon' />
          </div>
          <h2>2</h2>
        </div>
        {/* <div className='vl'></div> */}
        <div className='gender'>
          <div className='genTitle'>
            <p>Buduburam</p>
            <Book className='gen-icon' />
          </div>
          <h2>{buduStats}</h2>
        </div>
      </div>

      <div className='gender-con'>
        <div className='gender'>
          <div className='genTitle'>
            <p>Kasoa West</p>
            <FolderOutlined className='gen-icon' />
          </div>
          <h2>{kasoaStats}</h2>
        </div>
        {/* <div className='vl'></div> */}
        <div className='gender'>
          <div className='genTitle'>
            <p>Others</p>
            <FileCopy className='gen-icon' />
          </div>
          <h2>{othersStats}</h2>
        </div>
      </div>
    </div>
  );
}
