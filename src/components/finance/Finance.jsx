/* eslint-disable react/prop-types */
import styles from "./finance.module.css";
import StatusCard from "./StatusCard";
const Finance = (props) => {
  const { totalBalance, totalExpense, totalIncome } = props;
  return (
    <div className={styles.wrapperFinance}>
      <StatusCard
        type="YOUR BALANCE"
        amount={totalBalance()}
        card={styles.wrapperStatus}
        color={styles.black}
      />
      <div className={styles.wrapperCards}>
        <StatusCard
          type="INCOME"
          amount={totalExpense()}
          card={styles.card}
          color={styles.green}
        />
        <div className={styles.vl}></div>
        <StatusCard
          type="EXPENSE"
          amount={totalIncome()}
          card={styles.card}
          color={styles.red}
        />
      </div>
    </div>
  );
};

export default Finance;
