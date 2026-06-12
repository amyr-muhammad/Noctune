import Image from "../components/Image";
import Timer from "../components/timer";
import History from "../components/history";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// sounds import here

import forestSound from "../assets/audios/forest.mp3"
import birdsSound  from "../assets/audios/birds.mp3"
import rainSound   from "../assets/audios/rain.mp3"
import whiteSound  from "../assets/audios/white.wav"
import aplphaSound from "../assets/audios/alpha.wav"
import brownSound  from "../assets/audios/brown.wav"


// images import here

import forestImage from "../assets/images/soundsImages/forest.png"
import birdsImage  from "../assets/images/soundsImages/birds.png"
import rainImage   from "../assets/images/soundsImages/rain.png"
import whiteImage  from "../assets/images/soundsImages/white.png"
import brownImage  from "../assets/images/soundsImages/brown.jpg"
import aplphaImage from "../assets/images/soundsImages/alpha.jpg"



const DashBoard = () => {

    const location = useLocation();
    const sound = location.state?.sound

    console.log(sound)

    const  [image, setImage] = useState(forestImage)

  
    setImage(forestImage)
    

    const [timer, setTimer] = useState(1500)
    const [running, isRunning] = useState(false)

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0;
                }
                return prev - 1
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [running])

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const start = () => {
        if (!running) {
            return isRunning(true)
        }
    }

    const stop = () => {
        if (running) {
            return isRunning(false)
        }
    }




    return (

        <>
            <section className="bg-[url(src/assets/images/bg.jpg)] bg-cover 
                                h-screen w-full bg-no-repeat bg-center
                                font-inter text-[#E8F3FC] relative p-4 sm:p-6 md:p-10 box-border overflow-x-hidden" >

                <div className="bg-gray-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg backdrop-saturate-150 
                               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6
                               auto-rows-max p-4 sm:p-6 md:p-8 w-full box-border">
                    <div className="sm:col-span-1 lg:col-span-2">
                        <Image file={image}/>
                    </div> 
                    <div className="sm:col-span-1 row-span-2 ">
                        <History />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-2" >
                        <Timer pomodoro={`${minutes}:${seconds}`}  start = {start} stop={stop} />
                    </div>
                </div>

            </section>

        </>
    )


}

export default DashBoard;