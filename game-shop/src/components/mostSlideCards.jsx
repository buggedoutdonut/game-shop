import React from "react"

export const SlideCards = ({details}) =>{
    const imagePath = "../src/assets/games/"+details.id+".png"
    return(
        <img src={imagePath} className="hottestGameThumbnails"/>
    )
}