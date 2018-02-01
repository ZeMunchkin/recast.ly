class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
    };
    console.log('our videos', this.state.videos);
  }
  
  handleClick (video) {
    //update our state.video with this.setState()
    //pass in the selected video
    this.setState({video: video});
  }
  
  searchYouTube (query) {
    var app = this;
    $.ajax ({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'q': query,
        'maxResults': 5,
        'part': 'snippet',
        'videoEmbeddable': true,
        'type': 'video',
        'key': window.YOUTUBE_API_KEY,
      },
      success: function (data) {
        console.log('Success! Here is the data: ', data);
        app.setState({videos: data.items});
        app.setState({video: data.items[0]});
      },
      error: function (data) {
        console.log('Error! ', data);
      }
    });
  }
  
  render () {
    console.log('our current videos state: ', this.state.videos);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchFunc={this.searchYouTube.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList clickFunc={this.handleClick.bind(this)} videos={this.state.videos}/></div>
          </div>
        </div>
      </div>
    );
  }   
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
