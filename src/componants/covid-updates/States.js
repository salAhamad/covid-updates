import React from 'react'

export default function States(stateData) {
    console.log(stateData);
    return (
        <div className="d-flex justify-content-center mb-5">
            <select class="form-control w-50" id="exampleFormControlSelect1">
                <option>-- Select State--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}
