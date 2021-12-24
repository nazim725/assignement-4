import React from 'react';

const ExpenseItem = (props) => {
    const {id,title,amount ,date}=props.expense
    return (
        <div className='expense-item'>
            <div className='expense-item__description'>
                <div className='expense-date'> 
                    {date.toLocaleDateString('en-US',{month:'long'})} <br />
                    {date.toLocaleDateString('en-US',{day:'2-digit'})} <br />
                    {date.getFullYear()}

                </div>

               <h2>{title}</h2>
            </div>

                <div className='expense-item__price'>
                    $ {amount}
                </div>
            
        </div>
    );
};

export default ExpenseItem;