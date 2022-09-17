import React from "react"
import data from "./data"

export default function Card(props){
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl}/>
            <div className="card--text">
                <span className="card-header">
                    <img className="card--icon" src="./images/location.png"/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}> View on Google Maps </a>
                </span>
             
                <h1 className="card--title">{props.item.title}</h1>
                <span className="card--date">{props.item.startDate} - {props.item.endDate} </span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}