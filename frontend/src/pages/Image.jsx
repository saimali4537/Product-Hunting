import React from 'react'
import background from '../images/img.jpg'
import Search from '../components/Serach'

const Image = () => {
  return (
    <div style={{
        backgroundImage: `url(${background})`,
        margin: -20, height: "577px", backgroundRepeat: "no-repeat", 
      }}>
        <h1 style={{textAlign: 'center',paddingTop: "100px", }}>Welcome to Product Hunting</h1>
        <div style={{alignItems: 'center',paddingTop: "100px",paddingLeft: "400px", }}><Search/></div>
      
      </div>
  )
}

export default Image