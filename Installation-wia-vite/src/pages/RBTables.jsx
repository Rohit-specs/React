import React from 'react'
import { Table, Badge } from 'react-bootstrap';
import TableData from '../data/TableData';
import { Cart, VectorPen, Telephone } from 'react-bootstrap-icons'


const RBTables = () => {
    function badgeVarient(data) {
        let variant;
        const status = data
        switch (status) {
            case "NEGOTIATING":
                variant = "warning"
                break;
            case "FAILED":
                variant = "danger"
                break;
            case "PAID":
                variant = "success"
                break;
            case "PENDING":
                variant = "info"
                break;
            case "OVERDUE":
                variant = "secondary"
                break;
            default:
                variant = "primary"
                break;
        }
        return <Badge bg={variant}>{status}</Badge>
    }
    function department(data) {
        let variant;
        const status = data
        switch (status) {
            case "Sales":
                return (<div className="icon-link"><Cart /><span>{status}</span></div>)
            case "Support":
                return (<div className="icon-link"><Telephone /><span>{status}</span></div>)
            case "Design":
                return (<div className="icon-link"><VectorPen /><span>{status}</span></div>)
        }
    }
    return (
        <div>
            <Table borderless>
                <thead className='border-bottom'>
                    <tr>
                        <th>Employee</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Payment Date</th>
                        <th>Payment Status</th>
                        <th>Employment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((emp) => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.employeeName}</td>
                                {/* <td> </td> */}
                                {/* <td>{`${department(emp.department)} ${emp.department}`} </td> */}
                                <td>{department(emp.department)} </td>
                                <td>${emp.salary}</td>
                                <td>{emp.paymentDate}</td>
                                <td>{badgeVarient(emp.paymentStatus)}</td>
                                <td>{emp.employmentStatus}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Payment Date</th>
                        <th>Payment Status</th>
                        <th>Employment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((emp) => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.employeeName}</td>
                                {/* <td> </td> */}
                                {/* <td>{`${department(emp.department)} ${emp.department}`} </td> */}
                                <td>{department(emp.department)} </td>
                                <td>${emp.salary}</td>
                                <td>{emp.paymentDate}</td>
                                <td>{badgeVarient(emp.paymentStatus)}</td>
                                <td>{emp.employmentStatus}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default RBTables
