import React, { useRef, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import carouselData from './../data/RBCarouselData'
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, Circle } from 'react-bootstrap-icons';
import { Button, Stack } from 'react-bootstrap';
const RBCarousel = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef()
  function handleSelect(newIndex) {
    setIndex(newIndex);
  }
  return (<>
    <Carousel ref={sliderRef} activeIndex={index} onSelect={handleSelect} indicators={false}
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
    <div className='d-flex justify-content-center gap-2 my-3'>{carouselData.map((item, i) => {
      return (
        <div onClick={() => setIndex(i)} role='button' className={`carousel-btn-indicator rounded-circle ${index===i?"bg-primary":""}`}></div>
        // <Circle onClick={() => setIndex(i)} role='button' className={`text-light-subtle rounded-circle ${index===i?"bg-primary":""}`}></Circle>
      )
    })}</div>

    <div className="d-flex justify-content-center gap-3">
      <Button onClick={() => sliderRef.current.prev()} className='icon-link'><ArrowLeft /> Prev</Button>
      <Button onClick={() => sliderRef.current.next()} className='icon-link'>Next <ArrowRight /></Button>
    </div>

  </>
  )
}

export default RBCarousel
