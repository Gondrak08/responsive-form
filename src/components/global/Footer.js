import React from 'react'
import '../../styles/global/Footer.scss'

const Footer = () => {
  return (  
    <section className="footer" >
          <div className="container">
              <span>You can get this library at: <a href="https://github.com/Gondrak08/JSONSchema-validator" target="_blank" rel="noreferrer" >JsonSchema Validator</a></span>
              
              <span>
                  This website was made by <a href="https://twitter.com/vitoralecrim" target="_blank" rel="noreferrer" >@VitorAlecrim</a>
              </span>
          </div>
    </section>
  )
}

export default Footer