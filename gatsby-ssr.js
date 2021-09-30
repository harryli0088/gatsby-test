//note that you must have this code in gatsby-browser.js AND gatsby-ssr.js
import React from 'react'
import { RecoilRoot } from 'recoil'


export const wrapPageElement = ({element, props}) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}