import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import BlankAnchor from '../Components/BlankAnchor'
import Counter from '../Components/Counter'
import DefaultHelmet from '../Components/DefaultHelmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import "../index.scss"

const Cats = () => {
  const [error, setError] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const fetchImage = useCallback(async() => {
    try {
      setError("")
      const result = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&order=RANDOM`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.CAT_API_KEY
        }
      })
      setImgUrl((await result.json())[0].url)
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
        <title>Gatsby Test Site - Cats</title>
      </Helmet>

      <Header>
        <h2>Cats | <Link to="/"><StaticImage className="interact" src="../images/home-solid.svg" alt="Home" height={26}/></Link></h2>
      </Header>

      <section>
        <Counter/>

        <hr/>

        <p>This section tests Gatsby's <BlankAnchor href="https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/">StaticImage</BlankAnchor> component.</p>

        <br/>
        <div>
          <StaticImage src="../images/kari-shea-eMzblc6JmXM-unsplash.jpg" alt="chair cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kari Shea</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg" alt="butterfly cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@_k_arinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karina Vorozheeva</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" alt="sleeping cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@ludemeula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludemeula Fernandes</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <hr/>

        <p>This section tests dynamically generated content from user interactions.</p>

        <div>
          <div><button onClick={fetchImage}>Get a Random Cat Image</button></div>
          {error && <div>{error}</div>}
          <br/>
          {imgUrl && <img src={imgUrl} alt="random cat" style={{width: "100%"}}/>}
          <div>
            Via <BlankAnchor href="https://thecatapi.com/">Cat API</BlankAnchor>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Cats