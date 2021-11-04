import React from 'react';

import './adminDashboard.css';
import CardInfo from '../../components/cardInfo/CardInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import Header from './Header';

const AdminDashboard = () => {
  return (
    <div>
      {/* <!-- header section starts  --> */}
      <Header />

      <div className='card'>
        <CardInfo />
      </div>
      <div className='last-joined'>
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
};

export default AdminDashboard;
// export default connect(null, { campStats })(AdminDashboard);
