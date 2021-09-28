import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import DefaultHelmet from '../Components/DefaultHelmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import "../index.scss"

const Dogs = () => {
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
        <div>
          <StaticImage src="../images/lui-peng-ybHtKz5He9Y-unsplash.jpg" alt="beautiful dog"/>
          <div>
            Photo by <a href="https://unsplash.com/@luipeng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lui Peng</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/jamie-street-UtrE5DcgEyg-unsplash.jpg" alt="cute dog"/>
          <div>
            Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <StaticImage src="../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg" alt="golden"/>
          <div>
            Photo by <a href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</a> on <a href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Dogs