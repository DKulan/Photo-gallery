import React, {useState, useEffect} from 'react'
import {DebounceInput} from 'react-debounce-input'


const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [orientation, setOrientation] = useState('')
  const [featured, setFeatured] = useState(false)

  useEffect(() => {
    props.handleSearch(searchTerm, orientation, featured)
  }, [searchTerm, orientation, featured])

  return (
    <div className="section">
      <DebounceInput
        minLength={2}
        debounceTimeout={200}
        className='input'
        placeholder='Search for an image'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="control" onChange={(e) => setOrientation(e.target.value)}>
        <label className="radio">
          <input type="radio" name="orientation" value='landscape'/> landscape
        </label>
        <label className="radio">
          <input type="radio" name="orientation" value='portrait'/> portrait
        </label>
        <label className="radio">
          <input type="radio" name="orientation" value='squarish'/> squarish
        </label>
      </div>
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" name="featured" onChange={(e) => setFeatured(e.target.checked)}/> featured
        </label>
      </div>
    </div>
  )
}

export default Search