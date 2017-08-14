import React from 'react';

class GifSearch extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form className="gif-form" onSubmit={this.props.fetchFunc} >
        <h1> Search For Gif </h1>
        <input type="text"></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }

}

export default GifSearch;
