import React, { useState } from 'react'
import Nav from './Nav'
import Content from './Content'
import Top from './Top'
import SignIn from './SignIn'
import SideMenu from './SideMenu'

const App = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      <Top/>
      <SignIn/>
      <Nav menu={menu} setMenu={setMenu}/>
      <SideMenu menu={menu}/>
      <Content/> 
    </div>
  )
}

export default App