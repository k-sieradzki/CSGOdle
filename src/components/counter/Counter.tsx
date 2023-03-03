import React, { useState, useEffect } from "react";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countDownToMidnight = () => {
      const now:any = new Date();
      const midnight:any = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1,0,0,0);
      
      const timeLeft = midnight - now;
      const hours = ("0" + Math.floor(timeLeft / 1000 / 60 / 60)).slice(-2);
      const minutes = ("0" + Math.floor((timeLeft / 1000 / 60) % 60)).slice(-2);
      const seconds = ("0" + Math.floor((timeLeft / 1000) % 60)).slice(-2);
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    countDownToMidnight();
    const intervalId = setInterval(countDownToMidnight, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>{timeLeft}</div>;
};

export default Counter;
