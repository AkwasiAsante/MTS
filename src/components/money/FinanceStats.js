import {
  AttachMoney,
  KeyboardArrowDown,
  MonetizationOn,
  Money,
} from '@material-ui/icons';
import React from 'react';
import './money.css';

const FinanceStats = (props) => {
  const { totalPeople, received, district } = props;
  console.log(district);
  return (
    <>
      <div className='finance'>
        <div className='financeItem'>
          <p className='financeTitle'>Total Amount</p>

          <div className='financeMoneyContainer'>
            <p className='financeMoney total'>
              GHS{' '}
              {Number(totalPeople * 50.0)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </p>

            <span className='financeMoneyRate'>
              <AttachMoney className='financeMoneyIcon' />
            </span>
          </div>
          <p className='financeSub'>Total Expected Amount</p>
        </div>
        <div className='financeItem'>
          <p className='financeTitle'>Total Amount Received</p>

          <div className='financeMoneyContainer'>
            <p className='financeMoney received'>
              GHS{' '}
              {Number(received)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </p>

            <span className='financeMoneyRate'>
              <MonetizationOn className='financeMoneyIcon' />
            </span>
          </div>
          <p className='financeSub'>Total Payment received</p>
        </div>
        <div className='financeItem'>
          <p className='financeTitle'>Balance</p>

          <div className='financeMoneyContainer'>
            <p className='financeMoney balance'>
              GHS{' '}
              {Number(totalPeople * 50.0 - received)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </p>

            <span className='financeMoneyRate'>
              <AttachMoney className='financeMoneyIcon' />
            </span>
          </div>
          <p className='financeSub'>Amount to be received</p>
        </div>
      </div>

      <div className='church-con'>
        {district.map((data) => (
          <div className='financeItem' key={data._id}>
            <span className='financeMoneyRate'>
              <p className='financeTitle'>{data.district}</p>
              <MonetizationOn className='financeMoney-Icon' />
            </span>

            <div className='financeMoneyContainer'>
              <span className='group-con'>
                <h5 className='group-t'>Total Amount</h5>
                <p className='financeMoney-dis'>
                  GHS{' '}
                  {Number(data.totalMem * 50.0)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </p>
              </span>

              <p className='con-bar'>|</p>
              <span className='group-con'>
                <h5 className='group-p'>Paid</h5>
                <p className='financeMoney-dis'>
                  GHS{' '}
                  {Number(data.total)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </p>
              </span>
            </div>
            <hr />
            <p className='balLeft'>
              Balance
              <span>
                GHS{' '}
                {Number(data.totalMem * 50.0 - data.total)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </span>
            </p>
            <p className='finance-Sub'>Amount received & balance remaining</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FinanceStats;
