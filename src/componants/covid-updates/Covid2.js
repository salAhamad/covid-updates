import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DateTime from '../date-time/DateTime';

function Covid2() {
    const headingText = "Covid 2 - Cases";
    const [covidData, setCovidData] = useState([]);
    const apiUpdatedData = async () => {
        axios.get("https://api.covid19india.org/v4/min/timeseries.min.json").then(response =>{
            const apiUpdated = response.data;
            setCovidData(apiUpdated);
        }).catch(error => console.log(error));
    }
    useEffect(() => apiUpdatedData(), []);

    return (
        <div>
            <DateTime headingTextData={headingText} />
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>Dates</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             Object.keys(covidData).map((keys, i) => {
                                return <tr key={i}>
                                    <td>{i}</td>
                                    <th>{keys}</th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Covid2;
