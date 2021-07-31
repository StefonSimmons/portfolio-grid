import { Fragment, useState } from 'react'
import projects from '../data/projects.json'
import WebAppModal from './WebAppModal'

export default function WebApps() {

  const [openModal, setModal] = useState(null)

  const styleAppImg = (image, pos) => {
    const webApp = {
      backgroundImage: `url(${image})`,
      gridColumn: `${pos <= 5 ? pos + 2 : (pos - 5) + 2}`,
      gridRow: `${pos <= 5 ? pos * 3 + 1 : (pos - 6) * 3 + 1}/ span 3`
    }
    return webApp
  }

  return (
    <>
      {
        projects.map((app, idx) => {
          return (
            <Fragment key={idx}>
              <div
                className="web-app"
                style={styleAppImg(app.image, idx)}
                onClick={() => setModal(idx)}
              >
              </div>
              <WebAppModal openModal={openModal} idx={idx} setModal={setModal} app={app} />
            </Fragment>
          )
        })
      }
    </>
  )
}
