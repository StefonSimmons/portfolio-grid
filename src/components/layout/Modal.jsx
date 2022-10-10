import { Link } from "react-router-dom"

export default function Modal(props) {


  return (
    <div className={`modal ${props.openModal ? 'open' : 'close'}`}>
      <header className='modal-header'>
          <h1>stefon_simmons</h1>
        <Link to="/">
          <button onClick={() => props.setModal(false)} className="modal-close">
            X
          </button>
        </Link>
      </header>
      <div className="modal-content-container">
        {props.children}
      </div>
    </div>
  )
}
