import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Top from './Top'
import SignIn from './SignIn'

const App = () => {
  return (
    <div>
      <Top/>
      <SignIn/>
      <Nav/>
    <Content/>
    </div>
  )
}

export default App