import Image from "../components/Image";
import Timer from "../components/timer";
import History from "../components/history";
import { useState, useEffect } from "react";

const DashBoard = () => {
    const [timer, setTimer] = useState(1500)

    let timeLeft = 1500 
    const minutes = Math.floor(timeLeft / 60); 
    const seconds = minutes % 60;

    useEffect(() => {

       setTimeout(setTimer(timeLeft = timeLeft-1, 1000) )



      

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
                            <Timer pomodoro={timer} />
                        </div>


                    </div>

                </section>

            </>
        )
    })

}

export default DashBoard;