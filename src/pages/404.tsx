import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../Components/Header"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <Header><h1>Page not found</h1></Header>
      
      <section>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/"><h3>Go home</h3></Link>
        </p>

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
          <a href="./dogs"><h3>Dogs</h3></a>
          <a href="./dogs">
            <StaticImage src="../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg" alt="golden"/>
          </a>
          <div>
            Photo by <a href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</a> on <a href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
