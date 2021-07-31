
export default function WebAppModal({ openModal, idx, setModal, app }) {
  return (
    <div
      className={`web-app-modal-bg ${openModal === idx ? null : 'hide'}`}
      onClick={() => setModal(false)}
    >
      <div className="web-app-modal" onClick={(e) => e.stopPropagation()}>
        <h1>{app.name}</h1>
        <img src={app.image} alt={app.name} />
        <p>{app.description}</p>
        <h2>Tech</h2>
        <div className="modal-tech-container">
          {
            app.tech.map((t, idx) => (
              <p key={idx}>{t}</p>
            ))
          }
        </div>
        <div className='modal-btn-container'>
          <a href={app.deployedURL} target="_blank" rel="noreferrer">
            <button>
              Live
            </button>
          </a>
          <a href={app.ghRepoURL} target="_blank" rel="noreferrer">
            <button>
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
