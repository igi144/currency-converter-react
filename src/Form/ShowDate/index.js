import { useCurrentDate } from "./useCurrentDate";
import { CurrentTime } from "./styled"

export const Clock = () => {
    const { time } = useCurrentDate()
    const currentHour = time.toLocaleTimeString()
    const currentDay = time.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })

    return (
        <CurrentTime>Dzisiaj jest {currentDay}, {currentHour} </CurrentTime>
    )
};  