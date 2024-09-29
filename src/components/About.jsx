import React from 'react'
import stefon from '../images/stefon.jpg'

export default function About({openModal, setModal}) {

  const [years, setYears] = React.useState()
  React.useEffect(() => {
    
    setYears(getYear())
  }, [])

  function getYear(){
    // gets the number of years from my start date at datadog.
    const startDate = new Date('9/13/2021')
    const today = new Date()
    const timeDiff = Math.abs(today - startDate)
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    const numOfYears = dayDiff / 365
    const whole = Math.floor(numOfYears)
    const mod = numOfYears % whole
    return whole + (mod >= .5 && .5 )
  }
  
  return (
    <>
        <p className="about-me">            Welcome to my home online! <br></br><br></br>I’m a multifaceted professional with a decade-long career trajectory encompassing roles in <span>website development</span>, education, and the arts. <br></br><br></br>My journey consists of 6.5 years as a Registrar at a post-secondary school for film and television, followed by a year as a Software Engineer Instructor at a distinguished software engineering bootcamp. Over the last {years} years, I’ve been an integral Web Developer on Datadog's Websites Team, leveraging my expertise in JavaScript, HTML, CSS, and API integrations.<br></br><br></br>Beyond the tech realm, I bring an artistic touch to my initiatives as a <span>singer, songwriter and painter</span>. This combination of technical proficiency and creative flair enables me to hone my skills in versatile problem-solving. <br></br><br></br> People I've collaborated with say that I'm a strong problem-solver, who demonstrates initiative, and pays close attention to detail. I have an adaptive mindset for new processes and love to create.<br></br><br></br>Let's <span>connect</span> and expand our network!

        </p>
        <div className="about-me-img-container">
          <img src={stefon} alt="stefon" />
        </div> 
    </>
  )
}
