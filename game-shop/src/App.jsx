import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './assets/bg3-banner.png'
import { MainLayout } from './layout/main-layout'
import { Footer } from './layout/footer'
import GameImage from './assets/games/peak.png'
import { BestSellingCard } from './components/bestSellingCard'
import { AnimationFunction } from "./js/observer-anim"
import { SlideCards } from './components/mostSlideCards'

function App() {
  const [bestSelling,setBestSelling] = useState()
  const [bestPicks,setBestPicks] = useState()
  const [newRelease,setNewRelease] = useState()
  const [mostWishlisted,setMostWishlisted] = useState()

  const fetchData = async(url,code) =>{
    const response = await fetch(url)
    const parseResponse = await response.json()
    switch(code){
      case 1:
        setBestSelling(parseResponse)
        break
      case 2:
        setBestPicks(parseResponse)
        break
      case 3:
        setNewRelease(parseResponse)
        break
      case 4:
        setMostWishlisted(parseResponse)
        break
    }
  }

  useEffect(() =>{
    fetchData("http://localhost:3000/BestSelling",1)
    fetchData("http://localhost:3000/Recommended",2)
    fetchData("http://localhost:3000/ReleaseDate",3)
    fetchData("http://localhost:3000/MostWishlisted",4)
  },[])

  useEffect(()=>{
        {AnimationFunction()}
  },[mostWishlisted])


  return (
    <MainLayout>
      <div className="bannerContainer">
          <img src={Banner} className="banner"/>
          <h1 className="bannerText">THE BEST <a style={{color:'green'}}>$DEALS</a> RIGHT <br/>UNDER YOUR FINGERTIPS</h1>
      </div>
      <br/><br/>
      <h1 style={{overflow:'hidden',textAlign:'center',textShadow:'5px 5px 5px green'}}>TOP 3 BEST SELLING GAMES</h1><br/><br/><br/>
      <div className="rowContainer">
          {
            bestSelling == undefined? <h1>Please wait.</h1>:
            bestSelling.map(game => {
              return <BestSellingCard key={game.id} details={game}/>
            })
          }
      </div>
      <div className="hottestContainer" style={{marginTop:"15vh"}}>
        <p>CHECK OUT OUR BEST PICKS FOR 2025 ⭸ </p><br/>
        <div className="hottestGameSlide">
          {
            bestPicks == undefined? <h1>Please wait.</h1>:
            bestPicks.map(game =>{
              return <SlideCards key={game.id} details={game} />
            })
          }
        </div>
      </div>

      <div className="hottestContainer" style={{ backgroundColor:"#122116ff"}}>
        <p>NEW RELEASES ⭸ </p><br/>
        <div className="hottestGameSlide">
         {
          newRelease == undefined?<h1>Please wait.</h1>:
          newRelease.map(game =>{
            return <SlideCards key={game.id} details={game} />
          })
         }
        </div>
      </div>

      <div className="hottestContainer" style={{ backgroundColor:"#291212ff"}}>
        <p>MOST WISHLISTED ⭸ </p><br/>
        <div className="hottestGameSlide">
        {
          mostWishlisted == undefined?<h1>Please wait.</h1>:
          mostWishlisted.map(game =>{
            return <SlideCards key={game.id} details={game} />
          })
        }
        </div>
      </div>
      <div className="catalogueContainer">
        <h3>Can't get enough of the games?</h3>
        <h5>You can check our whole catalogue containing many games that can be played on PC.<br/>
        If you have any request for any game to be available on the platform, contact us on our email down below.
        </h5><br/>
        <button style={{backgroundColor:'green'}}>Full Catalogue</button>
      </div>
      <Footer />
      
    </MainLayout>
  )
}

export default App
