import React from 'react'
import { Row ,Col, Image, Stack} from 'react-bootstrap'

const RBImages = () => {
  return (
    <Row>
        <Col lg={3}>
        Avatar With Name
        <Stack>
          <div className='icon-link'><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BSDMyxsc8n91H1uoyEn9gpZLhzWGelzhUA&s' style={{ width: '50px'}}></Image>Rajkumar Jadeja</div>
          <div className="icon-link"><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '50px'}}></Image>Radihika Parmar</div>
        </Stack> 
        
        </Col>
        <Col lg={5}>
        
        <div className="">Avatar Sizes</div>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '50px'}}></Image>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '60px'}}></Image>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '70px'}}></Image>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '80px'}}></Image>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '90px'}}></Image>
        </Col>
        <Col lg={4} className='avatar-group'>
        <div>avatar group</div>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
          <Image className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLa6y7AGAH5yIx9AAlfQpvKB8jPg-Z9rtw&s' style={{ width: '30px'}}></Image>
        </Col>
    </Row>
  )
}

export default RBImages
