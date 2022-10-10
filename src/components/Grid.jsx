import { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Box from './Box'
import { navs } from '../data/navData'
import Modal from './layout/Modal'
import About from './About'
import Contact from './Contact'
import WebApps from './WebApps'

export default function Grid() {
  const history = useHistory()
  const [openModal, setModal] = useState(false)


  useEffect(() => {
    history.push('/')
  }, [history])

  return (
    <main className="main-grid">
      <Modal openModal={openModal} setModal={setModal}>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />
        <Route path="/web-apps" render={() => <WebApps openModal={openModal} setModal={setModal} />} />
      </Modal>

      {
        navs.map((nav, idx) => (
          <Box key={idx} nav={nav} openModal={openModal} setModal={setModal}/>
        ))
      }
      <div onClick={() => {
        setModal(false)
        history.push('/')
      }} className={`modal-bg ${openModal ? 'open' : 'close'}`}></div>
    </main>
  )
}
