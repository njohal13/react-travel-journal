import React from "react"
import data from "./data"
import Card from "./Card"
import Navbar from "./Navbar"

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        
        )
    })
    
    return (
        <div>
            <Navbar />
            {cards}
            
        </div>
    )
    
    
}