import { useState, useEffect } from "react";

useState

function DigitalClock() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default DigitalClock