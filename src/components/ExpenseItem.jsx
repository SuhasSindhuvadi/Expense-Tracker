import React from 'react';

const ExpenseItem = ({ expense, isNew }) => {
  return (
    <li className={isNew ? 'new-expense-item' : ''}>
      <span>{expense.title}</span>
      <span>&#8377;{expense.amount.toFixed(2)}</span>
    </li>
  );
};

export default ExpenseItem;
