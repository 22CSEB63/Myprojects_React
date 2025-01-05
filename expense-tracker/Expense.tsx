import React, { useState } from "react";

interface Props {
  onSubmit: (expense: {
    description: string;
    amount: number;
    category: string;
  }) => void;
  categories: string[];
}

const Expense: React.FC<Props> = ({ onSubmit, categories }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!description || !amount || !category) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit({ description, amount, category });
    setDescription("");
    setAmount(0);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          type="text"
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select
          id="category"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
};

export default Expense;
