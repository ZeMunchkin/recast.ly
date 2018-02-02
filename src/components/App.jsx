class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      search: 'dog',
    };
    
    console.log('our videos', this.state.videos);
    this.handleYouTube = this.handleYouTube.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount () {
    var options = {
      query: this.state.search,
      max: 5,
      key: window.YOUTUBE_API_KEY,
    };
    searchYouTube(options, this.handleYouTube);
  }
  
  handleClick (video) {
    //update our state.video with this.setState()
    this.setState({video: video});
    //pass in the selected video
  }
  
  handleYouTube (data) {
    //debugger;
    console.log('Init!');
    this.setState({videos: data});
    this.setState({video: data[0]});
  }
  
  handleSearch (input) {
    this.setState({search: input});
    searchYouTube({
      query: input,
      max: 5,
      key: window.YOUTUBE_API_KEY,
    }, this.handleYouTube);
  }
  
  render () {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchFunc={this.handleSearch} youTubeFunc={this.handleYouTube}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList 
                videos={ this.state.videos } 
                clickFunc={ this.handleClick }/>
            </div>
          </div>
        </div>
      </div>
    );
  }   
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
