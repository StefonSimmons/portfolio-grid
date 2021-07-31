import React from 'react'
import projects from '../data/projects.json'

export default function WebApps() {

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
            <div
              key={idx}
              className="web-app"
              style={styleAppImg(app.image, idx)}
            >
              {/* <img src={app.image} alt={app.name}/> */}
            </div>
          )
        })
      }
    </>
  )
}
