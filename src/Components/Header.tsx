import React from 'react'

type Props = {
  children: React.ReactNode
}

const Header = (props: Props) => {
  return (
    <header style={{backgroundColor: "#9B59B6"}}>{props.children}</header>
  )
}

export default Header