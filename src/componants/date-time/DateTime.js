import moment from 'moment';
import React from 'react'

function DateTime({headingTextData}) {
    const currentDate = moment().format("DD-MM-YYYY");
    const currentTime = moment().format("HH:MM");
    // let time = new Date().toLocaleTimeString();

    return (
        <header className="py-3 border-bottom d-flex align-itmes-center bg-light mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-4 d-flex align-items-center">
                        <button className="btn btn-light"> Current Date: <strong>{ currentDate } </strong></button>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <h5 className="mb-0"><strong>{ headingTextData }</strong></h5>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-end">
                        <button className="btn btn-light"> Current Time: <strong>{ currentTime } </strong></button>
                    </div>
                </div>
            </div>
                
        </header>
    )
}

export default DateTime
