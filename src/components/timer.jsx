import Button from "./button";
import Card from "./Card";
import { GLASS_EFFECT_INNER, RESPONSIVE_PADDING_SM } from "../constants/styles";

const Timer = ({pomodoro, start, stop}) => {
    return (
        <Card className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <h3 className={`${GLASS_EFFECT_INNER} px-6 py-3 text-center sm:text-left whitespace-nowrap`}>
                {pomodoro}
            </h3>
            <div className="hidden sm:block border-l border-gray-300"></div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center sm:justify-start items-stretch sm:items-center flex-1">
                <Button text={"Start"} onClick = {start} />
                <Button text={"Pause"} onClick = {stop}/>
            </div>
        </Card>
    );
};

export default Timer;