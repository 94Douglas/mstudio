import React from 'react'

function OwnerProfile() {
  return (
    <div className="d-flex justify-content-center">
 
  <div className="card mb-3" style={{maxWidth: '540px'}}>
<div className="row g-0">
<div className="col-md-4">
  <img src="https://cdn.bokadirekt.se/ucdn/e7157bdc-e1a6-450e-9a67-1268a1ce522f/" className="img-fluid rounded-start" alt="..." />
</div>
<div className="col-md-8">
  <div className="card-body">
    <h5 className="card-title">Mark Anthony</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  
<button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#exampleModal">
Mer om Mark
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">Mer info</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body">
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Stäng</button>
  </div>
</div>
</div>
</div>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default OwnerProfile