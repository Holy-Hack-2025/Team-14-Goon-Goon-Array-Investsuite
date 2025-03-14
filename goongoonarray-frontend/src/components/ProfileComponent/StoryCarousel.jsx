import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const StoryCarousel = ({ stockData, updateCharacterImage }) => {
  // change: Function to calculate percentage change
  const calculatePercentageChange = (yearAgo, current) => {
    return ((current - yearAgo) / yearAgo) * 100;
  };

  // change: Calculate the average percentage change for the entire portfolio
  const calculateAverageChange = (stockData) => {
    const totalChange = Object.values(stockData).reduce((acc, stock) => {
      const { yearAgo, current } = stock;
      const percentageChange = calculatePercentageChange(yearAgo, current);
      return acc + percentageChange;
    }, 0);

    return totalChange / Object.keys(stockData).length;
  };

  // change: Call the updateCharacterImage with the percentage change
  const handleStockSlideChange = (stock) => {
    const { yearAgo, current } = stock;
    const percentageChange = calculatePercentageChange(yearAgo, current);
    console.log(percentageChange)
    updateCharacterImage(percentageChange);  // change: Update character image based on stock's percentage change
  };

  // change: Calculate the average percentage change for the entire portfolio
  const averageChange = calculateAverageChange(stockData);

  return (
    <div className="storyContainer">
      <Carousel
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
      >
        {/* change: Add an extra slide for the portfolio's average percentage change */}
        <div key="portfolio-average" className="stock-story-slide">
          <h2>Portfolio Average</h2>
          <p>
            The average change in your portfolio since last year is a{' '}
            <span style={{ color: averageChange >= 0 ? 'green' : 'red' }}>
              {averageChange >= 0 ? `+${averageChange.toFixed(2)}%` : `-${Math.abs(averageChange).toFixed(2)}%`}
            </span>{' '}
            {averageChange >= 0 ? 'increase' : 'decrease'}
          </p>
          {handleStockSlideChange({ yearAgo: averageChange, current: averageChange })}
        </div>

        {/* change: Render individual stock slides */}
        {Object.keys(stockData).map(stock => {
          const { yearAgo, current } = stockData[stock];
          const percentageChange = calculatePercentageChange(yearAgo, current);

          return (
            <div key={stock} className="stock-story-slide">
              <h2>{stock}</h2>
              <p>{stock} was ${yearAgo.toFixed(2)} a year ago</p>
              <p>This year, {stock} is ${current.toFixed(2)}</p>
              <p>
                This is a{' '}
                <span style={{ color: percentageChange >= 0 ? 'green' : 'red' }}>
                  {percentageChange >= 0
                    ? `+${percentageChange.toFixed(2)}% increase`
                    : `-${Math.abs(percentageChange).toFixed(2)}% decrease`}
                </span>
              </p>
              {handleStockSlideChange(stock)}  {/* change: Trigger image update based on stock's change */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default StoryCarousel;
