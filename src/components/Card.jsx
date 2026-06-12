import { GLASS_EFFECT, RESPONSIVE_PADDING_SM } from "../constants/styles";

const Card = ({ children, className = "" }) => {
    return (
        <section className={`${GLASS_EFFECT} ${RESPONSIVE_PADDING_SM} w-full h-auto ${className}`}>
            {children}
        </section>
    );
};

export default Card;
