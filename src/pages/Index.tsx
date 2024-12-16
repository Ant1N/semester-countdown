import CountdownTimer from "@/components/CountdownTimer";
import { Snowflake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-christmas-red to-christmas-green animate-gradient-shift relative overflow-hidden">
      {/* Decorative snowflakes */}
      {[...Array(12)].map((_, i) => (
        <Snowflake
          key={i}
          className={`absolute text-white/30 animate-snowfall`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
      
      <div className="w-full max-w-4xl p-8 rounded-xl backdrop-blur-sm bg-white/30 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Christmas Countdown
        </h1>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Index;