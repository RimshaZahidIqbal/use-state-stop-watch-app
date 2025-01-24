import { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-app-bg bg-no-repeat bg-cover">
            <h1 className="text-center text-4xl font-bold text-[#ff8c00] mb-5">
                useEffect Timer
            </h1>
            <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center w-96">
                <div className="bg-[#1f2123] border-4 text-[#ff8c00] border-[#ff8c00] rounded-md p-5 flex items-center justify-center text-6xl font-bold mb-6 shadow-custom-orange animate-[scale_1s_ease-in-out]">
                    {count} sec
                </div>
            </div>
        </div>
    );
}

export default Timer;
