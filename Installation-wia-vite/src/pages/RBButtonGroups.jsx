import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { Fragment, useState } from 'react'

const RBButtonGroups = () => {
    const [styles, setStyles] = useState("")
    const handleChange = (value) => {
        setStyles(value)
    }
    const getStyle = () => {
        let newStyle;
        switch (styles) {
            case "left":
                newStyle = "start"
                break;
            case "center":
                newStyle = "center"
                break;
            case "right":
                newStyle = "end"
                break;
            default:
                break;
        }
        return {
            textAlign: newStyle
        }
    }
    return (
        <Fragment>
            <ButtonGroup className='mt-5'>
                <Button onClick={()=>setStyles("left")} variant="primary">Left</Button>
                <Button onClick={()=>setStyles("center")} variant="primary">Center</Button>
                <Button onClick={()=>setStyles("right")} variant="primary">Right</Button>
            </ButtonGroup>
            <p style={getStyle()}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestiae.</p>
        </Fragment>

    )
}

export default RBButtonGroups
