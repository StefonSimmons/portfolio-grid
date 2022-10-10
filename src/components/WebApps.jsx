import projects from '../data/projects.json'

export default function WebApps() {


  const styleAppImg = (image, pos) => {
    const webApp = {
      gridColumn: `${pos <= 5 ? pos + 2 : (pos - 5) + 2}/span 2`,
      gridRow: `${pos <= 5 ? pos * 3 + 1 : (pos - 6) * 3 + 1}/ span 3`
    }
    return webApp
  }

  return (
    <>
      <div
        className='web-apps'
      >
        {
          // projects.map((app, idx) => {
          //   return (
          //     <div style={styleAppImg(app.image, idx)}>
          //       <img src={app.image} alt={app.name} key={idx} />
          //     </div>
          //   )
          // })
        }
      </div>
    </>
  )
}
