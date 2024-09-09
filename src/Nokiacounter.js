import React, { useState, useEffect } from 'react';
import './Counter.css';

const Nokiacounter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleIncrement = () => {
    if (isClicked) {
      setError("Please wait 3 seconds before clicking again.");
      return;
    }
    setError(null);
    setCount(count + 1);
    setIsClicked(true);
  };

  const handleDecrement = () => {
    if (isClicked) {
      setError("Please wait 3 seconds before clicking again.");
      return;
    }
    setError(null);
    setCount(count - 1);
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), 3000);
      return () => {
        clearTimeout(timer)
        setError(null)
    };
    }
  }, [isClicked]);

  return (
    <div>
    <div>This is a test done by satheesan for an assessement - 11/9/23</div>
    <div className="nokia-counter-container">
      <h1>Nokia Test Counter</h1>
      <div className="nokia-counter-display">
        <button onClick={handleDecrement} className="counter-button">-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncrement} className="counter-button">+</button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
    </div>
  );
};

export default Nokiacounter;
