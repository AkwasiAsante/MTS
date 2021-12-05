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
import GenderStat from '../../components/gender/GenderStat';
import Church from '../../components/church/Church';
import FinanceStats from '../../components/money/FinanceStats';
import Footer from '../../components/footer/Footer';

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
  const [churchStats, setChurchStats] = useState([]);
  const [dietStats, setDietStats] = useState([]);

  const [seniorMale, setSeniorMale] = useState([]);
  const [seniorFemale, setSeniorFemale] = useState([]);
  const [pathMale, setPathMale] = useState(0);
  const [pathFemale, setPathFemale] = useState(0);
  const [adMale, setAdMale] = useState(0);
  const [adFemale, setAdFemale] = useState(0);
  const [showDF, setShowDF] = useState(0);
  const [received, setReceived] = useState(0);
  const [payChurch, setPayChurch] = useState([]);
  const [divisions, setDivisions] = useState([]);

  const getAgeStats = async () => {
    setIsLoading(true);
    await axios
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

  const getGenderSM = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-SM')
      .then((response) => {
        setSeniorMale(response.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGenderSF = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-SF')
      .then((response) => {
        setSeniorFemale(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGenderPM = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-pM')
      .then((response) => {
        setPathMale(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getGenderPF = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-pF')
      .then((response) => {
        setPathFemale(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getGenderAM = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-aM')
      .then((response) => {
        setAdMale(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGenderAF = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-gender-aF')
      .then((response) => {
        setAdFemale(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getChurchData = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-church-based')
      .then((response) => {
        setChurchStats(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDietData = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-diet-based')
      .then((response) => {
        setDietStats(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMoneyReceived = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-pay-received')
      .then((response) => {
        setReceived(response.data[0].total);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMoneyReceivedDistrict = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-pay-received-district')
      .then((response) => {
        setPayChurch(response.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDivision = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + '/stats-division')
      .then((response) => {
        const data = response.data.sort((a, b) =>
          a.division.localeCompare(b.division)
        );
        setDivisions(data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
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
    getChurchData();
    getDietData();
    getGenderSM();
    getGenderSF();
    getGenderPM();
    getGenderPF();
    getGenderAM();
    getGenderAF();
    getMoneyReceived();
    getMoneyReceivedDistrict();
    getDivision();
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
          <div className='dashboard-con'>
            <div className='dash-button'>
              <button
                style={
                  showDF === 0
                    ? { backgroundColor: '#006eb6', color: '#fff' }
                    : {}
                }
                onClick={() => setShowDF(0)}
              >
                Dashboard
              </button>
              <button
                style={
                  showDF === 1
                    ? { backgroundColor: '#006eb6', color: '#fff' }
                    : {}
                }
                onClick={() => setShowDF(1)}
              >
                Financial Stats
              </button>
            </div>
            {showDF === 0 && (
              <div className='card'>
                <CardInfo
                  stats={stats}
                  seniorStats={seniorStats}
                  pathfinderStats={pathfinderStats}
                  adventurerStats={adventurerStats}
                />
              </div>
            )}
            {showDF === 1 && (
              <div className='finances'>
                <FinanceStats
                  totalPeople={stats}
                  received={received}
                  district={payChurch}
                />
              </div>
            )}
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

          <div className='church-stat'>
            <Church
              churchData={churchStats}
              dietData={dietStats}
              divisionData={divisions}
            />
          </div>

          <div className='gender-stat'>
            <GenderStat
              sM={seniorMale}
              sF={seniorFemale}
              pM={pathMale}
              pF={pathFemale}
              aM={adMale}
              aF={adFemale}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
