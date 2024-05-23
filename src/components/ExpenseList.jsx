import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <ExpenseItem key={expense.id} expense={expense} isNew={index === expenses.length - 1} />
      ))}
    </ul>
  );
};

export default ExpenseList;
