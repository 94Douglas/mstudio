import React from 'react'
import { FaArrowTurnDown } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="content-container">


     
    <p>
  
  <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Akupunktur <FaArrowTurnDown />
  </button>
  
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
      
    </div>
  )
}

export default Services