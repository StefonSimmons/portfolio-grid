import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function Box({ nav, setModal }) {
  const [block, setBlock] = useState(false)


  useEffect(() => {
    setTimeout(() => setBlock(true), 2500)
  }, [])

  const lowerCaseTitle = nav.title.toLowerCase()
  return (
    <>
      {
        lowerCaseTitle === 'resume' ?
          <a
            href="https://drive.google.com/file/d/1yanrv5edg4dpsqsD5LdRrncJKKR7A4Xw/view?usp=sharing"
            className={`${nav.id} box`}
            target="_blank"
            rel="noreferrer"
          >
            <section className="nav-block">
              <h4 style={block ? { display: "block" } : null}>{nav.title}</h4>
            </section>
          </a>
          :
          <Link
            onClick={() => setModal(true)}
            to={`/${lowerCaseTitle.replace(' ', '-')}`}
            className={`${nav.id} box`}
          >
            <section className="nav-block">
              <h4 style={block ? { display: "block" } : null}>{nav.title}</h4>
            </section>
          </Link>
      }
    </>
  )
}
