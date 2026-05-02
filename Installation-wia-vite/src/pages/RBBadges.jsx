import React from 'react'
import TableData from '../data/TableData'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
const RBBadges = () => {
    function badgeVarient(data) {
        let variant;
        const status = data.paymentStatus
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
        // return <li key={data.id}><Badge bg={variant}>{status}</Badge></li>
    }

    return (
        // <ul className='list-unstyled'>
        //     {TableData.map((data) => badgeVarient(data))}
        // </ul>
        <Stack gap={3} direction='horizontal' className='mt-5'>{TableData.map((data) => badgeVarient(data))}</Stack>
    )
}

export default RBBadges

