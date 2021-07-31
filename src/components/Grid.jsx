import { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Box from './Box'
import { navs } from '../data/navData'
import About from './About'
import Contact from './Contact'
import WebApps from './WebApps'

export default function Grid() {
  const history = useHistory()
  const [openModal, setModal] = useState(null)


  useEffect(() => {
    history.push('/')
  }, [history])

  return (
    <main className="main-grid">
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/web-apps" render={() => <WebApps openModal={openModal} setModal={setModal} />} />

      {
        navs.map((nav, idx) => (
          <Box key={idx} nav={nav} />
        ))
      }
    </main>
  )
}
