import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import "../styles/style.css";
// import "../styles/demo.css";
export const Calendar = () => {
    const { dateEvent, setDateEvent } = useState({
        date: new Date().getDate(),
        day: new Date().getDay(),
        month: new Date().getMonth(),
        year: new Date().getFullYear,
        events: [],
    });
    //submit form event 
    let handleSubmit = async (event) => {
        event.preventDefault();
    }
    return (

        <Fragment>
            <main className='cd__main' >
                {/* <!-- Start DEMO HTML (Use the following code into your project)--> */}
                <div id='calendar' ></div>

                <script src='./utilities/calendarUtil.js'></script>

                {/* <!-- Add modal --> */}

                <div className="modal fade edit-htmlForm htmlForm-group" id="htmlForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="modal-title">Add Event</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form id="myhtmlForm">
                                <div className="modal-body">
                                    <div className="alert alert-danger " role="alert" id="danger-alert" style={{ display: 'none' }}>
                                        End date should be greater than start date.
                                    </div>
                                    <div className="htmlForm-group">
                                        <label htmlFor="event-title">Event name <span className="text-danger">*</span></label>
                                        <input type="text" className="htmlForm-control" id="event-title" placeholder="Enter event name" required />
                                    </div>
                                    <div className="htmlForm-group">
                                        <label htmlFor="start-date">Start date <span className="text-danger">*</span></label>
                                        <input type="date" className="htmlForm-control" id="start-date" placeholder="start-date" required />
                                    </div>
                                    <div className="htmlForm-group">
                                        <label htmlFor="end-date">End date - <small className="text-muted">Optional</small></label>
                                        <input type="date" className="htmlForm-control" id="end-date" placeholder="end-date" />
                                    </div>
                                    <div className="htmlForm-group">
                                        <label htmlFor="event-color">Color</label>
                                        <input type="color" className="htmlForm-control" id="event-color" value="#3788d8" />
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-success" onSubmit={handleSubmit} id="submit-button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!-- Delete Modal --> */}
                <div className="modal fade" id="delete-modal" tabIndex="-1" role="dialog" aria-labelledby="delete-modal-title" aria-hidden="true">
                    <div className="modal-dialog modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="delete-modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center" id="delete-modal-body">
                                Are you sure you want to delete the event?
                            </div>
                            <div className="modal-footer border-0">
                                <button type="button" className="btn btn-secondary rounded-sm" data-dismiss="modal" id="cancel-button">Cancel</button>
                                <button type="button" className="btn btn-danger rounded-lg" id="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>


            </main>


        </Fragment>
    )
}



