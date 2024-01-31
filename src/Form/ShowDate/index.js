import { useEffect, useRef, useState } from "react"
import "./style.css"

export const Clock = () => {
    const [time, setTime] = useState(new Date())
    const currentHour = time.toLocaleTimeString()
    const currentDay = time.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })
    const myRef = useRef(null)

    useEffect(() => {
        myRef.current = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(myRef.current)
        }
    }, [])

    return (
        <div className="form__date">Dzisiaj jest {currentDay}, {currentHour} </div>
    )
}