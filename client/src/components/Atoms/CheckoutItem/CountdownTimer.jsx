import React, { useState, useEffect } from "react";

const CountdownTimer = ({ startTime, endTime }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(true);

  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
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
  }, [startTime, endTime]); // Memperbarui kalkulasi ketika startTime atau endTime berubah

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

// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [isActive, setIsActive] = useState(true);

//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-01-27T23:59:59") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       setIsActive(false);
//     }

//     setTime(timeLeft);
//   };

//   useEffect(() => {
//     if (isActive) {
//       const timer = setInterval(calculateTimeLeft, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [isActive]);

//   useEffect(() => {
//     calculateTimeLeft();
//   }, []);

//   return (
//     <div>
//       {isActive ? (
//         <div className="my-5">
//           <p>
//             Harap selesaikan pembayaran dalam{" "}
//             <span className="text-[#ff6900]">
//               {time.hours}:{time.minutes}:{time.seconds}
//             </span>
//           </p>
//         </div>
//       ) : (
//         <p>Countdown expired</p>
//       )}
//     </div>
//   );
// };

// export default CountdownTimer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CountdownTimer = () => {
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [isActive, setIsActive] = useState(true);

//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-01-27T23:59:59") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       setIsActive(false);
//       // Menyimpan nilai timer ke database ketika perhitungan waktu berakhir
//       saveTimerToDatabase(time);
//     }

//     setTime(timeLeft);
//   };

//   const saveTimerToDatabase = async (timerValues) => {
//     try {
//       // Diasumsikan Anda memiliki endpoint API backend untuk menyimpan nilai timer
//       await axios.post("http://localhost:5000/api/v1/timers", { timerValues });
//       console.log("Nilai timer disimpan ke database");

//       // Simpan juga nilai timer ke local storage
//       localStorage.setItem("timerValues", JSON.stringify(timerValues));
//       console.log("Nilai timer disimpan di local storage");
//     } catch (error) {
//       console.error("Error menyimpan nilai timer:", error);
//     }
//   };

//   useEffect(() => {
//     if (isActive) {
//       const timer = setInterval(calculateTimeLeft, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [isActive]);

//   useEffect(() => {
//     calculateTimeLeft();
//   }, []);

//   return (
//     <div>
//       {isActive ? (
//         <div className="my-5">
//           <p>
//             Harap selesaikan pembayaran dalam{" "}
//             <span className="text-[#ff6900]">
//               {time.hours}:{time.minutes}:{time.seconds}
//             </span>
//           </p>
//         </div>
//       ) : (
//         <p>Countdown berakhir</p>
//       )}
//     </div>
//   );
// };

// export default CountdownTimer;
