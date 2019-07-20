import React from 'react'


const Image = ({image}) => {
  return (
    <div className="column is-one-quarter">
      <div className="box">
        <figure>
          <a href={image.links.download} target='_blank' rel='noopener noreferrer'>
            <img src={image.urls.thumb} alt='thumbnail'/>
          </a>
          <figcaption
            className='has-text-primary'
            style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}
          >{!image.description ? image.alt_description : image.description}
            <p><strong>Photo by:</strong> {image.user.first_name} {image.user.last_name}</p>
            <p><strong>Downloads:</strong> {image.downloads}</p>
            <p><strong>Likes:</strong> {image.likes}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Image