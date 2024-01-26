// CountdownTimer.jsx
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(true);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-01-27T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setIsActive(false);
    }

    setTime(timeLeft);
  };

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  useEffect(() => {
    calculateTimeLeft();
  }, []);

  return (
    <div>
      {isActive ? (
        <div className="my-5">
          <p>
            Harap selesaikan pembayaran dalam{" "}
            <span className="text-[#ff6900]">
              {time.hours}:{time.minutes}:{time.seconds}
            </span>
          </p>
        </div>
      ) : (
        <p>Countdown expired</p>
      )}
    </div>
  );
};

export default CountdownTimer;
