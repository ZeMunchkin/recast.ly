var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={(e) => props.searchFunc(e.target.value)} id="input" className="form-control" type="text" />
    <button onClick={() => {
      console.log( 'I was clicked!');
   		// var input = $('#input').val();
      var options = {
        query: input,
        max: 5,
        key: window.YOUTUBE_API_KEY,
      };
      searchYouTube(options, props.youTubeFunc);
      
     //  var videos = null;
    	// searchYouTube(options, (data) => {
     //    videos = data;
     //  });
     //  props.setStateFunc(videos);
    } 
	} className="btn hidden-sm-down">
      	<span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
