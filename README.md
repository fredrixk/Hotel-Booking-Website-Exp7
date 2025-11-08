# Budget Calculator (React)

This is a minimal React + Vite app that implements a Budget Calculator.

Features:
- Enter Monthly Income, Rent/EMI, Food, Transport, and Other expenses (all must be positive numbers).
- "Calculate Balance" button validates inputs and computes remaining balance = Income - (Rent+Food+Transport+Others).
- Displays remaining balance below the button; red with a warning when negative, green with success when positive.

Quick start (Windows PowerShell):

```powershell
# from the project root (where package.json is)
npm install
npm run dev

# open http://localhost:5173 in your browser
```

Notes:
- Fields must be filled and positive; empty or non-positive values produce an alert.
- The UI is intentionally small and focused; feel free to extend it.
