import { useState, useEffect, useRef } from "react";

export function Countdown () {
    const data = useRef(new Date("2026-10-24T11:00:00"));

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = data.current.getTime() - now; //time in millisecondi 

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className="flex items-center justify-center" >
            <div className="flex gap-4">
                <span className="bg-gray-100/20 py-2 px-4 rounded-lg">{time.days}</span>
                <span className="bg-gray-100/20 py-2 px-4 rounded-lg">{time.hours}</span>
                <span className="bg-gray-100/20 py-2 px-4 rounded-lg">{time.minutes}</span>
                <span className="bg-gray-100/20 py-2 px-4 rounded-lg">{time.seconds}</span>
            </div>
        </div>
    )
}