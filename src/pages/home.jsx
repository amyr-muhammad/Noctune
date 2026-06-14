import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";



const Home = () => {

    const [selectedSound, setSelectedSound] = useState(null);
    const navigate = useNavigate();


    return (
        <>
            <section className="bg-[url(src/assets/images/bg.jpg)] bg-cover 
                                h-screen w-full bg-no-repeat 
                                font-inter text-[#E8F3FC] " >
                <div className=" w-full h-full bg-linear-to-t from-slate-900 to-transparent flex flex-col justify-center items-center" >

                    <h1 className=" mt-10 text-7xl text-center font-hell tracking-widest font-bold bg-linear-to-b from-slate-100 to-slate-400 bg-clip-text text-transparent m-0" >
                        NOCTUNE
                    </h1>

                    <p className="text-2xl text-center px-80 py-5 pb-15 text-gray-100 font-inter ">
                        10x you productiviy and tune your focus with Noctune specialized ambeint sounds and pomodoro timer
                    </p>


                    <div>
                        <p className="text-center text-xl m-5 text-gray-100">Choose a noise to get flow state</p>
                        <Button text={"Forest"} onClick={() => setSelectedSound("forest")} />
                        <Button text={"Brown"}  onClick={() => setSelectedSound("brown")}  />
                        <Button text={"White"}  onClick={() => setSelectedSound("white")}  />
                        <Button text={"Birds"}  onClick={() => setSelectedSound("birds")}  />
                        <Button text={"Rain"}   onClick={() => setSelectedSound("rain")}   />
                    </div>
                    <button className="py-2 px-8 bg-white text-gray-950 rounded-full border border-gray-800 mt-5" 
                    onClick={()=>{
                        if(!selectedSound){
                            alert("Select A sound")
                            return;
                        }
                        navigate("/dashboard", {
                            state: {
                                sound: selectedSound
                            }
                        })
                    }}>Start</button>
                </div>
            </section>
        </>
    )
}


export default Home;