class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
    };
    
    // this.searchYouTube('dog');
    
    console.log('our videos', this.state.videos);
  }
  
  componentDidMount () {
    this.searchYouTube('dog');
  }
  
  handleClick (video) {
    //update our state.video with this.setState()
    this.setState({video: video});
    //pass in the selected video
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos}/></div>
          </div>
        </div>
      </div>
    );
  }   
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
