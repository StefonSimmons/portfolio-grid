import projects from '../data/projects.json'

export default function WebApps() {
  let rowPos = -1

  const styleAppImg = (idx) => {
    const mod = (idx % 5)
    const colPos = mod * 2 + 1
    if (!mod) {
      rowPos += 2
    }
    const webApp = {
      gridColumn: `${colPos} / span 2`,
      gridRow: `${rowPos}/ span 2`,
      padding: '4px',
    }
    return webApp
  }

  return (
    <>
      <div
        className='web-apps'
      >
        {
          projects.map((app, idx) => {
            return (
              <a href={app.deployedURL} style={styleAppImg(idx, app.image)} target="_blank" rel="noreferrer" key={idx}>
                <img src={app.image} alt={app.name}/>
              </a>
            )
          })
        }
      </div>
    </>
  )
}
