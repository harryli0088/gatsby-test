import React from 'react'

type Props = {
  children: React.ReactNode
}

const Header = (props: Props) => {
  return (
    <header style={{backgroundColor: "#9B59B6", lineHeight: "1.5em"}}>{props.children}</header>
  )
}

export default Header