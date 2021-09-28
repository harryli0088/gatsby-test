import React from "react"
import { Helmet } from "react-helmet"

const DefaultHelmet = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Test Site</title>
      <link rel="canonical" href="https://harryli0088.github.io/gatsby-test/" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <meta name="description" content="A website I made to test Gatsby"/>
      <meta name="keywords" content="gatsby,react,typescript"/>

      <meta property="og:image" content="https://harryli0088.github.io/gatsby-test/screenshot.png"/>
      <meta property="og:site_name" content="gatsby-test"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Gatsby Test Site"/>
      <meta property="og:url" content="https://harryli0088.github.io/gatsby-test/"/>
      <meta property="og:description" content="A website I made to test Gatsby"/>
    </Helmet>
  )
}

export default DefaultHelmet