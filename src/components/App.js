import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
  state={videos:[], selectedVideo : null};

  onSearchSubmit= async (term)=>{
    const response = await youtube.get('/search',
    {
      params:{q:term}
    });
    this.setState({videos: response.data.items});
    this.setState({selectedVideo:response.data.items[0]});
  };

  componentDidMount(){
    this.onSearchSubmit('test');
  }

  onVideoSelect= (video) =>{
    this.setState({selectedVideo:video});
  };

  render(){
    return (
      <div className = "ui container" >
        <SearchBar onSubmit ={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className ="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
            <div className ="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
