# Budget Calculator (React)

This is a minimal React + Vite app that implements a Budget Calculator.

Features:
- Enter Monthly Income, Rent/EMI, Food, Transport, and Other expenses (all must be positive numbers).
- "Calculate Balance" button validates inputs and computes remaining balance = Income - (Rent+Food+Transport+Others).
- Displays remaining balance below the button; red with a warning when negative, green with success when positive.

## Local Development

```powershell
# from the project root (where package.json is)
npm install
npm run dev

# open http://localhost:5173 in your browser
```

## Deploy to Render

1. Create a new Web Service on Render:
   - Connect your GitHub repository
   - Set Name: `budget-calculator` (or your preferred name)
   - Set Build Command: `npm install && npm run build`
   - Set Start Command: `npm run start`
   - Set Node version: `18` (or your preferred version)

2. Configure Environment Variables (optional):
   - `PORT`: Render will set this automatically
   - No other environment variables needed for this app

3. Deploy:
   - Render will automatically deploy when you push to the main branch
   - First deploy may take a few minutes

Notes:
- Fields must be filled and positive; empty or non-positive values produce an alert.
- The UI is intentionally small and focused; feel free to extend it.
