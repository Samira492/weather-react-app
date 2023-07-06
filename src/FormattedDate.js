import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    minutes = `0{hours}`;
  }
  if (minutes < 10) {
    minutes = `0{minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}