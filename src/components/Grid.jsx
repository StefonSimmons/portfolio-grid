import { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Box from './Box'
import { navs } from '../data/navData'
import About from './About'
import Contact from './Contact'
import WebApps from './WebApps'

export default function Grid() {
  const history = useHistory()

  useEffect(() => {
    history.push('/')
  },[history])

  return (
    <main className="main-grid">
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/web-apps" component={WebApps}/>
      {
        navs.map((nav, idx) => (
          <Box key={idx} nav={nav} />
        ))
      }
    </main>
  )
}
