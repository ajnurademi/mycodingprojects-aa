import './expandeTracker.css'
import React, { useState } from 'react';

function ExpanseTracker() {
  const [expanse, setExpanse] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAdd = () => {
    if (expanse && date && amount) {
      setExpenses([...expenses, { name: expanse, date: date, amount: amount }]);
      setExpanse('');
      setDate('');
      setAmount('');
    }
  };

  const handleRemove = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <>
      <div className="window">
        <div className="container mx-auto p-4 bg-white rounded shadow-lg">
          <div className="mb-4">
            <label className="text-2xl font-bold tracking-wide text-green-600">Expense Tracker</label>
          </div>
          <div className="formular flex flex-col sm:flex-row items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="font-medium">Add a New Item:</p>
            <div className="flex flex-col">
              <label className="mb-1">Name:</label>
              <input
                type="text"
                value={expanse}
                placeholder="What is your Expense?"
                onChange={(e) => setExpanse(e.target.value)}
                className="p-2 border rounded min-w-80"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
          </div>
          <div className="btn mb-4">
            <button
              onClick={handleAdd}
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
          <div className="table">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {expense.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {expense.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${expense.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-white hover:text-gray-200 rounded-lg bg-red-600 hover:bg-red-700 px-3 py-1"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpanseTracker;
