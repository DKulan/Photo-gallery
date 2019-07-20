import React from 'react'
import Image from './Image'


const ImageList = ({images}) => {
  return (
    <div className="section">
      <div className="columns is-multiline">
        {
          images.map((image) => (
            <Image key={image.id} image={image}/>
          ))
        }
      </div>
    </div>
  )
}

export default ImageList