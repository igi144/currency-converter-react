import "./style.css"
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const { time } = useCurrentDate()
    const currentHour = time.toLocaleTimeString()
    const currentDay = time.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })

    return (
        <div className="form__date">Dzisiaj jest {currentDay}, {currentHour} </div>
    )
};