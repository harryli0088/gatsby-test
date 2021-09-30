import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import BlankAnchor from '../Components/BlankAnchor'
import Counter from '../Components/Counter'
import DefaultHelmet from '../Components/DefaultHelmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import "../index.scss"

const Dogs = () => {
  const [error, setError] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const fetchImage = useCallback(async() => {
    try {
      setError("")
      const result = await fetch("https://dog.ceo/api/breeds/image/random")
      setImgUrl((await result.json()).message)
    }
    catch(err) {
      console.error(err)
      setError(err.message)
    }
  }, [])

  return (
    <main>
      <DefaultHelmet/>
      <Helmet>
        <title>Gatsby Test Site - Dogs</title>
      </Helmet>

      <Header>
        <h2>Dogs | <Link to="/"><StaticImage className="interact" src="../images/home-solid.svg" alt="Home" height={26}/></Link></h2>
      </Header>

      <section>
        <Counter/>

        <hr/>
        <br/>
        <div>
          <StaticImage src="../images/lui-peng-ybHtKz5He9Y-unsplash.jpg" alt="beautiful dog"/>
          <div>
            Photo by <BlankAnchor href="https://unsplash.com/@luipeng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lui Peng</BlankAnchor> on <BlankAnchor href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</BlankAnchor>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/jamie-street-UtrE5DcgEyg-unsplash.jpg" alt="cute dog"/>
          <div>
            Photo by <BlankAnchor href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</BlankAnchor> on <BlankAnchor href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</BlankAnchor>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg" alt="golden"/>
          <div>
            Photo by <BlankAnchor href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</BlankAnchor> on <BlankAnchor href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</BlankAnchor>
          </div>
        </div>

        <br/>
        <br/>

        <div>
          <div><button onClick={fetchImage}>Get a Random Dog Image</button></div>
          {error && <div>{error}</div>}
          <br/>
          {imgUrl && <img src={imgUrl} alt="random dog" style={{width: "100%"}}/>}
          <div>
            Via <BlankAnchor href="https://dog.ceo/">Dog API</BlankAnchor>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Dogs