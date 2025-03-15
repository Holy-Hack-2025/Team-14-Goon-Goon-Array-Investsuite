# PathView

This project simulates investment growth across multiple portfolios using historical stock data and Monte Carlo simulations. It helps investors estimate the time required to reach financial goals based on different investment strategies.

## How It Works
1. The backend fetches historical stock prices using `yfinance`.
2. Percentage changes are calculated over the past years.
3. Monte Carlo simulations generate stock price predictions.
4. Investment growth is estimated using historical trends and dividend yields.
5. The React frontend visualizes different investment paths.

## Technology Stack
### Backend (Python)
- `pandas` – Data manipulation
- `numpy` – Mathematical computations
- `yfinance` – Fetching stock prices
- Monte Carlo Simulation (Custom implementation)

### Frontend (React)
- Displays investment paths: Stable, Risky, and Long-Term
- Graphs for investment projections


## Portfolios & Budgets
| Portfolio | Stocks | Budget |
|-----------|--------|--------|
| **Short-Term (Volatile)** | MSFT, TSLA, MARA | $500 |
| **Moderate-Term (Stable)** | TSLA, JNJ, IBM, WMT, JPM | $8,000 |
| **Long-Term (Moderate)** | KO, WMT, V | $30,000 |


### Financial Goals
- **Short-Term**: iPhone 16, Vacation Trip
- **Moderate-Term**: Car, House
- **Long-Term**: Retirement


## Setup & Usage
### Backend
1. Install dependencies for generating data:
   ```
   pip install -r requirements.txt
   ```

### Frontend
1. Install dependencies by running 
    ```
    npm install
    ```
2. Start the server with
    ```
    npm run dev
    ```
