import React from 'react'
import BlankAnchor from './BlankAnchor'

const footerStyle:React.CSSProperties = {
  backgroundColor: "#222",
  color: "white",
}

const Footer = () => {
  return (
    <React.Fragment>
      <br/>
      <br/>
      <br/>
      <footer style={footerStyle}>
        <div>This site was made with <BlankAnchor href="https://reactjs.org/">React</BlankAnchor>, <BlankAnchor href="https://www.typescriptlang.org/">TypeScript</BlankAnchor>, <BlankAnchor href="https://fontawesome.com/license">FontAwesome</BlankAnchor>, and <BlankAnchor href="https://www.gatsbyjs.com/">Gatbsy</BlankAnchor>.</div>
        <br/>
        <div><BlankAnchor href="https://github.com/harryli0088/gatsby-test">GitHub Repo</BlankAnchor></div>
      </footer>
    </React.Fragment>
  )
}

export default Footer