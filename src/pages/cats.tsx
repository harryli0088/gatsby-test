import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Footer from '../Components/Footer'
import Header from '../Components/Header'

import "../index.scss"

const Cats = () => {
  return (
    <main>
      <Header>
        <h2>Cats | <Link to="/"><StaticImage className="interact" src="../images/home-solid.svg" alt="Home" height={26}/></Link></h2>
      </Header>

      <section>
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
      </section>

      <Footer/>
    </main>
  )
}

export default Cats