import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Laptop 1",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e2",
    title: "New Desk",
    amount: 299.98,
    date: new Date(2021, 5, 12)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 100,
    date: new Date(2021, 8, 30)
  }
];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const savedExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onSavedExpenseData={savedExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
