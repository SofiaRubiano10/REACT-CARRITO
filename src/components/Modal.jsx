const Modal = () => {
  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Are you sure that you want to clear your cart?</h4>
            <div className="btn-container">
                <button type="button" className="btn btn-confirm">Confirm</button>
                <button type="button" className="btn btn-cancel">Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal