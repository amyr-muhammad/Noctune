const Button = ({text}) => {
    return (
        <>
            <button className="bg-white/5 rounded-full backdrop-blur-50 border border-white/20 shadow-lg backdrop-saturate-150 
                             px-4 sm:px-6 py-2 sm:py-3 cursor-pointer hover:bg-white/10 transition-colors 
                             text-sm sm:text-base whitespace-nowrap">
                {text}
            </button>
        </>
    )
}


export default Button;