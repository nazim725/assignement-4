import React, { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';


import './NewExpense.css'

const NewExpense = (props) => {
    const [isOpenForm, setIsOpenForm] = useState(false)
    const handleSaveExpense = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.handleAddExpense(expenseData);
      };

      const handleOpenform=()=>{
        setIsOpenForm(true)
      }
      const handleCloseform=()=>{
        setIsOpenForm(false)
      }
  return (
    <div className='new-expense'>
    {!isOpenForm && <button onClick={handleOpenform}>Add New Expenses</button>}
     { isOpenForm &&<ExpenseForm handleSaveExpense={handleSaveExpense} handleCloseform={handleCloseform} setIsOpenForm={setIsOpenForm}  />}
    </div>
  );
};

export default NewExpense;