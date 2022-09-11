import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillTotal = () => {

  const { bills } = useContext(BillContext);
  const moneyIntervalTransform = (cost) => {
    const monthlyCost = Number.parseFloat(cost);
    return monthlyCost;
  };

  return (
    <>
      <div className='bill-total-container'>
        Total Spending:  
        <span className='total-cost'>
          {
            '$' + bills.reduce((acc, val) => {
              return moneyIntervalTransform(val.monthlyCost) + acc
            }, 0).toFixed(2)
          }
        </span>
      </div>
    </>
  );
};

export default BillTotal;