import Image from "../components/image";
import Timer from "../components/timer";
import History from "../components/history";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import forestSound from "../assets/audios/forest.mp3"
import birdsSound from "../assets/audios/birds.mp3"
import rainSound from "../assets/audios/rain.mp3"
import whiteSound from "../assets/audios/white.wav"
import alphaSound from "../assets/audios/alpha.wav"
import brownSound from "../assets/audios/brown.wav"

import forestImage from "../assets/images/soundsImages/forest.png"
import birdsImage from "../assets/images/soundsImages/birds.png"
import rainImage from "../assets/images/soundsImages/rain.png"
import whiteImage from "../assets/images/soundsImages/white.png"
import brownImage from "../assets/images/soundsImages/brown.jpg"
import alphaImage from "../assets/images/soundsImages/alpha.jpg"

// Map of sound keys to their image/audio assets
const SOUND_MAP = {
    birds: { image: birdsImage, music: birdsSound },
    forest: { image: forestImage, music: forestSound },
    white: { image: whiteImage, music: whiteSound },
    brown: { image: brownImage, music: brownSound },
    rain: { image: rainImage, music: rainSound },
    alpha: { image: alphaImage, music: alphaSound },
};

const getSoundAssets = (key) => SOUND_MAP[key] || SOUND_MAP.forest;

const FOCUS_TIME = 1500; // 25 mins
const BREAK_TIME = 300;  // 5 mins

const DashBoard = () => {

    const location = useLocation();
    const sound = location.state?.sound;
    const [image, setImage] = useState(forestImage);
    const [music, setMusic] = useState(forestSound);
    const [timer, setTimer] = useState(FOCUS_TIME);
    const [running, isRunning] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [history, setHistory] = useState([]);
    const [selectedSound, setSelectedSound] = useState(sound);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    // Apply assets for a given sound key
    const applySound = (key) => {
        const { image, music } = getSoundAssets(key);
        setImage(image);
        setMusic(music);
    };

    useEffect(() => {
        applySound(sound);
    }, [sound]);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    isRunning(false);

                    if (!isBreak) {
                        setHistory((prev) => [...prev, "Session Completed - 25 mins"]);
                        setIsBreak(true);
                        applySound("alpha");
                        setTimer(BREAK_TIME);
                    } else {
                        setIsBreak(false);
                        applySound(selectedSound);
                        setTimer(FOCUS_TIME);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [running, isBreak, selectedSound]);

    const start = () => {
        if (!running) isRunning(true);
    };

    const stop = () => {
        if (running) isRunning(false);
    };

    const startBreak = () => {
        setIsBreak(true);
        applySound("alpha");
        setTimer(BREAK_TIME);
        isRunning(true);
    };

    const startFocus = () => {
        setIsBreak(false);
        isRunning(false);
        applySound(selectedSound);
        setTimer(FOCUS_TIME);
    };

    return (
        <section className="bg-[url(src/assets/images/bg.jpg)] bg-cover 
                            h-screen w-full bg-no-repeat bg-center
                            font-inter text-[#E8F3FC] relative p-4 sm:p-6 md:p-10 box-border overflow-x-hidden">

            <div className="bg-gray-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg backdrop-saturate-150 
                           grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6
                           auto-rows-max p-4 sm:p-6 md:p-8 w-full box-border">
                <div className="sm:col-span-1 lg:col-span-2">
                    <Image file={image} />
                </div>
                <div className="sm:col-span-1 row-span-2">
                    <History sessions={history} />
                </div>
                <div className="sm:col-span-2 lg:col-span-2">
                    <Timer
                        pomodoro={`${minutes}:${String(seconds).padStart(2, "0")}`}
                        start={start}
                        stop={stop}
                        sound={music}
                        running={running}
                        startBreak={startBreak}
                        startFocus={startFocus}
                        isBreak={isBreak}
                    />
                </div>
            </div>
        </section>
    );
};

export default DashBoard;