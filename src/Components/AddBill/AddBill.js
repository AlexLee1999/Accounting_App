import React, { useContext, useState } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const AddBill = () => {

  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');
  const [newBillType, setNewBillType] = useState('');
  const [newBillDate, setNewBillDate] = useState('');

  const { updateBills } = useContext(BillContext);

  const billObjectValid = () => {
    const costValid = newBillCost && Number.parseFloat(newBillCost);
    const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ');
    const typeValid = newBillType && newBillType.split('').find(char => char !== ' ');
    if (!titleValid) {
      alert("Please input a valid title");
    }
    if (!costValid) {
      alert("Please input a valid cost");
    }
    if (!typeValid) {
      alert("Please input a valid type");
    }
    return titleValid && costValid && typeValid;
  };


  const clearForm = () => {
    setNewBillCost('');
    setNewBillTitle('');
    setNewBillType('');
    setNewBillDate('');
  };

  return (
    <div className='add-bill-container'>
      <input className='add-bill-form-control form-control'
        placeholder='Enter Title'
        type='text'
        value={newBillTitle}
        onChange={(e) => setNewBillTitle(e.target.value)}></input>
      <input className='add-bill-form-control form-control'
        placeholder='Enter Cost'
        type='number'
        value={newBillCost}
        onChange={(e) => setNewBillCost(e.target.value)}></input>
      <input className='add-bill-form-control form-control'
        placeholder='Enter Type'
        type='text'
        value={newBillType}
        onChange={(e) => setNewBillType(e.target.value)}></input>
        <input className='add-bill-form-control form-control'
        placeholder='Enter Date'
        type='date'
        value={newBillDate}
        onChange={(e) => setNewBillDate(e.target.value)}></input>
      <button className='add-bill-form-control btn btn-primary'
        onClick={() => {
          if(billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              type: newBillTitle,
              date: newBillDate,
              enabled: true
            });
            clearForm();
          }
        }}>Add Bill</button>
    </div>
  );
};

export default AddBill;