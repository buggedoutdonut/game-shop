import React from "react";

export const BestSellingCard = ({details}) =>{
    const imagePath = "../src/assets/games/" + details.id + ".png"
    const description = details.description
    console.log(imagePath)
    console.log("tubol")
    return(
        <div className="topGames">
          <img src={imagePath} />
          <p className="title">🔥 {details.name.toUpperCase()} 🔥</p><br/>
          <p className="description">{description.substring(0,200)}..</p>
        </div>
    )
   
}