import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./table.css"


const Table = () => {
    const [filterValue, setFilterValue] = useState('');

    const Response = [
        {
            "count": 1,
            "data": [
                {
                    "bill_date": "2023-05-27",
                    "bill_no": "45122",
                    "date": "2023-05-24",
                    "doctor": "Dr. Raveendran",
                    "eta": "2023-05-24 17:23:19",
                    "has_result": true,
                    "hospital_id": "DH2023/098956",
                    "is_eta_crossed": false,
                    "lab": "Aswini Hospital Thrissur",
                    "order_id": 13936,
                    "order_no": "A13670",
                    "orderline_id": 47038,
                    "patient_details": {
                        "age": 0,
                        "bill_date": "2023-05-27",
                        "bill_no": "45122",
                        "gender": false,
                        "patient_name": "NANCY"
                    },
                    "patient_name": "NANCY",
                    "result": [
                        {
                            "attachment": "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/05834e3ec6f95871be56f5eb711a1c84cf4337be",
                            "id": 124240,
                            "line_id": 47038
                        }
                    ],
                    "status": "Ready",
                    "test_name": "Anti Leukemia 1 Serum"
                }
            ],
            "status": "Success"
        },
        {
            "count": 2,
            "data": [
                {
                    "bill_date": "2023-05-27",
                    "bill_no": "45122",
                    "date": "2023-05-24",
                    "doctor": "Dr.Arun K Thambi",
                    "eta": "2023-05-24 17:23:19",
                    "has_result": true,
                    "hospital_id": "DH2023/095456",
                    "is_eta_crossed": false,
                    "lab": "Aswini Hospital Thrissur",
                    "order_id": 13936,
                    "order_no": "A13670",
                    "orderline_id": 47038,
                    "patient_details": {
                        "age": 0,
                        "bill_date": "2023-05-27",
                        "bill_no": "45122",
                        "gender": false,
                        "patient_name": "Sankaranarayanan"
                    },
                    "patient_name": "Sankaranarayanan",
                    "result": [
                        {
                            "attachment": "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/05834e3ec6f95871be56f5eb711a1c84cf4337be",
                            "id": 124240,
                            "line_id": 47038
                        }
                    ],
                    "status": "Partial Report",
                    "test_name": "*Rapid Dengue Test (NS1 Ag & IgM/IgG Ab)"
                }
            ],
            "status": "Success"
        },
        {
            "count": 3,
            "data": [
                {
                    "bill_date": "2023-05-27",
                    "bill_no": "45122",
                    "date": "2023-05-24",
                    "doctor": "Dr.Abdul siddique",
                    "eta": "2023-05-24 17:23:19",
                    "has_result": true,
                    "hospital_id": "DH2023/098456",
                    "is_eta_crossed": false,
                    "lab": "Aswini Hospital Thrissur",
                    "order_id": 13936,
                    "order_no": "A13670",
                    "orderline_id": 47038,
                    "patient_details": {
                        "age": 0,
                        "bill_date": "2023-05-27",
                        "bill_no": "45122",
                        "gender": false,
                        "patient_name": "Sankaranarayanan"
                    },
                    "patient_name": "Baby Alan",
                    "result": [
                        {
                            "attachment": "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/05834e3ec6f95871be56f5eb711a1c84cf4337be",
                            "id": 124240,
                            "line_id": 47038
                        }
                    ],
                    "status": "Lab dropped",
                    "test_name": "Anti Leukemia 1 Serum"
                }
            ],
            "status": "Success"
        },
        {
            "count": 4,
            "data": [
                {
                    "bill_date": "2023-05-27",
                    "bill_no": "45122",
                    "date": "2023-05-24",
                    "doctor": "Dr.Vignesh Muraleedharan",
                    "eta": "2023-05-24 17:23:19",
                    "has_result": true,
                    "hospital_id": "DH2023/093426",
                    "is_eta_crossed": false,
                    "lab": "Aswini Hospital Thrissur",
                    "order_id": 13936,
                    "order_no": "A13670",
                    "orderline_id": 47038,
                    "patient_details": {
                        "age": 0,
                        "bill_date": "2023-05-27",
                        "bill_no": "45122",
                        "gender": false,
                        "patient_name": "Baby Anirudh"
                    },
                    "patient_name": "Baby Alan",
                    "result": [
                        {
                            "attachment": "https://accesslabz.s3.ap-south-1.amazonaws.com/odoo/05834e3ec6f95871be56f5eb711a1c84cf4337be",
                            "id": 124240,
                            "line_id": 47038
                        }
                    ],
                    "status": "Ready",
                    "test_name": "Comprehensive leukemia - Basic Lineage Panel"
                }
            ],
            "status": "Success"
        },
    ];

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const filteredData = Response.filter((item) => {
        const { doctor, patient_name, test_name } = item.data[0];
        return (
            doctor.toLowerCase().includes(filterValue.toLowerCase()) ||
            patient_name.toLowerCase().includes(filterValue.toLowerCase()) ||
            test_name.toLowerCase().includes(filterValue.toLowerCase())
        );
    });

    return (
        <div className='page-body d-flex flex-column align-items-center'>
            <div className='head-container d-flex flex-row justify-content-between'>
                <div className="patient_report_title">Patient Reports</div>
                <div className="search-filter-container d-flex flex-row">
                    <div className="applyfilter">Apply Filter <i className='fa fa-filter'></i></div>
                    <div className="searchbox">
                        <input placeholder='Search by Doctor Name/ Patient Name/ Test Name...'
                            value={filterValue}
                            onChange={handleFilterChange}
                        />
                        <i className='fa fa-search'></i>
                    </div>
                </div>
            </div>
            <div className='table-container'>
                <table className="tg">
                    <thead className="table-head">
                        <tr>
                            <th className="tg-head">Order No</th>
                            <th className="tg-head">Date</th>
                            <th className="tg-head">Patient Name</th>
                            <th className="tg-head">Hospital ID</th>
                            <th className="tg-head">Test Name</th>
                            <th className="tg-head">Doctor Name</th>
                            <th className="tg-head">ETA</th>
                            <th className="tg-head">Status</th>
                            <th className="tg-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterValue ?
                            filteredData.map((item, index) => (
                                item.data.map((dataItem, dataIndex) => (
                                    <tr className="table-content" key={dataIndex}>
                                        <td className="tg-content">{dataItem.order_no}</td>
                                        <td className="tg-content">{dataItem.date}</td>
                                        <td className="tg-content">{dataItem.patient_name}</td>
                                        <td className="tg-content">{dataItem.hospital_id}</td>
                                        <td className="tg-content">{dataItem.test_name}</td>
                                        <td className="tg-content">{dataItem.doctor}</td>
                                        <td className="tg-content">{dataItem.eta}</td>
                                        <td className="tg-content report-status"><div className={dataItem.status === 'Ready' ? 'ready-box' : dataItem.status === 'Partial Report' ? 'partial-box' : 'dropped-box'}>
                                            {dataItem.status}</div></td>
                                        <td className="tg-content"><div className='report-icons'><i className="fa fa-download"></i><i className="fa fa-message"></i></div></td>
                                    </tr>
                                ))
                            ))
                            : Response.map((item, index) => (
                                item.data.map((dataItem, dataIndex) => (
                                    <tr className="table-content" key={dataIndex}>
                                        <td className="tg-content">{dataItem.order_no}</td>
                                        <td className="tg-content">{dataItem.date}</td>
                                        <td className="tg-content">{dataItem.patient_name}</td>
                                        <td className="tg-content">{dataItem.hospital_id}</td>
                                        <td className="tg-content">{dataItem.test_name}</td>
                                        <td className="tg-content">{dataItem.doctor}</td>
                                        <td className="tg-content">{dataItem.eta}</td>
                                        <td className="tg-content report-status">
                                            <div className={dataItem.status === 'Ready' ? 'ready-box' : dataItem.status === 'Partial Report' ? 'partial-box' : 'dropped-box'}>
                                                {dataItem.status}</div></td>
                                        <td className="tg-content"><div className='report-icons'><i className="fa fa-download"></i><i className="fa fa-message"></i></div></td>
                                    </tr>
                                ))
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table