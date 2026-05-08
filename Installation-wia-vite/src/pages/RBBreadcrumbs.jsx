import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
const RBBreadcrumbs = () => {
    //     const CustomLink = (props) => {
    // const { href, children } = props;
    // return <Link href={href}>{children}</Link>
    // };
    return (
        <Breadcrumb separator=">">
            <Breadcrumb.Item href="#">Cloud</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Files</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Project</Breadcrumb.Item>
            <Breadcrumb.Item active>
                ProjectName
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default RBBreadcrumbs
