import { GLASS_EFFECT_INNER } from "../constants/styles";

const History = ({ sessions = [] }) => {
    return (
        <>
            <section className="bg-gray-500/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg backdrop-saturate-150 
                              p-4 sm:p-6 w-full max-h-96 overflow-y-auto">
            <ul className="list-none space-y-2">
                {sessions.length === 0 ? (
                    <li className={`${GLASS_EFFECT_INNER} text-sm sm:text-base p-3 text-gray-400`}>No sessions yet</li>
                ) : (
                    sessions.map((session, index) => (
                        <li key={index} className={`${GLASS_EFFECT_INNER} text-sm sm:text-base p-3`}>{session}</li>
                    ))
                )}
            </ul>
            </section>
        </>
    )
}

export default History;