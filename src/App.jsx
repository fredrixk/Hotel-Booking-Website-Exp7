import React, { useState } from 'react'

export default function App() {
  const [income, setIncome] = useState('')
  const [rent, setRent] = useState('')
  const [food, setFood] = useState('')
  const [transport, setTransport] = useState('')
  const [others, setOthers] = useState('')
  const [balance, setBalance] = useState(null)

  const parseAndValidate = (value, name) => {
    if (value === '' || value === null) {
      alert(`${name} cannot be empty.`)
      throw new Error('validation')
    }
    const num = parseFloat(value)
    if (Number.isNaN(num) || num <= 0) {
      alert(`${name} must be a positive number.`)
      throw new Error('validation')
    }
    return num
  }

  const handleCalculate = () => {
    try {
      const inc = parseAndValidate(income, 'Monthly Income')
      const r = parseAndValidate(rent, 'Rent/EMI')
      const f = parseAndValidate(food, 'Food Expenses')
      const t = parseAndValidate(transport, 'Transport Expenses')
      const o = parseAndValidate(others, 'Other Expenses')

      const bal = inc - (r + f + t + o)
      setBalance(bal)
    } catch (err) {
      // validation already alerted
      setBalance(null)
    }
  }

  return (
    <div className="container">
      <h1>Budget Calculator</h1>

      <div className="form">
        <label>
          Monthly Income
          <input
            type="number"
            step="0.01"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 3000"
          />
        </label>

        <label>
          Rent/EMI
          <input
            type="number"
            step="0.01"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            placeholder="e.g. 1000"
          />
        </label>

        <label>
          Food Expenses
          <input
            type="number"
            step="0.01"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            placeholder="e.g. 300"
          />
        </label>

        <label>
          Transport Expenses
          <input
            type="number"
            step="0.01"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            placeholder="e.g. 150"
          />
        </label>

        <label>
          Other Expenses
          <input
            type="number"
            step="0.01"
            value={others}
            onChange={(e) => setOthers(e.target.value)}
            placeholder="e.g. 200"
          />
        </label>

        <button onClick={handleCalculate}>Calculate Balance</button>

        {balance !== null && (
          <div className={`result ${balance < 0 ? 'negative' : 'positive'}`}>
            <p>
              Remaining Balance: <strong>{balance.toFixed(2)}</strong>
            </p>
            <p className="message">
              {balance < 0 ? 'You are overspending!' : 'Good job managing your expenses!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
