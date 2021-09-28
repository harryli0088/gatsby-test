import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import BlankAnchor from "../Components/BlankAnchor"
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
          <Link to="/cats"><h3>Cats</h3></Link>
          <Link to="/cats">
            <StaticImage src="../images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg" alt="sleeping cat"/>
          </Link>
          <div>
            Photo by <a href="https://unsplash.com/@ludemeula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludemeula Fernandes</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>

        <div>
          <Link to="/dogs"><h3>Dogs</h3></Link>
          <Link to="/dogs">
            <StaticImage src="../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg" alt="golden"/>
          </Link>
          <div>
            Photo by <a href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</a> on <a href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>

        <hr/>

        <br/>

        <div><p>I made this site to test out Gatsby's developer experience and static site generation, which both seem very good. In general I like Gatsby a lot and wished I had looked into it earlier. I will probably use Gatsby over create-react-app from now on. Specifically, here are the things I like:</p>

          <ul>
            <li>The CLI was very easy to use</li>
            <li>I like the static routing a lot from the pages/ directory. No more React Router shenanigans!</li>
            <li>TypeScript support is built-in and was as easy as changing .js files to .tsx</li>
            <li>The static site generation looks great. Gatsby even automatically generates a sitemap which is great. I'm looking forward to (hopefully) faster page loads and the SEO benefits</li>
            <li>The build processes seems fairly straightforward and I was easily able to deploy to GitHub Pages</li>
            <li>I love the Gatsby images component. It handles conversion to webp, multiple image sizes, and picture tag for me.</li>
            <li>Testing was easy to set up</li>
          </ul>
        </div>

        <div>
          <p>TODO</p>

          <ul>
            <li>HTML meta header tags</li>
          </ul>
        </div>

        <div>
          <p>Useful Documentation:</p>

          <ul>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/tutorial/part-0/">CLI Set Up</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/quick-start/">Getting Started</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">TypeScript</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/how-to/styling/global-css/">Global CSS</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/">Robots.txt</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/">Deploying a Gatsby App to GitHub Pages</BlankAnchor></li>
            <li><BlankAnchor href="https://www.gatsbyjs.com/docs/how-to/testing/">Testing Guides</BlankAnchor></li>
          </ul>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default IndexPage