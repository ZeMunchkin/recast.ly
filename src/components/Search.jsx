var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={(e) => {
      props.searchFunc(e.target.value);
    }} id="input" className="form-control" type="text" />
    <button onClick={() => {
      var options = {
        query: $('#input').val(),
        max: 5,
        key: window.YOUTUBE_API_KEY,
      };
      props.handleSearch(options, props.youTubeFunc);
    } } className="btn hidden-sm-down">
       <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
