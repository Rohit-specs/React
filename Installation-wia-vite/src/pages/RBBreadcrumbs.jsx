import React from 'react'
import { Breadcrumb ,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
  
const CustomLink = (props) => {
        const { href, children } = props;
    return <Link to={href}>{children}</Link>
    };
    
const RBBreadcrumbs = () => {
     
    return (<Breadcrumb
        className="custom-breadcrumb"
    >
        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/cloud"
        >
            Cloud
        </Breadcrumb.Item>

        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/files"
        >
            Files
        </Breadcrumb.Item>

        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/project"
        >
            Project
        </Breadcrumb.Item>

        <Breadcrumb.Item active>
            ProjectName
        </Breadcrumb.Item>
    </Breadcrumb>
    )
}

export default RBBreadcrumbs

