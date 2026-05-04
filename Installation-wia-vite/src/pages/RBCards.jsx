import {Card ,Button ,Stack} from 'react-bootstrap';
import React, { Fragment } from 'react'
import RBCardsData from '../data/RBCardsData';
import headphone from '../assets/images/headphone.jpg'

const RBCards = () => {
    // function cardDataHandler(data) {
    //     return
    //     (<Card key={data.id} style={{ width: '18rem' }}>


    //         <Card.Body>
    //             <Card.Title>{data.title}</Card.Title><Card.Img variant="top" src="holder.js/100px180" />
    //             <Card.Text>
    //                 <p>{`${data.name} ${data.description}`}</p>
    //                 <div className="price">${data.price} <span style={{ textDecoration: "line-through" }}>{data.originalPrice}</span></div>
    //             </Card.Text>
    //             <Stack>
    //                 <Button variant="outline-primary" >Add To Cart</Button>
    //                 <Button variant="primary" className='ms-auto'>Buy Now</Button>
    //                 </Stack>

    //         </Card.Body>
    //     </Card>)
    // }
    return (
        RBCardsData.map((data) => {return(<Card key={data.id} className='d-inline-block me-2' style={{ width: '18rem' }}>


            <Card.Body>
                <Card.Title className='fs-6'>{data.title}</Card.Title><Card.Img variant="top" src={headphone} />
                <Card.Text>
                    <p>{`${data.name} ${data.description}`}</p>
                    <div className="price">${data.price} <span style={{ textDecoration: "line-through" }}>MRP:${data.originalPrice}</span></div>
                </Card.Text>
                <Stack direction='horizontal'>
                    <Button variant="outline-primary" >Add To Cart</Button>
                    <Button variant="primary" className='ms-auto'>Buy Now</Button>
                    </Stack>

            </Card.Body>
        </Card>)} )
    )
}

export default RBCards
