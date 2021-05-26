import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function Box({ nav } ) {
  const [block, setBlock] = useState(false)


  useEffect(() => {
    setTimeout(() => setBlock(true), 2500)
  }, [])

  const lowerCaseTitle = nav.title.toLowerCase()
  return (
    <Link to={`/${lowerCaseTitle}`} className={`${nav.id} box`}>
      <section className="nav-block">
        <h4 style={block ? {display: "block"}: null}>{nav.title}</h4>
      </section>
    </Link>
  )
}
