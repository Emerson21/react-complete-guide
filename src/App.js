import './App.css';
import ExpenseList from './components/expenses/ExpenseList';

function App() {

  const expenses = [
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

  return (
    <div className="App">
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
