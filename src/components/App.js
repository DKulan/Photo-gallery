import React, {useState, useEffect} from 'react'
import Search from './Search'
import ImageList from './ImageList'
import {loadImages} from '../API'


const App = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    loadImages(null, null, null)
      .then((data) => {
        setImages(data)
      })
  }, [])

  const handleSearch = (searchTerm, orientation, featured) => {
    loadImages(searchTerm, orientation, featured)
      .then((data) => {
          setImages(data)
      })
  }

  return (
    <div className="container is-fluid">
      <Search handleSearch={handleSearch}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App