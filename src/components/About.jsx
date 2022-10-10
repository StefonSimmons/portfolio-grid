import React from 'react'
import stefon from '../images/stefon.jpg'

export default function About({openModal, setModal}) {
  return (
    <>
        <p className="about-me">Welcome to my home online! <br></br><br></br>I’m a self-motivated artist and administrator. My creativity as an <span>artist</span> and organizational skills as an administrator are reasons why I thrive within <br></br><span>software development</span>. <br></br><br></br> People I've collaborated with say that I'm a strong problem-solver, creative and ambitious. I have an adaptive mindset for new processes and technology.<br></br><br></br>So, feel free to <span>Reach Out</span> so we can work together on your project / goals!
        </p>
        <div className="about-me-img-container">
          <img src={stefon} alt="stefon" />
        </div> 
    </>
  )
}
