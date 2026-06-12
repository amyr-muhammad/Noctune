import Image from "../components/Image";
import Timer from "../components/timer";
import History from "../components/history";
import { useState, useEffect } from "react";

const DashBoard = () => {
    const [timer, setTimer] = useState(1500)
    const [running, isRunning] = useState(false)


    useEffect(() => {
        if (!isRunning) return;

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
    }, [isRunning])

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;





    return (

        <>
            <section className="bg-[url(src/assets/images/bg.jpg)] bg-cover 
                                h-screen w-full bg-no-repeat bg-center
                                font-inter text-[#E8F3FC] relative p-4 sm:p-6 md:p-10 box-border overflow-x-hidden" >

                <div className="bg-gray-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg backdrop-saturate-150 
                               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6
                               auto-rows-max p-4 sm:p-6 md:p-8 w-full box-border">
                    <div className="sm:col-span-1 lg:col-span-2">
                        <Image file={"src/assets/images/soundsImages/birds.png"} />
                    </div>
                    <div className="sm:col-span-1 row-span-2 ">
                        <History />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-2" >
                        <Timer pomodoro={`${minutes}:${seconds}`} />
                    </div>
                </div>

            </section>

        </>
    )


}

export default DashBoard;