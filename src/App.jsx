import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Format time used in this app is  hh:mm:ss
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleRunning = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  // Reset 
  const resetStopwatch = () => {
    clearInterval(intervalId);
    setTime(0);
    setIsRunning(false);
  };

  // Cleanup interval 
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <div className="flex flex-col bg-app-bg justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center">
        <h1 className="text-center text-[48px] font-extrabold text-[#ff8c00] mb-5">
          React Stopwatch
        </h1>

        <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center w-96">
          <div className="bg-[#1f2123] border-4 text-[#ff8c00] border-[#ff8c00] rounded-md p-5 flex items-center justify-center text-6xl font-bold mb-6 shadow-custom-orange animate-[scale_1s_ease-in-out]">
            {formatTime(time)}
          </div>

          <div className="flex gap-4">
            <button
              className="p-4 bg-[#2c3138] w-20 h-20 text-white rounded-xl hover:bg-[#575d64]"
              onClick={toggleRunning}>
              <i className={`fa-solid ${isRunning ? 'fa-pause' : 'fa-play'} text-xl font-black`}></i>
            </button>

            <button
              className="p-4 bg-[#ff8c00] h-20 w-auto text-2xl text-white rounded-xl hover:bg-[#e07b00]"
              onClick={resetStopwatch}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
