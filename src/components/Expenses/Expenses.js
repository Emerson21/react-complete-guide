import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

export default function Expenses(props) {
  
  const [selectedYear, setSelectedYear] = useState('2021');

  const selectedYearHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  };
  
  const filteredExpenses = props.expenses.filter( expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter year={selectedYear} onYearSelected={selectedYearHandler} />
        {
          filteredExpenses.map(expense => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          })
        }
      </Card>      
    </div>
  );
}
