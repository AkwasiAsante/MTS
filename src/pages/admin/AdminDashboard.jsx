import React, { useEffect, useState } from 'react';
import './adminDashboard.css';
import CardInfo from '../../components/cardInfo/CardInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import Header from './Header';
import axios from 'axios';
import Chart from '../../components/chart/Chart';
import { apiCamp } from '../../auth/store';
import { Backdrop, CircularProgress } from '@material-ui/core';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [stats, setStats] = useState();
  const [adventurerStats, setAdventurerStats] = useState();
  const [pathfinderStats, setPathfinderStats] = useState();
  const [seniorStats, setSeniorStats] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [lastJoined, setLastJoined] = useState([]);
  const [buduStats, setBuduStats] = useState();
  const [kasoaStats, setKasoaStats] = useState();
  const [othersStats, setOthersStats] = useState();
  const [maleStats, setMaleStats] = useState();
  const [femaleStats, setFemaleStats] = useState();

  useEffect(() => {
    const getAgeStats = async () => {
      setIsLoading(true);
      axios
        .get(apiCamp + `/age-stats`)
        .then((response) => {
          setUserData(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getData = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/totalstat')
        .then((response) => {
          setStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getSenior = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/senior')
        .then((response) => {
          setSeniorStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getAdventurer = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/adventurer')
        .then((response) => {
          setAdventurerStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getPathfinder = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/pathfinder')
        .then((response) => {
          setPathfinderStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getLastJoined = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + `/list?new=true`)
        .then((response) => {
          setLastJoined(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getBuduburam = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/buduburam')
        .then((response) => {
          setBuduStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getKasoa = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/kasoa')
        .then((response) => {
          setKasoaStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getOthers = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/others')
        .then((response) => {
          setOthersStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getMale = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/male')
        .then((response) => {
          setMaleStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const getFemale = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + '/female')
        .then((response) => {
          setFemaleStats(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getData();
    getSenior();
    getPathfinder();
    getAdventurer();
    getAgeStats();
    getLastJoined();
    getBuduburam();
    getKasoa();
    getOthers();
    getMale();
    getFemale();
  }, []);

  return (
    <div>
      {/* <!-- header section starts  --> */}
      <Header />
    
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      {!isLoading && (
        <>
          <div className='card'>
            <CardInfo
              stats={stats}
              seniorStats={seniorStats}
              pathfinderStats={pathfinderStats}
              adventurerStats={adventurerStats}
            />
          </div>
          <Chart data={userData} title='Age Analytics' grid dataKey='total' />
          <div className='last-joined'>
            <WidgetLg lastJoined={lastJoined} />
            <WidgetSm
              buduStats={buduStats}
              kasoaStats={kasoaStats}
              othersStats={othersStats}
              maleStats={maleStats}
              femaleStats={femaleStats}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
// export default connect(null, { campStats })(AdminDashboard);
