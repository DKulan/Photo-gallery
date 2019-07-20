export const CLIENT_ID = 'KEY GOES HERE!'


const loadImages = (searchTerm, orientation, featured) => {
  return fetch(`https://api.unsplash.com/photos/random?&count=30&client_id=${CLIENT_ID}${searchTerm && `&query=${searchTerm}`}${orientation && `&orientation=${orientation}`}${featured && `&featured=${true}`}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch images')
      }
    })
}

export {loadImages}