import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div>
            <NavBar/>
    
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">NAME</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">ADDMISSION NUMBER</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">ROLL NO</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">PARENT NAME</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-control">COLLEGE NAME</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">DATE OF BIRTH</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">EMAIL</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">PASSWORD</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">CONFIRM PASSWORD</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-6">
                                <label htmlFor="" className="form-control">SUBMIT</label>
                                <button className="btn btn btn-success">Submit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )

  }
            export default AddStudent
