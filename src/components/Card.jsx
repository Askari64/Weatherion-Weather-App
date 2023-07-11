import React from 'react'
import './Card.css'

function Card(props) {


  return (
    <div className='card-component'>
    <div className='weather-condition'>
    <h2 className='location'>{props.name}, {props.country}</h2>
        <p>{props.temperature} - {props.units}</p>
        <img src={props.icon}/>
        </div>
        <p>{props.text}</p>
        <p>Wind Speed - {props.windspeed}</p>
        <p>Humidity - {props.humidity}</p>
        <p>Feels like - {props.feelslike}</p>
        <p>Visibility - {props.visibility} {props.visibilityUnit}</p>
        <p>UV - {props.UV}</p>
    </div>
  )
}

export default Card
 
//is_day toggle day-night theme