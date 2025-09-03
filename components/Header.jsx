import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Casting Boolean</h1>
      <select name="genre" id="">
        <option value="male">Actors</option>
        <option value="female">Actresses</option>
        <option value="all">All</option>
      </select>
    </header>
  )
}

export default Header