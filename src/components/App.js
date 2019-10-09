import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'

class App extends React.Component{
  state={videos:[]};

  onSearchSubmit= async (term)=>{
    const response = await youtube.get('/search',
    {
      params:{q:term}
    });

    this.setState({videos: response.data.items});
  };

  render(){
    return (
      <div className = "ui container" >
        <SearchBar onSubmit ={this.onSearchSubmit}/>
        I habe {this.state.videos.length}
      </div>
    );
  };
}

export default App;
