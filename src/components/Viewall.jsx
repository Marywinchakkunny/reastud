import React, { useState } from 'react'
import NavBar from './NavBar'

const Viewall = () => {
  const [data, changeData] = useState(
    [
      { "name": "helna", "admission no": 101, "roll no": 1 },
      { "name": "mary", "admission no": 104, "roll no": 21 },
      { "name": "dazzle", "admission no": 401, "roll no": 61 },
    ]
  )


  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row g-3">
         {data.map(
          (value,index)=>{return  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6"></div>
              <div class="card">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/passport-size-photo-5909445-4962115.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>}
         )}
        </div>
      </div>
    </div>
  )
}

export default Viewall
