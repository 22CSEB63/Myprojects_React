import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList: React.FC<Props> = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return <p>No expenses to display.</p>;

  // Calculate the total amount
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={1}>Total</td>
          <td colSpan={3}>${totalAmount.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
