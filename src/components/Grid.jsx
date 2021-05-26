import { Route } from 'react-router-dom'
import Box from './Box'
import { navs } from '../data'
import About from './About'
import Contact from './Contact'

export default function Grid() {

  return (
    <main>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      {
        navs.map((nav, idx) => (
          <Box key={idx} nav={nav} />
        ))
      }
    </main>
  )
}
