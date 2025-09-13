import React from 'react'
import { ClockViewPropsType, showTime } from './Clock'

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  return (
    <>
      <span>{showTime(date.getHours())}</span>:
      <span>{showTime(date.getMinutes())}</span>:
      <span>{showTime(date.getSeconds())}</span>
    </>
  )
}
