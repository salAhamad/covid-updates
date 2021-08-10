import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
// import States from './States';
import DateTime from './../date-time/DateTime';

function Covid() {
    const [ data, setData ] = useState([]);
    // const [statesData, setStatesData] = useState([]);

    const getCovidData = async () => {
        axios.get("https://api.covid19india.org/data.json").then(response => {
            const totalReport = response.data.statewise;
            setData(totalReport);
            // console.log(totalReport);
        }).catch(error =>{console.log(error);})
    }

    useEffect(() => { getCovidData() }, []);
    const headingText = "Welcome to Covid-19 Live Updates";
   
    return (
        <>
            <DateTime headingTextData={headingText} />
            <div className="container">
                <div className="d-flex justify-content-center mb-5 align-items-center">
                    <h5 className="me-4"><strong>States</strong></h5>
                    <select className="form-control w-50">
                        { data.map((e, i) => <option key={i}>{e.state}</option>) }
                    </select>
                </div>
                <div className="row gy-4">
                    {/* <Cards data= {data} /> */}
                    {
                        data.map((e, i) =>{
                            return <div className="col-4" key={i}>
                                <div className="card p-4">
                                    <p>Total Active Cases</p>
                                    <h3>{ e.active }</h3>
                                </div>
                            </div>
                        })

                    }
                </div>
            </div>
        </>
    )
}

export default Covid;
