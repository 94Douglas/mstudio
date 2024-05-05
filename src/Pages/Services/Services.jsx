import React from 'react'
import { FaArrowTurnDown } from "react-icons/fa6";
import { useState } from 'react';

const Services = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="content-container">


  {/* Akupunktur    */}
    <p style={{outline: 'none'}}>
  
  <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#acupunture" aria-expanded="true" aria-controls="acupunture">
    Akupunktur <FaArrowTurnDown onClick={() => setOpen(!open)} />
  </button>
  
</p>
<div className="collapse" id="acupunture">
  <div className="card card-body">
    Akupunktur <br/>
    75 minuter, 1350 kr
  </div>
</div>


{/* Gruppträning */}
<p style={{outline: 'none'}}>
  
  <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#groupTraining" aria-expanded="true" aria-controls="groupTraining">
    Gruppträning <FaArrowTurnDown onClick={() => setOpen(!open)} />
  </button>
  
</p>
<div className="collapse" id="groupTraining">
  <div className="card card-body">
  <div className='card-body'>

    Antigravity, Yoga <br/>
    60 minuter, 185 kr
  </div>
  <div className='card-body'>

    Cardio Combat <br />
    60 minuter, 185 kr
  </div>

  <div className='card-body'>

    Flow <br/>
    60 minuter, 185 kr
  </div>
  <div className='card-body'>

    Functional Training <br />
    45 minuter, 185 kr
  </div>

  <div className='card-body'>

    Mommy & Me <br />
    60 minuter, 185 kr
  </div>

  <div className='card-body'>

Prosecco Flow <br />
90 minuter, 220 kr
</div>

<div className='card-body'>

    TRX <br />
    30 minuter, 185 kr
  </div>

  </div>

</div>

{/* Massage */}
  <p style={{outline: 'none'}}>
  
  <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#massage" aria-expanded="true" aria-controls="massage">
    Massage <FaArrowTurnDown onClick={() => setOpen(!open)} />
  </button>
  
</p>
<div className="collapse" id="massage">
  <div className="card card-body">
  <div className='card-body'>

    Body Balance Massage Halvkropp<br/>
    30 minuter, 550 kr
  </div>
  <div className='card-body'>

  Body Balance Massage Helkropp <br />
    60 minuter, 850 kr
  </div>

  <div className='card-body'>

    Idrottsmassage helkropp <br/>
    45 minuter, 850 kr
  </div>

  </div>
  </div>
      {/* Massage */}
  <p style={{outline: 'none'}}>
  
  <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target="#pt" aria-expanded="true" aria-controls="pt">
    PT <FaArrowTurnDown onClick={() => setOpen(!open)} />
  </button>
  
</p>
<div className="collapse" id="pt">
  <div className="card card-body">
  <div className='card-body'>

    PT<br/>
    30 minuter, 700 kr
  </div>
  <div className='card-body'>
  PT<br/>
    60 minuter, 1250 kr
  </div>

  

  </div>
  </div>
    </div>
  )
}

export default Services