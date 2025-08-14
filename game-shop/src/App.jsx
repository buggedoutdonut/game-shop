import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Banner from './assets/bg3-banner.png'
import { MainLayout } from './layout/main-layout'
import { Footer } from './layout/footer'
import GameImage from './assets/games/peak.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <div className="bannerContainer">
          <img src={Banner} className="banner"/>
          <h1 className="bannerText">THE BEST <a style={{color:'green'}}>$DEALS</a> RIGHT <br/>UNDER YOUR FINGERTIPS</h1>
      </div>
      <br/><br/>
      <h1 style={{overflow:'hidden',textAlign:'center',textShadow:'5px 5px 5px green'}}>TOP 3 BEST SELLING GAMES</h1><br/><br/><br/>
      <div className="rowContainer">
        <div className="topGames">
          <img src={GameImage} />
          <p className="title">PEAK</p>
          <p className="description">PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?</p>
        </div>
         <div className="topGames">
          <img src={GameImage} />
          <p className="title">PEAK</p>
          <p className="description">PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?</p>
        </div>
         <div className="topGames">
          <img src={GameImage} />
          <p className="title">PEAK</p>
          <p className="description">PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?</p>
        </div>
      </div>
      <div className="hottestContainer" style={{marginTop:"15vh"}}>
        <p>CHECK OUT OUR BEST PICKS FOR 2025 ⭸ </p><br/>
        <div className="hottestGameSlide">
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
        </div>
      </div>

      <div className="hottestContainer" style={{ backgroundColor:"#03541aff"}}>
        <p>NEW RELEASES ⭸ </p><br/>
        <div className="hottestGameSlide">
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
        </div>
      </div>

      <div className="hottestContainer" style={{ backgroundColor:"#720404ff"}}>
        <p>MOST WISHLISTED ⭸ </p><br/>
        <div className="hottestGameSlide">
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
          <img src={GameImage} className="hottestGameThumbnails"/>
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
