import axios from 'axios';

export const apiSaveExpense = expense => {
  return axios.post('http://localhost:5000/api/v1/expense', expense);
};

export const apiUpdateExpense = expense => {
  return axios.put(`http://localhost:5000/api/v1/expense/${expense._id}`, expense);
};

export const apiDeleteExpense = expenseId => {
  return axios.delete(`http://localhost:5000/api/v1/expense/${expenseId}`);
};

export const apiFetchExpense = month => {
  const prefix = 'http://localhost:5000/api/v1/expense';
  const url = month ? `${prefix}/${month}` : prefix;
  return axios.get(url);
};
