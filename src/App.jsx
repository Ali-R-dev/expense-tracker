import { useState, createContext } from "react";
import Finance from "./components/finance/Finance";
import Header from "./components/Header";
import History from "./components/history/History";
import NewTranscation from "./components/transaction/NewTranscation";

export const ExpenseContext = createContext();

function App() {
  const [transactions, setTransactions] = useState([
    { title: "Sallery", value: 1000 },
    { title: "car rent", value: -200 },
    { title: "Side hussle", value: 150 },
    { title: "Groceries", value: -300 },
  ]);
  const totalBalance = () =>
    transactions.reduce((acc, { value }) => acc + value, 0);

  const totalExpense = () =>
    transactions.reduce((acc, { value }) => acc + (value > 0 ? value : 0), 0);
  const totalIncome = () =>
    Math.abs(
      transactions.reduce((acc, { value }) => acc + (value < 0 ? value : 0), 0)
    );

  const saveNewTranscation = ({ title, value }) =>
    setTransactions([...transactions, { title: title, value: +value }]);
  return (
    <ExpenseContext.Provider
      value={{
        totalBalance,
        totalExpense,
        totalIncome,
        transactions,
        saveNewTranscation,
      }}
    >
      <div id="app">
        <div className="wrapper">
          <div className="sideBar">
            <Header />
            <Finance />
            <History />
            <NewTranscation />
          </div>
          {/* <div className="wrapperMain">
            <Header />
            <Finance />
            <History />
            <NewTranscation />
          </div> */}
        </div>
      </div>
    </ExpenseContext.Provider>
  );
}

export default App;

// const data = [

//   uid:{
//     categories:[{id,title:},{id,title}],
//     trans:[
//       {catId,transID,datetim},
//       {catId,transID,datetim}
//     ]
//   }
//   ,
//   uid:[
//     {catId,transID,datetim},
//     {catId,transID,datetim}
//   ]
// ]
