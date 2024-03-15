/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ExpenseContext } from "../../App";
import styles from "./history.module.css";
import HistoryCard from "./HistoryCard";
const History = () => {
  const { transactions } = useContext(ExpenseContext);
  return (
    <div className={styles.wrapperHistory}>
      <h4 className={styles.title}>History</h4>
      <hr />
      <div className={styles.wrapperList}>
        {transactions?.map((trans, i) => {
          const { title, value } = trans;
          const cardType = [
            styles.card,
            value > 0 ? styles.income : styles.expense,
          ];
          return (
            <HistoryCard
              key={i}
              style={cardType}
              title={title || "NULL"}
              value={value || "00"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default History;
