import { useState, createContext } from "react";
import Finance from "./components/finance/Finance";
import Header from "./components/Header";
import History from "./components/history/History";
import NewTransaction from "./components/transaction/NewTransaction";
import Login from "./pages/Login";

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
    transactions.reduce((acc, { value }) => acc + (value < 0 ? value : 0), 0);

  const saveNewTransaction = ({ title, value }) =>
    setTransactions([...transactions, { title: title, value: +value }]);

  return (
    // <ExpenseContext.Provider
    //   value={{
    //     totalBalance,
    //     totalExpense,
    //     totalIncome,
    //     transactions,
    //     saveNewTransaction,
    //   }}
    // >
    //   <div id="app">
    //     <div className="wrapper">
    //       <div className="sideBar">
    //         <Header />
    //         <Finance />
    //         <History />
    //         <NewTransaction />
    //       </div>
    //     </div>
    //   </div>
    // </ExpenseContext.Provider>
    <Login />
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
