import React from 'react'

function Cards({data}) {
    return (
        <div className="col-4">
            <div className="card p-4">
                <p>Total Active Cases</p>
                {/* <h3>{ data.active }</h3> */}
            </div>
        </div>
    )
}

export default Cards;
