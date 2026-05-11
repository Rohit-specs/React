import React, { Fragment } from 'react'
import { Breadcrumb, } from 'react-bootstrap'
import { CaretRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

const CustomLink = (props) => {
    const { href, children } = props;
    return (
        <Fragment>
            <Link to={href}>{children}</Link>
            <CaretRight className='mx-1'/>
        </Fragment >
    )
};

const RBBreadcrumbs = () => {

    return (<Breadcrumb
        className="custom-breadcrumb"
    >
        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/cloud"
            bsPrefix=' '
        >
            Cloud
        </Breadcrumb.Item>

        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/files"
            bsPrefix=' '
        >
            Files
        </Breadcrumb.Item>

        <Breadcrumb.Item
            linkAs={CustomLink}
            href="/project"
            bsPrefix=' '
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

