import React from 'react'
import Logo from '../../../Assets/Images/vero.JPG'

function CoWorkerProfile() {
  return (
    <div className="d-flex justify-content-center">
 
  <div className="card mb-3 img-profile" style={{maxWidth: '540px'}}>
<div className="row g-0">
<div className="col-md-4">
  <img src={Logo} className="img-fluid img-profile rounded-start" alt="Logo" />
</div>
<div className="col-md-8">
  <div className="card-body">
    <h5 className="card-title">Veronica Lundin</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default CoWorkerProfile