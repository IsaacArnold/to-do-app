import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState([""]);

  // Quote generation URL: https://github.com/lukePeavey/quotable#get-random-quote
  // Axios fetch code inspiration is from: https://www.robinwieruch.de/react-hooks-fetch-data
  useEffect(() => {
    async function getQuote() {
      const result = await axios("https://api.quotable.io/random?maxLength=50");
      setQuote(result.data.content);
    }
    getQuote();
  }, []);

  return (
    <div className="quote">
      <p className="title">Quote of the day:</p>
      <p className="quote-txt">{quote}</p>
    </div>
  );
};

export default Quote;
