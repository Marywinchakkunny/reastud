import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
      <NavBar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">Delete</div>
                    </div>
                    <button className="btn btn-success">Delete</button>
                </div>
            </div>
         </div>    



    </div>
  )
}

export default Delete
