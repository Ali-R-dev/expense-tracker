/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { ExpenseContext } from "../../App";
import styles from "./transaction.module.css";

const defaultValues = {
  title: "",
  value: "",
};

const NewTransaction = () => {
  const { saveNewTransaction } = useContext(ExpenseContext);

  const [newTransaction, setNewTransaction] = useState(defaultValues);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNewTransaction(newTransaction);
    setNewTransaction({ ...defaultValues });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formAddTranscation}>
      <h4 className={styles.heading}>Add New Transcation</h4>
      <hr />
      <div className={styles.wrapperInputGroup}>
        <h5 className={styles.title}>Title</h5>
        <input
          required
          type="text"
          placeholder="Enter Title"
          value={newTransaction.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.wrapperInputGroup}>
        <h5 className={styles.title}>
          Amount
          <br />
          (negative-expense,positive-income)
        </h5>
        <input
          required
          type="number"
          placeholder="Enter Amount"
          name="value"
          value={newTransaction.value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={styles.btnAddTranscation}>
        Add Transcation
      </button>
    </form>
  );
};

export default NewTransaction;
