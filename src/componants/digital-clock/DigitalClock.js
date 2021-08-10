import React, { useState } from 'react'

function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);

    return (
        <div className="clockTimerContainer text-center py-5">
            <h3 className="text-uppercase mb-5">Digital Clock</h3>
            <h1 className="timeText">{ cTime.split(" ")[0] }</h1>
        </div>
    )
}

export default DigitalClock;
