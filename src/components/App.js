import React from 'react'

// import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// import GifSearch from './GifSearch'

// the App component should render out the GifListContainer component
// < NavBar color='black' title="Giphy Search" render={GifSearch} />

function App() {
  return (
    <div>
      <GifListContainer />
    </div>
  )
}

export default App
