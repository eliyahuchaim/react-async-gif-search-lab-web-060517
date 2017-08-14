import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';


export default class GifListContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      gifs: []
    }

    this.gifFetch = this.gifFetch.bind(this)
  }


  gifFetch(event){
    event.preventDefault()
    // debugger
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=dc6zaTOxFJmzC&limit=3`)
    .then(resp => resp.json())
    .then(resp => {this.setState({
      gifs: resp.data
      })
    })
  }



  render(){
    
    return(
      <div>
      <GifSearch fetchFunc={this.gifFetch} />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
