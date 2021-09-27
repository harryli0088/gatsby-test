import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

import "../index.scss"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <Header>
        <h1>Gatsby Test Site <span role="img" aria-label="Party popper emoji">🎉</span></h1>
      </Header>

      <section>
        <div>
          <a href="./cats"><h3>Cats</h3></a>
          <a href="./cats">
            <StaticImage src="../images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" alt="sleeping cat"/>
          </a>
          <div>
            Photo by <a href="https://unsplash.com/@ludemeula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludemeula Fernandes</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>

        <div>
          <a href="./dogs"><h3>Dogs</h3></a>
          <a href="./dogs">
            <StaticImage src="../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg" alt="golden"/>
          </a>
          <div>
            Photo by <a href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</a> on <a href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        

        <hr/>

        <br/>

        <div><p>I made this site to test out Gatsby's developer experience and static site generation.</p></div>

        <div>
          <p>I wanted to explore Gatsby's:</p>

          <ul>
            <li>CLI</li>
            <li>Routing</li>
            <li>TypeScript support</li>
            <li>Static site generation</li>
            <li>Build process</li>
            <li>Images</li>
          </ul>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default IndexPage