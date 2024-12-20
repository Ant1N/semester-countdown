import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = new Date("2024-12-18T13:00:00+02:00"); // Stockholm time (UTC+2)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const totalSeconds = Math.max(0, differenceInSeconds(targetDate, new Date()));
      
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getMessage = () => {
    if (timeLeft.days > 2) return "Nu kan jag känna det!";
    if (timeLeft.days > 0) return "Det luktar kalsonger under täcket i tre veckor";
    if (timeLeft.days === 0 && (timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0)) 
      return "Byxorna åker av";
    return "Seeeemester!!!";
  };

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <div className="text-4xl md:text-6xl font-bold mb-2 overflow-hidden bg-white/50 rounded-lg px-6 py-3 shadow-lg">
        <span className="inline-block animate-number-spin">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="text-sm md:text-base text-gray-700 font-medium">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl mb-8 text-gray-800 font-medium">{getMessage()}</h2>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        <TimeUnit value={timeLeft.days} label="days" />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;