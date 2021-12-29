import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHalder = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData };
    props.onSavedExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHalder} />
    </div>
  )  
}

export default NewExpense;
