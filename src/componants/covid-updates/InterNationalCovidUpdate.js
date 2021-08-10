import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import DateTime from '../date-time/DateTime';

function InterNationalCovidUpdate() {
    const headingText = "Welcome to Int. Covid-19 Live Updates";

    const [internationalData, setInternationalData ] = useState([]);
    const getUdpatedData = async () => {
        try {
            const res = await axios("https://api.covid19api.com/summary");
            setInternationalData(res.data.Countries);
            console.log(res.data.Countries);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getUdpatedData(); }, []);

    return (
        <div>
            <DateTime headingTextData={headingText} />
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className="bg-dark text-white">#</th>
                            <th className="bg-dark text-white">Country</th>
                            <th className="bg-dark text-white">Country Code</th>
                            <th className="bg-dark text-white">Updated Date</th>
                            <th className="bg-dark text-white">New Confirmed</th>
                            <th className="bg-warning">Total Confirmed</th>
                            <th className="bg-danger text-white">Total Deaths</th>
                            <th className="bg-success text-white">New Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            internationalData.map((e, i) => {
                                return <tr key={i}>
                                    <td>{i}</td>
                                    <th>{e.Country}</th>
                                    <td>{e.CountryCode}</td>
                                    <td>{moment(e.Date).format("DD-MM-YYYY HH:mm a")}</td>
                                    <td>{e.NewConfirmed}</td>
                                    <td className="bg-warning">{e.TotalConfirmed}</td>
                                    <td className="bg-danger text-white">{e.TotalDeaths}</td>
                                    <td className="bg-success text-white">{e.NewRecovered}</td>
                                </tr>                                
                            })
                        }
                    </tbody>
                </table>
            </div>                        
        </div>

    )
}

export default InterNationalCovidUpdate;
