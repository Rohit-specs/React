import React from 'react'
import Figure from 'react-bootstrap/Figure';

const RBFigures = () => {
  return (
    <Figure className='mt-5'>
      <Figure.Image
        width={171}
        height={180}
        className='img-thumbnail'
        alt="image taken from google"
        src={"https://wbskztclbriekwpehznv.supabase.co/storage/v1/object/public/precious-plastic/profiles/51902/istockphoto-517188688-612x612.jpg"}
      />
      <Figure.Caption>
        Image Resource : Google.com
      </Figure.Caption>
    </Figure>
  )
}

export default RBFigures