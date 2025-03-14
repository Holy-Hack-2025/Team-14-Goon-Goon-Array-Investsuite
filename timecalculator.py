import pandas as pd
import numpy as np

def calculate_yearly_growth(stock_data):
    # Calculate year-over-year percentage changes
    yearly_changes = []
    for i in range(1, len(stock_data)):
        change = (stock_data[i] - stock_data[i-1]) / stock_data[i-1]
        yearly_changes.append(change)
    return np.mean(yearly_changes)

def calculate_years_to_goal(initial_investment, goal_amount, yearly_growth_rate):
    years = np.log(goal_amount / initial_investment) / np.log(1 + yearly_growth_rate)
    return round(years, 2)

# Read goals
goals_df = pd.read_csv('ExampleGoals.csv')

# Get user input
initial_investment = float(input("Enter your initial investment amount: $"))

# Get stock selections
print("\nEnter three stock symbols (AMZN, NFLX, DPZ available):")
stocks = []
for i in range(3):
    stock = input(f"Enter stock {i+1}: ").upper()
    stocks.append(stock)

# Read portfolio data
portfolio_df = pd.read_csv('final_predictions.csv')

# Calculate average growth rate for selected stocks
total_growth_rate = 0
for stock in stocks:
    stock_data = portfolio_df[stock].values
    growth_rate = calculate_yearly_growth(stock_data)
    total_growth_rate += growth_rate
    print(f"\n{stock} average yearly growth: {growth_rate*100:.2f}%")

average_growth_rate = total_growth_rate / 3
print(f"\nPortfolio average yearly growth: {average_growth_rate*100:.2f}%")

# Display available goals
print("\nAvailable goals:")
for index, row in goals_df.iterrows():
    print(f"{row['Name']}: ${row['Cost']}")

# Get user's goal
goal_name = input("\nEnter the name of your goal: ")
goal_amount = float(goals_df[goals_df['Name'] == goal_name]['Cost'].values[0])

# Calculate years needed
years_needed = calculate_years_to_goal(initial_investment, goal_amount, average_growth_rate)

print(f"\nTo reach your goal of {goal_name} (${goal_amount:,.2f}):")
print(f"With an initial investment of ${initial_investment:,.2f}")
print(f"At an average yearly growth rate of {average_growth_rate*100:.2f}%")
print(f"It will take approximately {years_needed} years")