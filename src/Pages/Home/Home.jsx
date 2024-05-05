import React from 'react'
import OwnerProfile from '../AboutUs/OwnerProfile/OwnerProfile'
import CoWorkerProfile from '../AboutUs/CoWorkerProfile/CoWorkerProfile'
import Services from '../Services/Services'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="content-container mt-5">
  <OwnerProfile />
  <CoWorkerProfile />
  <div>
  <Link type="button"
   className="btn btn-success btn-lg mt-3 mb-4"
   target="_blank"
          rel="noopener noreferrer"
          prefix=''
          to={"https://www.bokadirekt.se/places/m-studio-strandvagen-50691"}
          >
          
 
         Boka
        </Link>
  </div>


</div>
  )
}

export default Home