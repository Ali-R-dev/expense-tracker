/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./transaction.module.css";

const defaultValues = {
  title: "",
  value: "",
};

const NewTranscation = ({ saveNewTranscation }) => {
  const [newTranscation, setNewTransaction] = useState(defaultValues);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTransaction({ ...newTranscation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNewTranscation(newTranscation);
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
          value={newTranscation.title}
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
          value={newTranscation.value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit" className={styles.btnAddTranscation}>
        Add Transcation
      </button>
    </form>
  );
};

export default NewTranscation;
