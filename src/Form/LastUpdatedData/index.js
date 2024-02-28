export const LastUpdatedData = ({apiLastDate}) => {
    const apiDateToString = new Date(apiLastDate)
    const formatedData = apiDateToString.toLocaleDateString()

    return (<p>{formatedData}</p>)
  }