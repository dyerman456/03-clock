import React, {useEffect, useState} from "react";

export const DigitalClock = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {

    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const showTime = (num: number) => num < 10 ? "0" + num : num

  const secondsString = showTime(date.getSeconds())
  const minutesString = showTime(date.getMinutes())
  const hoursString = showTime(date.getHours())

  return (
    <>
      <span>{hoursString}</span>
      :
      <span>{minutesString}</span>
      :
      <span>{secondsString}</span>
    </>
  )
}