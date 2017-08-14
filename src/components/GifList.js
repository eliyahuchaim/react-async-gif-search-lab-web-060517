import React from 'react';

class GifList extends React.Component{
  constructor(props){
    super(props)

    this.renderGifs = this.renderGifs.bind(this)
  }

  renderGifs(){
    return this.props.gifs.map(gif => {
      // console.log(gif)
      return (
        <div className="container">
        <br/>
        <br/>
          <img src={gif.images.original.url}/>
        </div>
      )
    })
  }

  render(){
    // console.log("HI from gif list", this.props)
    return(
      <div>
      {this.renderGifs()}
      </div>
    )
  }

}

export default GifList;
