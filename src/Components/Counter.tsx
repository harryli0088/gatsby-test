import React from "react"
import { useRecoilState } from "recoil"

import counterState from "../recoil/counter"
import BlankAnchor from "./BlankAnchor"


const Counter = () => {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div>
      <br/>
      <div><b>Recoil Counter:</b> {count}</div>
      <div><button onClick={() => setCount(count + 1)}>Increment</button></div>
      <p>This app uses <BlankAnchor href="https://recoiljs.org/">Recoil</BlankAnchor> as a state manager for React. The global state is persisted across pages with Gatsby's via the <BlankAnchor href="https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement">wrapPageElement API in the gatsby-browser.js file</BlankAnchor>. If you increment the count then change pages, the count will persist.</p>
      <br/>
    </div>
  )
}

export default Counter