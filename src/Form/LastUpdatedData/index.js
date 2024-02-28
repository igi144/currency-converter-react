import { LastUpdate } from "./styled"

export const LastUpdatedData = ({apiLastDate}) => {
    const apiDateToString = new Date(apiLastDate)
    const formatedData = apiDateToString.toLocaleDateString()

    return (<LastUpdate>Kursy walut aktualne na dzień: {formatedData}</LastUpdate>)
  }