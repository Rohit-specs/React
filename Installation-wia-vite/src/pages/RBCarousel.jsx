import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import carouselData from './../data/RBCarouselData'
import { ArrowLeftCircle, ArrowRightCircle, Circle} from 'react-bootstrap-icons';
import { Button, Stack } from 'react-bootstrap';
const RBCarousel = () => {
  const [index, setIndex] = useState(0);
  function handleSelect(newIndex) {
    setIndex(selectedIndex);
  }
  return (<>
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}
      prevIcon={
        <ArrowLeftCircle size={30} className='opacity-75' />}
      nextIcon={
        <ArrowRightCircle size={30} className='opacity-75' />
      }>
      {carouselData.map((sliderData, index) => {
        return (
          <Carousel.Item key={index}>
            <Image src={sliderData.image} className='rounded-4 w-100'></Image>
            <Carousel.Caption>
              <h3>{sliderData.title}</h3>
              <p>{sliderData.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
    <div className='d-flex justify-content-center gap-2 my-3'>{carouselData.map((item,index) => {
      return (

        <Circle onClick={()=>setIndex(index)} role='button'></Circle>
        
      )
    })}</div>
    

    <Button onClick={() => setIndex(2)}>Next</Button>
    <Button onClick={() => setIndex(1)}>Prev</Button>
    <div>Active Carousel item index: {index}</div></>
  )
}

export default RBCarousel
