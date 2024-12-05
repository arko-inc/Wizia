import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Lastsec from '../components/Lastsec'
import Fivesec from '../components/FIvesec'
import HeroSec from '../components/HeroSec'
import CardSec from '../components/CardSec'
import Thirdsec from '../components/ThirdSec'
import Secondsec from '../components/SecondSec'
import Foursec from '../components/foursec'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <HeroSec/>
     <Secondsec/>
     <CardSec/>
     <Thirdsec/>
     <Foursec/>
     <Fivesec/>
     <Lastsec/>
     <Footer/>
    </>
  )
}

export default Home