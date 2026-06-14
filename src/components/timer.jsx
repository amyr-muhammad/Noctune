import Button from "./button";
import Card from "./Card";
import { GLASS_EFFECT_INNER, RESPONSIVE_PADDING_SM } from "../constants/styles";
import { useRef, useEffect } from "react";

const Timer = ({ pomodoro, start, stop, sound, running, startBreak, startFocus, isBreak }) => {
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [sound]);

    useEffect(() => {
        if (running && audioRef.current) {
            audioRef.current.play().catch(() => {
                console.log("Audio play failed - may be due to browser autoplay policy");
            });
        } else if (!running && audioRef.current) {
            audioRef.current.pause();
        }
    }, [running]);

    const handleStart = () => {
        start();
        audioRef.current?.play();
    };

    const handleStop = () => {
        stop();
        audioRef.current?.pause();
    };
    return (
        <Card className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <h3 className={`${GLASS_EFFECT_INNER} px-6 py-3 text-center sm:text-left whitespace-nowrap`}>
                {pomodoro}
            </h3>
            <div className="hidden sm:block border-l border-gray-300"></div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start items-stretch sm:items-center flex-1">
                <Button text={"Start"} onClick={handleStart} />
                <Button text={"Pause"} onClick={handleStop} />
                {isBreak ? (
                    <Button text={"Focus"} onClick={startFocus} />
                ) : (
                    <Button text={"Break"} onClick={startBreak} />
                )}
            </div>
            <div>
                <audio src={sound} ref={audioRef} loop ></audio>
            </div>
        </Card>
    );
};

export default Timer;