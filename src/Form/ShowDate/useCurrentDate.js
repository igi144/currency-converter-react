import { useEffect, useRef, useState } from "react"

export const useCurrentDate = () => {
        const [time, setTime] = useState(new Date())
        const myRef = useRef(null)
        useEffect(() => {
            myRef.current = setInterval(() => {
                setTime(new Date())
            }, 1000)

            return () => {
                clearInterval(myRef.current)
            }
        }, [])
        return { time }
    };
