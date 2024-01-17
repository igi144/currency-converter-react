import "./style.css"

export const ShowDate = () => {

    const time = new Date()
    const currentDay = time.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })
    const currentHour = time.toLocaleTimeString()

    return (
        <div className="form__date">Dzisiaj jest {currentDay}, {currentHour}</div>
    )
};