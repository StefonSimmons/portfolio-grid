import React from 'react'
import stefon from '../images/stefon.jpg'

export default function Contact() {
  return (
    <>
      <div className="contacts">
        <section className="contact">
          {/* <span className="material-icons md-light">send</span> */}
          <a href="mailto:stefonsimmons1@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
        </section>
        <section className="contact">
          <a href="https://github.com/stefonsimmons" rel="noopener noreferrer" target="_blank">GitHub</a>
        </section>
        <section className="contact">
          <a href="https://linkedin.com/in/stefonsimmons" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </section>
      </div>
      <div className="about-me-img-container">
        <img src={stefon} alt="stefon" />
      </div>
    </>
  )
}
