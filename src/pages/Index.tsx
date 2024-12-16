import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-vacation-start to-vacation-end animate-gradient-shift">
      <div className="w-full max-w-4xl p-8 rounded-xl backdrop-blur-sm bg-white/30">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Vacation Countdown
        </h1>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Index;