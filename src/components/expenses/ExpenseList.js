
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/Card';

export default function ExpenseList(props) {
  return (
    <Card className='expenses'>
      {
        props.expenses.map(expense => {
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
      }
    </Card>      

  );
}
